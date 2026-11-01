import { ArrowLeft, ExternalLink, Send } from "lucide-react";
import { useState } from "react";
import { usePageMetadata } from "@/hooks/usePageMetadata";

export default function Contact() {
  usePageMetadata({
    title: "Contact OpenClowAI",
    description:
      "Send a question or project note to the OpenClowAI portfolio maintainer.",
    canonical: "https://rintuchowdory.github.io/openclow-portfolio/contact/",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact OpenClowAI",
      url: "https://rintuchowdory.github.io/openclow-portfolio/contact/",
    },
  });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [issueUrl, setIssueUrl] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please complete your name, email, and message.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    const title = encodeURIComponent(
      `Portfolio contact from ${form.name.trim()}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\n${form.message.trim()}`
    );
    const url = `https://github.com/rintuchowdory/openclow-portfolio/issues/new?title=${title}&body=${body}&labels=contact`;
    setIssueUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="digital-shell min-h-screen bg-background text-foreground">
      <header className="digital-header sticky top-0 z-50 border-b border-border/30 backdrop-blur-sm">
        <div className="container flex items-center justify-between py-4">
          <a
            href={import.meta.env.BASE_URL}
            className="flex items-center gap-2 text-sm transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to OpenClowAI
          </a>
          <span className="font-bold">OpenClowAI / Contact</span>
        </div>
      </header>
      <main className="container max-w-4xl py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div>
            <p className="digital-eyebrow">CONTACT / OPEN CHANNEL</p>
            <h1 className="mt-6 text-4xl font-bold md:text-5xl">
              Let’s talk about the next build.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Share a project question, product idea, or useful feedback. Your
              message becomes a reviewable GitHub issue draft — no hidden
              backend and no silent submission.
            </p>
            <div className="mt-8 space-y-3 text-sm text-muted-foreground">
              <p>
                <span className="text-primary">01</span> Complete the short
                form.
              </p>
              <p>
                <span className="text-primary">02</span> Review the pre-filled
                GitHub issue.
              </p>
              <p>
                <span className="text-primary">03</span> Submit it only when you
                are ready.
              </p>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="digital-demo-panel space-y-5 rounded-2xl border border-border/70 p-6 md:p-8"
          >
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block text-sm font-semibold"
              >
                Name
              </label>
              <input
                id="contact-name"
                value={form.name}
                onChange={event =>
                  setForm({ ...form, name: event.target.value })
                }
                className="w-full rounded-lg border border-border/60 bg-background/60 px-3 py-2.5 outline-none focus:border-primary/70"
                autoComplete="name"
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-sm font-semibold"
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                value={form.email}
                onChange={event =>
                  setForm({ ...form, email: event.target.value })
                }
                className="w-full rounded-lg border border-border/60 bg-background/60 px-3 py-2.5 outline-none focus:border-primary/70"
                autoComplete="email"
              />
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-semibold"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                rows={6}
                value={form.message}
                onChange={event =>
                  setForm({ ...form, message: event.target.value })
                }
                className="w-full resize-y rounded-lg border border-border/60 bg-background/60 px-3 py-2.5 outline-none focus:border-primary/70"
              />
            </div>
            {error && (
              <p
                role="alert"
                className="rounded-lg border border-rose-300/30 bg-rose-300/10 p-3 text-sm text-rose-200"
              >
                {error}
              </p>
            )}
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Send className="h-4 w-4" />
              Prepare GitHub message
            </button>
            {issueUrl && (
              <p className="text-sm text-emerald-200">
                Your draft is ready.{" "}
                <a
                  href={issueUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 underline"
                >
                  Open it again <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </p>
            )}
          </form>
        </div>
      </main>
    </div>
  );
}
