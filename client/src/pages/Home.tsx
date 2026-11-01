/**
 * OpenClowAI Professional Portfolio
 * Design System: Minimalist Tech Elegance
 * - Deep charcoal background (#0a0e27) with electric blue accents (#0066ff)
 * - IBM Plex Sans for typography, IBM Plex Mono for code
 * - Asymmetric layout with generous whitespace
 * - Scroll-triggered fade-in animations with electric blue glow effects
 */

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Clock3,
  Github,
  Plus,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import { lazy, Suspense, useState } from "react";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";
import { usePageMetadata } from "@/hooks/usePageMetadata";

const ParticleField = lazy(() => import("@/components/ParticleField"));

const HOME_METADATA = {
  title: "OpenClowAI — Intelligence Redefined",
  description:
    "A modern AI workspace with multi-provider intelligence, task management, and secure session-based assistance.",
  canonical: "https://rintuchowdory.github.io/openclow-portfolio/",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "OpenClowAI",
    url: "https://rintuchowdory.github.io/openclow-portfolio/",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "An AI workspace with multi-provider intelligence, task management, and secure session-based assistance.",
    image: "https://rintuchowdory.github.io/openclow-portfolio/openclow-og.png",
    sameAs: ["https://github.com/rintuchowdory/openclow"],
  },
} as const;

/**
 * Feature Card Component with scroll-triggered animation and glow effect
 */
