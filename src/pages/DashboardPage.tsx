import { Link2, MousePointerClick, Zap, Percent, TrendingUp, TrendingDown, MoreVertical } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

const chartData = [
  { date: "May 01", clicks: 1200 },
  { date: "May 05", clicks: 1800 },
  { date: "May 08", clicks: 2200 },
  { date: "May 12", clicks: 2600 },
  { date: "May 15", clicks: 3100 },
  { date: "May 18", clicks: 3400 },
  { date: "May 22", clicks: 4200 },
  { date: "May 25", clicks: 4800 },
  { date: "May 29", clicks: 6100 },
];

const stats = [
  { label: "Total Links", value: "1,284", change: "~12%", icon: Link2, color: "bg-primary/10 text-primary" },
  { label: "Total Clicks", value: "45.2k", change: "~8%", icon: MousePointerClick, color: "bg-purple-50 text-purple-600" },
  { label: "Active Links", value: "892", change: "~2%", icon: Zap, color: "bg-green-50 text-green-600" },
  { label: "Avg. CTR", value: "4.2%", change: "~0.5%", icon: Percent, color: "bg-amber-50 text-amber-600" },
];

const recentLinks = [
  { short: "shrt.ly/sum-24", original: "https://marketing.acme.com...", clicks: "12,402", status: "Active" },
  { short: "shrt.ly/b-launch", original: "https://product.acme.com/la...", clicks: "8,921", status: "Active" },
  { short: "shrt.ly/promo-xp", original: "https://partner.global-retail...", clicks: "4,550", status: "Expired" },
];

const DashboardPage = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <main className="flex-1 p-6 md:p-10 overflow-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-black text-foreground">Welcome back, Alex.</h1>
            <p className="text-muted-foreground mt-1">Here's what's happening with your links today.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">Export Report</Button>
            <Button>+ Create New Link</Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card rounded-xl border border-border shadow-card p-5">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center`}>
                  <stat.icon size={18} />
                </div>
                <span className="text-xs font-semibold text-primary">{stat.change}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
              <p className="text-2xl font-black text-foreground">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="bg-card rounded-xl border border-border shadow-card p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-foreground">Link Performance Overview</h3>
              <p className="text-sm text-muted-foreground">Total clicks recorded over the last 30 days</p>
            </div>
            <Button variant="outline" size="sm">Last 30 days</Button>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(243, 75%, 59%)" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="hsl(243, 75%, 59%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
              <XAxis dataKey="date" tick={{ fontSize: 12, fill: 'hsl(220, 8.9%, 46.1%)' }} />
              <YAxis tick={{ fontSize: 12, fill: 'hsl(220, 8.9%, 46.1%)' }} />
              <Tooltip />
              <Area type="monotone" dataKey="clicks" stroke="hsl(243, 75%, 59%)" strokeWidth={2.5} fill="url(#colorClicks)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Links */}
        <div className="bg-card rounded-xl border border-border shadow-card p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Recent Links Activity</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Short Link</th>
                <th className="text-left py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Original URL</th>
                <th className="text-left py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Clicks</th>
                <th className="text-left py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {recentLinks.map((link) => (
                <tr key={link.short} className="border-b border-border last:border-0">
                  <td className="py-4 text-primary font-medium">{link.short}</td>
                  <td className="py-4 text-muted-foreground">{link.original}</td>
                  <td className="py-4 font-medium text-foreground">{link.clicks}</td>
                  <td className="py-4">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      link.status === "Active" ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"
                    }`}>
                      {link.status}
                    </span>
                  </td>
                  <td className="py-4 text-right">
                    <MoreVertical size={16} className="text-muted-foreground" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
