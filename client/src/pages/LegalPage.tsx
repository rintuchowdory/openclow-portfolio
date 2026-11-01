import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { usePageMetadata } from "@/hooks/usePageMetadata";

type LegalPageProps = {
  title: string;
  description: string;
  canonical: string;
  eyebrow: string;
  children: ReactNode;
};

export default function LegalPage({
  title,
  description,
  canonical,
  eyebrow,
  children,
}: LegalPageProps) {
  usePageMetadata({
    title,
    description,
    canonical,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      url: canonical,
      description,
    },
  });

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
          <div className="flex items-center gap-2">
            <div className="digital-mark flex h-8 w-8 items-center justify-center rounded bg-primary">
              <span className="text-sm font-bold text-primary-foreground">
                OC
              </span>
            </div>
            <span className="font-bold">OpenClowAI</span>
          </div>
        </div>
      </header>
      <main className="container max-w-3xl py-16 md:py-24">
        <p className="digital-eyebrow">{eyebrow}</p>
        <h1 className="mt-6 text-4xl font-bold md:text-5xl">{title}</h1>
        <div className="mt-4 text-sm text-muted-foreground">
          Last updated: November 1, 2026
        </div>
        <div className="legal-copy mt-12 space-y-10">{children}</div>
      </main>
    </div>
  );
}
