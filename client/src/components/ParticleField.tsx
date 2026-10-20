import { useEffect, useRef } from "react";

/** Decorative pointer-reactive particle field; intentionally dependency-free. */
export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0;
    let height = 0;
    let particles: Array<{ x: number; y: number; vx: number; vy: number }> = [];
    let frameId = 0;
    let lastFrame = 0;
    let isIntersecting = true;
    let pointer = { x: -1000, y: -1000, active: false };
    const frameInterval = 1000 / 30;
    const linkDistance = 118;

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(22, Math.min(72, Math.round((width * height) / 21000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
      }));
      draw(0, true);
    };

    const draw = (time: number, staticFrame = false) => {
      if (!staticFrame && time - lastFrame < frameInterval) {
        frameId = window.requestAnimationFrame(draw);
        return;
      }
      if (!staticFrame) lastFrame = time;
      context.clearRect(0, 0, width, height);
      if (!width || !height) return;
      const animate = !reducedMotion.matches && !staticFrame;
      const influenceRadius = 155;

      if (animate && pointer.active) {
        for (const particle of particles) {
          const dx = pointer.x - particle.x;
          const dy = pointer.y - particle.y;
          const distance = Math.hypot(dx, dy);
          if (distance > 12 && distance < influenceRadius) {
            const force = (1 - distance / influenceRadius) * 0.012;
            particle.vx += (dx / distance) * force;
            particle.vy += (dy / distance) * force;
          }
        }
      }

      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        if (animate) {
          particle.x += particle.vx;
          particle.y += particle.vy;
          particle.vx *= 0.995;
          particle.vy *= 0.995;
          if (particle.x < 0 || particle.x > width) particle.vx *= -1;
          if (particle.y < 0 || particle.y > height) particle.vy *= -1;
        }

        context.beginPath();
        context.arc(particle.x, particle.y, 1.3, 0, Math.PI * 2);
        context.fillStyle = "rgba(118, 226, 255, 0.66)";
        context.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < linkDistance) {
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(other.x, other.y);
            context.strokeStyle = `rgba(74, 190, 230, ${(1 - distance / linkDistance) * 0.16})`;
            context.lineWidth = 0.7;
            context.stroke();
          }
        }

        if (pointer.active) {
          const dx = pointer.x - particle.x;
          const dy = pointer.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < influenceRadius) {
            context.beginPath();
            context.moveTo(pointer.x, pointer.y);
            context.lineTo(particle.x, particle.y);
            context.strokeStyle = `rgba(55, 230, 255, ${(1 - distance / influenceRadius) * 0.32})`;
            context.lineWidth = 0.8;
            context.stroke();
          }
        }
      }

      if (animate && isIntersecting && document.visibilityState === "visible") {
        frameId = window.requestAnimationFrame(draw);
      }
    };

    const scheduleDraw = () => {
      window.cancelAnimationFrame(frameId);
      lastFrame = 0;
      if (isIntersecting && document.visibilityState === "visible" && !reducedMotion.matches) {
        frameId = window.requestAnimationFrame(draw);
      } else {
        draw(0, true);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const bounds = canvas.getBoundingClientRect();
      pointer = {
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top,
        active: event.clientX >= bounds.left && event.clientX <= bounds.right && event.clientY >= bounds.top && event.clientY <= bounds.bottom,
      };
      if (reducedMotion.matches) draw(0, true);
    };
    const clearPointer = (event: PointerEvent) => {
      if (event.relatedTarget !== null) return;
      pointer.active = false;
      if (reducedMotion.matches) draw(0, true);
    };
    const handleVisibility = () => scheduleDraw();
    const observer = new IntersectionObserver(([entry]) => {
      isIntersecting = entry.isIntersecting;
      scheduleDraw();
    });
    observer.observe(canvas);

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerout", clearPointer, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);
    reducedMotion.addEventListener("change", scheduleDraw);
    resize();

    return () => {
      window.cancelAnimationFrame(frameId);
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerout", clearPointer);
      document.removeEventListener("visibilitychange", handleVisibility);
      reducedMotion.removeEventListener("change", scheduleDraw);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
    />
  );
}