function FeatureCard({
  icon: Icon,
  title,
  description,
  delay,
}: {
  icon: any;
  title: string;
  description: string;
  delay: number;
}) {
  const ref = useScrollTrigger();
  return (
    <div
      ref={ref}
      className={`fade-in-on-scroll fade-in-delay-${delay} digital-feature-card group p-6 rounded-lg border border-border/70 hover:border-primary/40 transition-all glow-on-hover`}
    >
      <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

/**
 * Provider Card Component with scroll-triggered animation and glow effect
 */
function ProviderCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const ref = useScrollTrigger();
  return (
    <div
      ref={ref}
      className="fade-in-on-scroll digital-feature-card p-6 rounded-lg border border-border/70 glow-on-hover"
    >
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

/**
 * Tech Stack Item Component with scroll-triggered animation
 */
function TechItem({ name, desc }: { name: string; desc: string }) {
  const ref = useScrollTrigger();
  return (
    <div ref={ref} className="fade-in-on-scroll flex items-start gap-3">
      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}

const MODEL_DETAILS = {
  HuggingFace: {
    label: "HuggingFace",
    model: "zephyr-7b-beta",
    color: "text-emerald-300",
    status: "Ready · Free inference",
    response:
      "I can help you break this project into clear, executable next steps.",
  },
  Gemini: {
    label: "Gemini",
    model: "gemini-2.0-flash",
    color: "text-cyan-300",
    status: "Ready · Fast fallback",
    response:
      "I found three focus areas: prioritization, automation, and measurable outcomes.",
  },
  OpenAI: {
    label: "OpenAI",
    model: "gpt-4o-mini",
    color: "text-violet-300",
    status: "Ready · Premium reasoning",
    response:
      "Here is a concise plan with the highest-impact actions ranked by effort and value.",
  },
} as const;

type ModelName = keyof typeof MODEL_DETAILS;

function ModelSwitcherMockup() {
  const [activeModel, setActiveModel] = useState<ModelName>("HuggingFace");
  const selected = MODEL_DETAILS[activeModel];
  return (
    <div className="digital-demo-panel rounded-2xl border border-border/70 p-5 md:p-7">
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-primary">
            LIVE MOCKUP / 01
          </p>
          <h3 className="mt-2 text-2xl font-bold">
            Switch intelligence without leaving the workspace.
          </h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Compare providers, see their availability, and keep the same
            conversation context while you choose the right model.
          </p>
        </div>
        <div className="rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1.5 font-mono text-xs text-emerald-200">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-300" />
          3 providers online
        </div>
      </div>
      <div className="mt-7 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-2">
          {(Object.keys(MODEL_DETAILS) as ModelName[]).map(model => {
            const details = MODEL_DETAILS[model];
            const isActive = model === activeModel;
            return (
              <button
                key={model}
                type="button"
                onClick={() => setActiveModel(model)}
                aria-pressed={isActive}
                className={`flex w-full items-center justify-between rounded-lg border p-4 text-left transition-colors ${isActive ? "border-primary/60 bg-primary/10" : "border-border/60 bg-background/40 hover:border-primary/30"}`}
              >
                <span>
                  <span className={`block font-semibold ${details.color}`}>
                    {details.label}
                  </span>
                  <span className="mt-1 block font-mono text-[11px] text-muted-foreground">
                    {details.model}
                  </span>
                </span>
                <span className="flex items-center gap-2 font-mono text-[10px] text-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  online
                </span>
              </button>
            );
          })}
        </div>
        <div className="rounded-xl border border-border/60 bg-background/70 p-4 md:p-5">
          <div className="flex items-center justify-between border-b border-border/60 pb-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Active provider
              </p>
              <p className={`mt-1 font-semibold ${selected.color}`}>
                {selected.label}
              </p>
            </div>
            <span className="rounded-full bg-emerald-300/10 px-2.5 py-1 font-mono text-[10px] text-emerald-200">
              {selected.status}
            </span>
          </div>
          <div className="space-y-4 py-5 text-sm">
            <div className="ml-auto max-w-[82%] rounded-xl rounded-tr-sm bg-primary/15 p-3 text-foreground">
              Summarize the next steps for my project.
            </div>
            <div className="max-w-[90%] rounded-xl rounded-tl-sm border border-border/60 bg-card p-3 text-muted-foreground">
              <div className="mb-2 flex items-center gap-2 font-mono text-[10px] text-primary">
                <CheckCircle2 className="h-3.5 w-3.5" />
                {selected.model}
              </div>
              {selected.response}
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-border/60 bg-muted/40 px-3 py-2 text-xs text-muted-foreground">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            Context synced · ready for your next message
          </div>
        </div>
      </div>
    </div>
  );
}

type Task = {
  id: number;
  title: string;
  project: string;
  priority: "High" | "Medium" | "Low";
  done: boolean;
};

function TaskManagerMockup() {
  const [filter, setFilter] = useState<"All" | Task["priority"]>("All");
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Connect Gemini fallback",
      project: "AI workspace",
      priority: "High",
      done: false,
    },
    {
      id: 2,
      title: "Write launch checklist",
      project: "OpenClowAI",
      priority: "Medium",
      done: false,
    },
    {
      id: 3,
      title: "Review privacy page",
      project: "Website",
      priority: "Low",
      done: true,
    },
  ]);
  const visibleTasks =
    filter === "All" ? tasks : tasks.filter(task => task.priority === filter);
  const addTask = (event: React.FormEvent) => {
    event.preventDefault();
    const title = newTask.trim();
    if (!title) return;
    setTasks(current => [
      ...current,
      {
        id: Date.now(),
        title,
        project: "Inbox",
        priority: "Medium",
        done: false,
      },
    ]);
    setNewTask("");
  };
  return (
    <div className="digital-demo-panel rounded-2xl border border-border/70 p-5 md:p-7">
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-primary">
            LIVE MOCKUP / 02
          </p>
          <h3 className="mt-2 text-2xl font-bold">
            Turn conversations into momentum.
          </h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Capture follow-ups, assign priority, and see what is moving forward
            at a glance.
          </p>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <Clock3 className="h-4 w-4 text-primary" />
          {tasks.filter(task => !task.done).length} active tasks
        </div>
      </div>
      <div className="mt-7 grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="rounded-xl border border-border/60 bg-background/55 p-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Workspace
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <div className="rounded-lg bg-primary/10 px-3 py-2.5 font-semibold text-primary">
              Inbox <span className="float-right font-mono text-xs">08</span>
            </div>
            <div className="rounded-lg px-3 py-2.5 text-muted-foreground">
              Today <span className="float-right font-mono text-xs">03</span>
            </div>
            <div className="rounded-lg px-3 py-2.5 text-muted-foreground">
              AI workspace{" "}
              <span className="float-right font-mono text-xs">12</span>
            </div>
          </div>
          <div className="mt-8 border-t border-border/60 pt-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Focus
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Prioritize small actions that keep the larger project moving.
            </p>
          </div>
        </div>
        <div className="rounded-xl border border-border/60 bg-background/70 p-4 md:p-5">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-4">
            <div>
              <p className="text-lg font-semibold">Today’s queue</p>
              <p className="font-mono text-[10px] text-muted-foreground">
                {visibleTasks.length} visible tasks
              </p>
            </div>
            <div className="flex gap-1 rounded-lg border border-border/60 bg-muted/30 p-1">
              {(["All", "High", "Medium", "Low"] as const).map(option => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setFilter(option)}
                  className={`rounded-md px-2.5 py-1.5 font-mono text-[10px] ${filter === option ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-2 py-4">
            {visibleTasks.map(task => (
              <label
                key={task.id}
                className="flex items-center gap-3 rounded-lg border border-border/50 bg-card/50 p-3 text-sm"
              >
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() =>
                    setTasks(current =>
                      current.map(item =>
                        item.id === task.id
                          ? { ...item, done: !item.done }
                          : item
                      )
                    )
                  }
                  className="h-4 w-4 accent-cyan-300"
                />
                <span
                  className={
                    task.done
                      ? "flex-1 text-muted-foreground line-through"
                      : "flex-1"
                  }
                >
                  {task.title}
                  <span className="mt-1 block font-mono text-[10px] text-muted-foreground">
                    {task.project}
                  </span>
                </span>
                <span
                  className={`rounded-full px-2 py-1 font-mono text-[10px] ${task.priority === "High" ? "bg-rose-300/10 text-rose-200" : task.priority === "Medium" ? "bg-amber-300/10 text-amber-200" : "bg-slate-300/10 text-slate-300"}`}
                >
                  {task.priority}
                </span>
              </label>
            ))}
          </div>
          <form
            onSubmit={addTask}
            className="flex gap-2 border-t border-border/60 pt-4"
          >
            <input
              aria-label="Neue Aufgabe"
              value={newTask}
              onChange={event => setNewTask(event.target.value)}
              placeholder="Add a task..."
              className="min-w-0 flex-1 rounded-lg border border-border/60 bg-muted/30 px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/60"
            />
            <button
              type="submit"
              aria-label="Aufgabe hinzufügen"
              className="rounded-lg bg-primary px-3 text-primary-foreground"
            >
              <Plus className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  usePageMetadata(HOME_METADATA);

  const handleStartFree = () => {
    window.location.assign(`${import.meta.env.BASE_URL}signup/`);
  };

  const handleViewGitHub = () => {
    window.open("https://github.com/rintuchowdory/openclow", "_blank");
  };

  const handleFeatures = () => {
    const element = document.getElementById("features");
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleTechStack = () => {
    const element = document.getElementById("tech");
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleGetStarted = () => {
    const element = document.getElementById("cta");
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="digital-shell min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="digital-header sticky top-0 z-50 border-b border-border/30 backdrop-blur-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="digital-mark w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                OC
              </span>
            </div>
            <span className="font-bold text-lg">OpenClowAI</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <button
              onClick={handleFeatures}
              className="text-sm hover:text-primary transition-colors cursor-pointer bg-none border-none p-0"
            >
              Features
            </button>
            <button
              onClick={handleTechStack}
              className="text-sm hover:text-primary transition-colors cursor-pointer bg-none border-none p-0"
            >
              Tech Stack
            </button>
            <button
              onClick={handleGetStarted}
              className="text-sm hover:text-primary transition-colors cursor-pointer bg-none border-none p-0"
            >
              Get Started
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <Suspense fallback={null}>
          <ParticleField />
        </Suspense>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="digital-eyebrow">
                  <span className="digital-dot" aria-hidden="true" /> OpenClowAI
                  / AI WORKSPACE
                </p>
                <h1 className="digital-title-glow text-5xl md:text-6xl font-bold leading-tight">
                  Intelligence
                  <br />
                  <span className="text-primary">Redefined.</span>
                </h1>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                Openclow ULTRA is a beautiful, modern AI chat application
                powered by HuggingFace's free inference API, with Gemini and
                OpenAI fallback support. Experience the future of AI assistance.
              </p>
              <div className="flex gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                  onClick={handleStartFree}
                >
                  Start Free <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border hover:bg-muted"
                  onClick={handleViewGitHub}
                >
                  View on GitHub
                </Button>
              </div>
              <p className="font-mono text-xs tracking-[0.18em] text-muted-foreground">
                MULTI-MODEL INTELLIGENCE <span className="text-primary">/</span>{" "}
                ONE WORKSPACE
              </p>
            </div>

            {/* Right: Hero Image */}
            <div className="relative h-96 md:h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-lg blur-3xl" />
              <div className="digital-visual-frame relative z-10 w-full">
                <img
                  src={`${import.meta.env.BASE_URL}hero-interface.svg`}
                  alt="OpenClowAI Interface"
                  width="960"
                  height="560"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Geometric Accent */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="section-lazy py-20 md:py-32 border-t border-border/30"
      >
        <div className="container">
          <div className="space-y-12">
            <div className="space-y-3 max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold">
                Powerful Features
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to leverage AI for productivity
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <FeatureCard
                icon={Sparkles}
                title="Multi-Provider AI"
                description="Switch between HuggingFace, Gemini, and OpenAI. Choose the model that works best for you."
                delay={1}
              />
              <FeatureCard
                icon={Code2}
                title="Task Management"
                description="Organize your work with priorities, categories, and due dates. Stay on top of your goals."
                delay={2}
              />
              <FeatureCard
                icon={Zap}
                title="Real-time Status"
                description="See AI availability at a glance. Know instantly if your provider is ready to assist."
                delay={3}
              />
              <FeatureCard
                icon={Shield}
                title="Secure & Private"
                description="Your data is protected. API keys are stored securely per session with Manus OAuth."
                delay={4}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="multi-model"
        className="section-lazy border-t border-border/30 py-20 md:py-28"
      >
        <div className="container">
          <ModelSwitcherMockup />
        </div>
      </section>

      <section
        id="task-management"
        className="section-lazy border-t border-border/30 py-20 md:py-28"
      >
        <div className="container">
          <TaskManagerMockup />
        </div>
      </section>

      {/* Tech Stack Section */}
      <section
        id="tech"
        className="section-lazy py-20 md:py-32 border-t border-border/30"
      >
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Tech Stack Image */}
            <div className="relative h-96 md:h-full flex items-center justify-center order-2 md:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg blur-3xl" />
              <img
                src={`${import.meta.env.BASE_URL}tech-stack-visual.svg`}
                alt="Tech Stack"
                width="800"
                height="520"
                loading="lazy"
                decoding="async"
                className="relative z-10 rounded-lg shadow-2xl w-full h-auto"
              />
            </div>

            {/* Tech Stack Content */}
            <div className="space-y-8 order-1 md:order-2">
              <div className="space-y-3">
                <h2 className="text-4xl md:text-5xl font-bold">
                  Built with Modern Tech
                </h2>
                <p className="text-lg text-muted-foreground">
                  A robust, scalable, and type-safe foundation for modern web
                  applications
                </p>
              </div>

              <div className="space-y-4">
                <TechItem name="Vite 7" desc="Fast frontend build tooling" />
                <TechItem name="React 19" desc="Modern UI library" />
                <TechItem name="TypeScript" desc="Type safety at scale" />
                <TechItem name="Tailwind CSS" desc="Utility-first styling" />
                <TechItem name="tRPC" desc="Type-safe APIs" />
                <TechItem name="Drizzle ORM" desc="Database layer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Providers Section */}
      <section className="section-lazy py-20 md:py-32 border-t border-border/30">
        <div className="container">
          <div className="space-y-12">
            <div className="space-y-3 max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold">
                Multiple AI Providers
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose from leading AI models with intelligent fallback support
              </p>
            </div>

            <div className="relative h-96 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg blur-3xl" />
              <img
                src={`${import.meta.env.BASE_URL}ai-providers-visual.svg`}
                alt="AI Providers"
                width="960"
                height="420"
                loading="lazy"
                decoding="async"
                className="relative z-10 rounded-lg shadow-2xl w-full h-auto max-w-2xl"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <ProviderCard
                title="HuggingFace (Free)"
                description="Unlimited API calls to Zephyr-7B with no credit card required"
              />
              <ProviderCard
                title="Gemini (Free with Limits)"
                description="Automatic fallback if HuggingFace is unavailable"
              />
              <ProviderCard
                title="OpenAI (Paid)"
                description="Premium option for advanced use cases"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="cta"
        className="section-lazy py-20 md:py-32 border-t border-border/30"
      >
        <div className="container">
          <div className="digital-cta max-w-3xl mx-auto rounded-2xl p-8 md:p-12 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Ready to boost your productivity?
              </h2>
              <p className="text-lg text-muted-foreground">
                Join thousands of users leveraging AI to accomplish more. Start
                for free today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
                onClick={handleStartFree}
              >
                Start Now <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-muted"
                onClick={handleViewGitHub}
              >
                <Github className="w-4 h-4 mr-2" />
                View Repository
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 py-12 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xs">
                    OC
                  </span>
                </div>
                <span className="font-bold">OpenClowAI</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Professional AI assistant platform
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <button
                    onClick={handleFeatures}
                    className="hover:text-foreground transition-colors cursor-pointer bg-none border-none p-0 text-left"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                    onClick={e => {
                      e.preventDefault();
                      alert("Pricing page coming soon!");
                    }}
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                    onClick={e => {
                      e.preventDefault();
                      alert("Documentation coming soon!");
                    }}
                  >
                    Docs
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                    onClick={e => {
                      e.preventDefault();
                      alert("About page coming soon!");
                    }}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                    onClick={e => {
                      e.preventDefault();
                      alert("Blog coming soon!");
                    }}
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href={`${import.meta.env.BASE_URL}contact/`}
                    className="hover:text-foreground transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href={`${import.meta.env.BASE_URL}privacy/`}
                    className="hover:text-foreground transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href={`${import.meta.env.BASE_URL}terms/`}
                    className="hover:text-foreground transition-colors"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                    onClick={e => {
                      e.preventDefault();
                      alert("License coming soon!");
                    }}
                  >
                    License
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>© 2026 OpenClowAI. Built with React, Vite, and Manus.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a
                href="https://github.com/rintuchowdory/openclow"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a
                href="#"
                className="hover:text-foreground transition-colors"
                onClick={e => {
                  e.preventDefault();
                  alert("Twitter coming soon!");
                }}
              >
                Twitter
              </a>
              <a
                href="#"
                className="hover:text-foreground transition-colors"
                onClick={e => {
                  e.preventDefault();
                  alert("Discord coming soon!");
                }}
              >
                Discord
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
