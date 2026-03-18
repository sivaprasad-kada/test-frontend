import { useState } from "react";
import { motion } from "framer-motion";
import { Link2, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const transition = { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] };

const HeroSection = () => {
  const [url, setUrl] = useState("");
  const [shortened, setShortened] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleShorten = () => {
    if (url.trim()) {
      const slug = Math.random().toString(36).substring(2, 8);
      setShortened(`shrt.ly/${slug}`);
    }
  };

  const handleCopy = () => {
    if (shortened) {
      navigator.clipboard.writeText(shortened);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={transition}>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-foreground mb-6 text-balance leading-[1.05]">
            Shorten. <span className="text-primary">Share.</span> Measure.
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed text-pretty">
            The most reliable link management platform for modern teams. Built for high-performance and designed for total simplicity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.15 }}
          className="max-w-xl mx-auto"
        >
          <div className="flex items-center gap-2 bg-card rounded-2xl p-2 shadow-card border border-border">
            <div className="flex items-center gap-2 flex-1 pl-4">
              <Link2 size={18} className="text-muted-foreground shrink-0" />
              <input
                type="url"
                placeholder="Paste a long URL here..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleShorten()}
                className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground text-sm"
              />
            </div>
            <Button size="lg" onClick={handleShorten}>
              Shorten Now
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-3">
            By clicking Shorten, you agree to Shortly's <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
          </p>

          {shortened && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 flex items-center justify-between bg-card rounded-xl p-4 border border-border shadow-card"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center">
                  <Check size={16} className="text-success" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-success uppercase tracking-wide">Short Link Created</p>
                  <p className="text-sm font-bold text-foreground">{shortened}</p>
                </div>
              </div>
              <Button variant="default" size="sm" onClick={handleCopy} className="gap-2">
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? "Copied!" : "Copy Link"}
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
