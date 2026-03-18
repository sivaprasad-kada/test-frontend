import { MousePointerClick, Users, Share2, Globe, TrendingUp, Calendar, Download } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

const chartData = [
  { date: "Jun 01", current: 800, last: 400 },
  { date: "Jun 07", current: 2200, last: 900 },
  { date: "Jun 14", current: 4800, last: 1800 },
  { date: "Jun 21", current: 7200, last: 3200 },
  { date: "Jun 28", current: 9800, last: 4500 },
  { date: "Jul 01", current: 12430, last: 5800 },
];

const stats = [
  { label: "Total Clicks", value: "12,430", change: "+12.4%", icon: MousePointerClick, color: "bg-primary/10 text-primary" },
  { label: "Unique Visitors", value: "8,210", change: "+5.2%", icon: Users, color: "bg-primary/10 text-primary" },
  { label: "Top Referral", value: "Twitter", sub: "42% of total traffic", icon: Share2, color: "bg-primary/10 text-primary" },
  { label: "Top Location", value: "USA", sub: "3,120 clicks (25%)", icon: Globe, color: "bg-primary/10 text-primary" },
];

const referrers = [
  { name: "Twitter / X", icon: Share2, clicks: "5,220", pct: "42.0%", bar: 84 },
  { name: "Facebook", icon: Users, clicks: "2,860", pct: "23.0%", bar: 46 },
  { name: "Instagram", icon: MousePointerClick, clicks: "1,990", pct: "16.0%", bar: 32 },
  { name: "Email / Direct", icon: Globe, clicks: "2,360", pct: "19.0%", bar: 38 },
];

const locations = [
  { country: "United States", flag: "🇺🇸", clicks: "3,120", pct: "25.1%" },
  { country: "United Kingdom", flag: "🇬🇧", clicks: "2,110", pct: "17.0%" },
  { country: "Germany", flag: "🇩🇪", clicks: "1,490", pct: "12.0%" },
  { country: "India", flag: "🇮🇳", clicks: "1,240", pct: "10.0%" },
];

const AnalyticsPage = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <main className="flex-1 p-6 md:p-10 overflow-auto">
        <div className="mb-2">
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
            LINKS &gt; SHORTLY.IO/XK92P
          </p>
        </div>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-black text-foreground">Analytics for shortly.io/xK92p</h1>
            <p className="text-muted-foreground mt-1">Real-time performance tracking for your marketing campaign</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <Calendar size={16} /> Last 30 Days
            </Button>
            <Button className="gap-2">
              <Download size={16} /> Export Report
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card rounded-xl border border-border shadow-card p-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs text-muted-foreground">{stat.label}</p>
                <div className={`w-8 h-8 rounded-lg ${stat.color} flex items-center justify-center`}>
                  <stat.icon size={16} />
                </div>
              </div>
              <p className="text-2xl font-black text-foreground">{stat.value}</p>
              {stat.change && (
                <p className="text-xs mt-1">
                  <span className="text-success font-semibold">↗ {stat.change}</span>
                  <span className="text-muted-foreground ml-1">vs last month</span>
                </p>
              )}
              {stat.sub && <p className="text-xs text-muted-foreground mt-1">{stat.sub}</p>}
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="bg-card rounded-xl border border-border shadow-card p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-foreground">Click Traffic Over Time</h3>
              <p className="text-sm text-muted-foreground">Cumulative growth of audience engagement</p>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-primary" /> Current Period</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-muted-foreground/30" /> Last Period</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(243, 75%, 59%)" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="hsl(243, 75%, 59%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
              <XAxis dataKey="date" tick={{ fontSize: 12, fill: 'hsl(220, 8.9%, 46.1%)' }} />
              <YAxis tick={{ fontSize: 12, fill: 'hsl(220, 8.9%, 46.1%)' }} />
              <Tooltip />
              <Area type="monotone" dataKey="last" stroke="hsl(220, 8.9%, 46.1%)" strokeWidth={1.5} strokeDasharray="4 4" fill="transparent" />
              <Area type="monotone" dataKey="current" stroke="hsl(243, 75%, 59%)" strokeWidth={2.5} fill="url(#colorCurrent)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Referrers */}
          <div className="bg-card rounded-xl border border-border shadow-card p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-foreground">Top Referrers</h3>
              <a href="#" className="text-sm text-primary font-medium hover:underline">View All</a>
            </div>
            <div className="space-y-5">
              {referrers.map((r) => (
                <div key={r.name} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center">
                    <r.icon size={18} className="text-primary" />
                  </div>
                  <span className="flex-1 text-sm font-medium text-foreground">{r.name}</span>
                  <div className="text-right mr-4">
                    <p className="text-sm font-bold text-foreground">{r.clicks}</p>
                    <p className="text-xs text-muted-foreground">{r.pct}</p>
                  </div>
                  <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${r.bar}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Geographic */}
          <div className="bg-card rounded-xl border border-border shadow-card p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-foreground">Geographic Distribution</h3>
              <a href="#" className="text-sm text-primary font-medium hover:underline">Full Map</a>
            </div>
            <div className="space-y-5">
              {locations.map((loc) => (
                <div key={loc.country} className="flex items-center gap-4">
                  <span className="text-2xl">{loc.flag}</span>
                  <span className="flex-1 text-sm font-medium text-foreground">{loc.country}</span>
                  <p className="text-sm font-bold text-foreground">{loc.clicks}</p>
                  <p className="text-sm text-muted-foreground">{loc.pct}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <footer className="mt-12 py-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">© 2024 Shortly Inc. All rights reserved. Precise tracking provided by GlobalLink Engine.</p>
        </footer>
      </main>
    </div>
  );
};

export default AnalyticsPage;
