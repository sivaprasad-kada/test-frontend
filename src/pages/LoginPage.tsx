import { useState } from "react";
import { Link } from "react-router-dom";
import { Link2, Eye, EyeOff, Check, Zap, Shield, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <nav className="flex items-center justify-between px-6 md:px-8 h-16 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Link2 size={18} className="text-primary-foreground" />
          </div>
          <span>Shortly</span>
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="text-muted-foreground hover:text-foreground">Resources</a>
          <Button size="sm">Support</Button>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Login */}
          <div className="bg-card rounded-2xl border border-border shadow-card p-10">
            <h2 className="text-3xl font-black text-foreground mb-2">Welcome Back</h2>
            <p className="text-muted-foreground mb-8">Continue your journey with Shortly.</p>

            <div className="space-y-5">
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">Email Address</label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    defaultValue="password123"
                    className="w-full h-12 px-4 pr-12 rounded-lg border border-border bg-background text-foreground outline-none focus:ring-2 focus:ring-ring text-sm"
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-muted-foreground">
                  <input type="checkbox" className="rounded" />
                  Remember me
                </label>
                <a href="#" className="text-sm text-primary font-medium hover:underline">Forgot password?</a>
              </div>
              <Link to="/dashboard">
                <Button size="lg" className="w-full">Log In</Button>
              </Link>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-center text-sm text-muted-foreground mb-4">Or continue with</p>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="h-12">Google</Button>
                <Button variant="outline" className="h-12">SSO</Button>
              </div>
            </div>
          </div>

          {/* Signup */}
          <div className="bg-card rounded-2xl border border-border shadow-card p-10">
            <h2 className="text-3xl font-black text-foreground mb-2">Join Shortly Today</h2>
            <p className="text-muted-foreground mb-8">Create an account to start your 14-day free trial. No credit card required.</p>

            <div className="space-y-5">
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">Full Name</label>
                <input
                  type="text"
                  placeholder="Alex Johnson"
                  className="w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">Work Email</label>
                <input
                  type="email"
                  placeholder="alex@company.com"
                  className="w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">Password</label>
                <input
                  type="password"
                  placeholder="Create a strong password"
                  className="w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring text-sm"
                />
                <p className="text-xs text-muted-foreground mt-2">Must be at least 8 characters with one number and one symbol.</p>
              </div>
              <p className="text-xs text-muted-foreground">
                By clicking "Create Account", you agree to our <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
              </p>
              <Button size="lg" className="w-full bg-foreground text-background hover:bg-foreground/90">Create Account</Button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              {[
                { icon: Zap, label: "FAST SETUP" },
                { icon: Shield, label: "SECURE" },
                { icon: RefreshCw, label: "SYNC EVERYWHERE" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2">
                  <Icon size={20} className="text-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="py-8 px-6 text-center border-t border-border">
        <p className="text-sm text-muted-foreground mb-4">© 2024 Shortly Inc. All rights reserved. Trusted by over 10,000+ teams worldwide.</p>
        <div className="flex justify-center gap-6">
          {["Privacy", "Terms", "Cookies", "Contact"].map((link) => (
            <a key={link} href="#" className="text-sm text-muted-foreground hover:text-foreground">{link}</a>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
