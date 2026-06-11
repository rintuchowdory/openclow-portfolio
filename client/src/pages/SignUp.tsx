/**
 * OpenClowAI Sign Up Page
 * Design System: Minimalist Tech Elegance
 */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setLoading(true);
    // Simulate sign up
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-sm">
        <div className="container flex items-center justify-between py-4">
          <button
            onClick={() => (window.location.href = "/")}
            className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">OC</span>
            </div>
            <span className="font-bold text-lg">OpenClowAI</span>
          </div>
          <div className="w-24" />
        </div>
      </header>

      {/* Sign Up Section */}
      <section className="py-20 md:py-32">
        <div className="container max-w-md mx-auto">
          <div className="space-y-8">
            <div className="space-y-3 text-center">
              <h1 className="text-4xl font-bold">
                Join <span className="text-primary">OpenClowAI</span>
              </h1>
              <p className="text-muted-foreground">
                Start leveraging AI to boost your productivity
              </p>
            </div>

            {success ? (
              <div className="space-y-4 p-6 rounded-lg border border-primary/30 bg-primary/5">
                <div className="text-center space-y-2">
                  <p className="text-lg font-semibold text-primary">
                    ✓ Sign up successful!
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Check your email to verify your account and get started.
                  </p>
                </div>
                <Button
                  onClick={() => (window.location.href = "/")}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Return to Home
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 rounded-lg border border-destructive/50 bg-destructive/10 text-destructive text-sm">
                    {error}
                  </div>
                )}

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-card/50 border-border/50 focus:border-primary/50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Password</label>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-card/50 border-border/50 focus:border-primary/50"
                  />
                  <p className="text-xs text-muted-foreground">
                    At least 8 characters
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Confirm Password</label>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="bg-card/50 border-border/50 focus:border-primary/50"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  {loading ? "Creating Account..." : "Create Account"}
                  {!loading && <ArrowRight className="w-4 h-4 ml-2" />}
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <a href="#" className="text-primary hover:underline">
                    Sign in
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Geometric Accent */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
    </div>
  );
}
