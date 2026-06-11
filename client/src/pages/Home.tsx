/**
 * OpenClowAI Professional Portfolio
 * Design System: Minimalist Tech Elegance
 * - Deep charcoal background (#0a0e27) with electric blue accents (#0066ff)
 * - IBM Plex Sans for typography, IBM Plex Mono for code
 * - Asymmetric layout with generous whitespace
 * - Scroll-triggered fade-in animations with electric blue glow effects
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Zap, Shield, Sparkles, Github } from "lucide-react";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";

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
      className={`fade-in-on-scroll fade-in-delay-${delay} group p-6 rounded-lg border border-border/50 hover:border-primary/30 transition-all hover:bg-card/50 glow-on-hover`}
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
      className="fade-in-on-scroll p-6 rounded-lg border border-border/50 bg-card/50 glow-on-hover"
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

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">OC</span>
            </div>
            <span className="font-bold text-lg">OpenClowAI</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a
              href="#features"
              className="text-sm hover:text-primary transition-colors"
            >
              Features
            </a>
            <a
              href="#tech"
              className="text-sm hover:text-primary transition-colors"
            >
              Tech Stack
            </a>
            <a
              href="#cta"
              className="text-sm hover:text-primary transition-colors"
            >
              Get Started
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-primary text-sm font-semibold tracking-wide uppercase">
                  AI Assistant Platform
                </p>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Intelligence
                  <br />
                  <span className="text-primary">Redefined.</span>
                </h1>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                Openclow ULTRA is a beautiful, modern AI chat application
                powered by HuggingFace's free inference API, with Gemini and
                OpenAI fallback support. Experience the future of AI
                assistance.
              </p>
              <div className="flex gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Start Free <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border hover:bg-muted"
                >
                  View on GitHub
                </Button>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative h-96 md:h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-lg blur-3xl" />
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663652274342/fVJaxHBXXQreufyoFCqVLm/hero-ai-interface-jkB7v9E3KGxAjU2KKZxvGg.webp"
                alt="OpenClowAI Interface"
                className="relative z-10 rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Geometric Accent */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 border-t border-border/30">
        <div className="container">
          <div className="space-y-12">
            <div className="space-y-3 max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold">Powerful Features</h2>
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

      {/* Tech Stack Section */}
      <section id="tech" className="py-20 md:py-32 border-t border-border/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Tech Stack Image */}
            <div className="relative h-96 md:h-full flex items-center justify-center order-2 md:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg blur-3xl" />
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663652274342/fVJaxHBXXQreufyoFCqVLm/tech-stack-visual-7umteVNXbNSvtB2fSUYDmG.webp"
                alt="Tech Stack"
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
                <TechItem name="Next.js 16" desc="React framework for production" />
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
      <section className="py-20 md:py-32 border-t border-border/30">
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
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663652274342/fVJaxHBXXQreufyoFCqVLm/feature-ai-models-QUmEQGPnDXSEghBakjyqHs.webp"
                alt="AI Providers"
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
      <section id="cta" className="py-20 md:py-32 border-t border-border/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
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
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Start Now <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-muted"
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
                  <a href="#" className="hover:text-foreground transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Docs
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    License
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>© 2026 OpenClowAI. Built with ❤️ using Next.js, React, and Manus.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-foreground transition-colors">
                GitHub
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Discord
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
