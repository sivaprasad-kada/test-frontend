import { useState } from "react";
import { Link2, Copy, Check, Settings, ChevronDown, Calendar, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/landing/Navbar";

const recentLinks = [
  { original: "https://amazon.com/produc...", short: "shrt.ly/amz-deals", clicks: "1,204" },
  { original: "https://github.com/profile/r...", short: "shrt.ly/gh-repo", clicks: "842" },
  { original: "https://marketing.agency/c...", short: "shrt.ly/q3launch", clicks: "4,591" },
  { original: "https://notion.so/workspac...", short: "shrt.ly/project-doc", clicks: "12" },
  { original: "https://linkedin.com/posts/...", short: "shrt.ly/li-post", clicks: "230" },
];

const ShortenerPage = () => {
  const [url, setUrl] = useState("");
  const [shortened, setShortened] = useState<string | null>("shrt.ly/summer-sale-2024");
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const handleShorten = () => {
    if (url.trim()) {
      const slug = Math.random().toString(36).substring(2, 8);
      setShortened(`shrt.ly/${slug}`);
    }
  };

  const handleCopy = (idx: number) => {
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-black text-foreground mb-3">Shorten your links instantly</h1>
          <p className="text-muted-foreground">Make your URLs clean, manageable, and trackable.</p>
        </div>

        {/* Shortener input */}
        <div className="flex items-center gap-2 bg-card rounded-2xl p-2 shadow-card border border-border mb-4">
          <div className="flex items-center gap-2 flex-1 pl-4">
            <Link2 size={18} className="text-muted-foreground shrink-0" />
            <input
              type="url"
              placeholder="Paste your long link here"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleShorten()}
              className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground text-sm"
            />
          </div>
          <Button size="lg" onClick={handleShorten}>Shorten Now</Button>
        </div>

        {/* Result */}
        {shortened && (
          <div className="flex items-center justify-between bg-card rounded-xl p-4 border border-border shadow-card mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center">
                <Check size={16} className="text-success" />
              </div>
              <div>
                <p className="text-xs font-semibold text-success uppercase tracking-wide">Short Link Created</p>
                <p className="text-sm font-bold text-foreground">{shortened}</p>
              </div>
            </div>
            <Button size="sm" className="gap-2">
              <Copy size={14} /> Copy Link
            </Button>
          </div>
        )}

        {/* Optional Settings */}
        <div className="bg-card rounded-xl border border-border shadow-card mb-10">
          <div className="flex items-center gap-2 p-5 border-b border-border">
            <Settings size={18} className="text-muted-foreground" />
            <h3 className="font-semibold text-foreground">Optional Settings</h3>
          </div>
          {[
            { label: "Custom slug", icon: Link2 },
            { label: "Expiration date", icon: Calendar },
            { label: "Password protection", icon: Lock },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between px-5 py-4 border-b border-border last:border-0 cursor-pointer hover:bg-secondary/50 transition-colors">
              <div className="flex items-center gap-3">
                <item.icon size={16} className="text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </div>
              <ChevronDown size={16} className="text-muted-foreground" />
            </div>
          ))}
        </div>

        {/* Recent Links */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-foreground">Your 5 Most Recent Links</h3>
            <a href="#" className="text-sm text-primary font-medium hover:underline">View All</a>
          </div>
          <div className="bg-card rounded-xl border border-border shadow-card overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left px-5 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Original Link</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Short Link</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Clicks</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Action</th>
                </tr>
              </thead>
              <tbody>
                {recentLinks.map((link, i) => (
                  <tr key={link.short} className="border-b border-border last:border-0">
                    <td className="px-5 py-4 text-muted-foreground">{link.original}</td>
                    <td className="px-5 py-4 text-primary font-medium">{link.short}</td>
                    <td className="px-5 py-4 font-medium text-foreground">{link.clicks}</td>
                    <td className="px-5 py-4">
                      <button
                        onClick={() => handleCopy(i)}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {copiedIdx === i ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <footer className="py-6 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link2 size={14} className="text-primary" />
            <span className="font-semibold">Shortly</span>
            <span>© 2024 Shortly Inc.</span>
          </div>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ShortenerPage;
