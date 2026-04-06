"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { getSession } from "@/lib/actions/auth";
import { FadeIn } from "@/components/ui/fade-in";
import { LiquidGlassCard } from "@/components/ui/liquid-glass-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  LayoutDashboard, 
  IdCard, 
  ShoppingBag, 
  Settings, 
  LogOut, 
  User, 
  Mail, 
  MapPin, 
  CalendarDays,
  ShieldCheck,
  CheckCircle2,
  Clock
} from "lucide-react";
import { cn } from "@/lib/utils";

// Mock Data
const MOCK_USER = {
  name: "Lionel Fan",
  email: "culer@fcbarcelona.com",
  joined: "October 2024",
  tier: "Premium Member",
  memberId: "PENYA-KL-9031",
  avatar: "/api/placeholder/150/150"
};

const MOCK_ORDERS = [
  { id: "ORD-9482", date: "April 02, 2026", product: "Retro 1999 Anniversary Jersey", status: "Delivered", price: "₹1499" },
  { id: "ORD-8114", date: "March 15, 2026", product: "FCB Kolkata Official Scarf", status: "Processing", price: "₹599" }
];

const TABS = [
  { id: "overview", label: "Dashboard", icon: LayoutDashboard },
  { id: "membership", label: "Membership", icon: IdCard },
  { id: "orders", label: "Order History", icon: ShoppingBag },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function ProfilePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabQuery = searchParams.get("tab");
  
  const [activeTab, setActiveTab] = useState(tabQuery || "overview");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  // Sync tab state with URL query param visually without a hard reload
  useEffect(() => {
    if (tabQuery && TABS.some(t => t.id === tabQuery)) {
      setActiveTab(tabQuery);
    }
  }, [tabQuery]);

  // Route Protection
  useEffect(() => {
    async function checkAuth() {
      const isAuth = await getSession();
      if (!isAuth) {
        router.push("/login?callbackUrl=/profile");
      } else {
        setIsAuthenticated(true);
      }
    }
    checkAuth();
  }, [router]);

  if (isAuthenticated === null) return null; // Wait for auth check

  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 lg:py-20 flex flex-col md:flex-row gap-8 min-h-[85vh]">
      
      {/* Sidebar Navigation */}
      <FadeIn direction="right" duration={0.6} className="w-full md:w-64 lg:w-80 shrink-0">
        <LiquidGlassCard tiltStrength={0} className="bg-background/20 border-white/10 p-6 sticky top-32">
          <div className="flex flex-col items-center text-center pb-8 border-b border-white/10">
            <div className="w-24 h-24 rounded-full bg-white/10 border-4 border-white/5 relative overflow-hidden mb-4">
              <User className="w-full h-full p-6 text-white/50" />
            </div>
            <h2 className="font-headline text-2xl font-bold tracking-tight text-white mb-1">{MOCK_USER.name}</h2>
            <p className="text-foreground/60 text-sm">{MOCK_USER.email}</p>
            <Badge className="mt-4 bg-accent/20 text-accent border border-accent/30 font-semibold shadow-[0_0_15px_rgba(165,0,68,0.2)]">
              {MOCK_USER.tier}
            </Badge>
          </div>
          
          <nav className="flex flex-col gap-2 pt-6">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    router.push(`/profile?tab=${tab.id}`, { scroll: false });
                  }}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all text-left",
                    isActive 
                      ? "bg-primary text-white shadow-[0_0_15px_rgba(0,76,153,0.3)] border border-primary/50" 
                      : "text-foreground/70 hover:bg-white/10 hover:text-white border border-transparent"
                  )}
                >
                  <Icon className={cn("h-5 w-5", isActive ? "text-white" : "text-foreground/50")} />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </LiquidGlassCard>
      </FadeIn>

      {/* Main Content Area */}
      <FadeIn direction="up" duration={0.6} delay={0.2} className="flex-1">
        
        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            <div className="mb-8">
              <h1 className="text-4xl font-bold font-headline text-white tracking-tight mb-2">Welcome Back!</h1>
              <p className="text-foreground/70">Here is a quick snapshot of your Penya engagement.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <LiquidGlassCard className="bg-background/20 border border-white/10 p-6 flex items-center gap-5">
                <div className="p-4 rounded-full bg-primary/20 text-primary">
                  <CalendarDays className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-foreground/60 text-sm font-medium">Events Attended</p>
                  <p className="text-3xl font-bold font-headline text-white shrink-0 mt-1">12</p>
                </div>
              </LiquidGlassCard>
              
              <LiquidGlassCard className="bg-background/20 border border-white/10 p-6 flex items-center gap-5">
                <div className="p-4 rounded-full bg-accent/20 text-accent">
                  <ShoppingBag className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-foreground/60 text-sm font-medium">Total Orders</p>
                  <p className="text-3xl font-bold font-headline text-white mt-1">2</p>
                </div>
              </LiquidGlassCard>
            </div>
          </div>
        )}

        {/* MEMBERSHIP TAB */}
        {activeTab === "membership" && (
          <div className="space-y-8">
            <div className="mb-6">
              <h1 className="text-3xl font-bold font-headline text-white tracking-tight">Digital Membership Card</h1>
              <p className="text-foreground/70 mt-2">Display this official ID to gain entry to exclusive screenings and events.</p>
            </div>
            
            {/* Mock ID Card rendering */}
            <div className="max-w-md mx-auto">
              <LiquidGlassCard tiltStrength={8} className="bg-gradient-to-br from-primary/30 to-accent/30 border border-white/20 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden backdrop-blur-xl">
                 <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
                   <ShieldCheck className="w-64 h-64" />
                 </div>
                 
                 <div className="flex justify-between items-start mb-10 relative z-10">
                   <div>
                     <h3 className="font-headline font-bold text-2xl tracking-tighter text-white/90 uppercase">FCB Kolkata</h3>
                     <p className="text-[10px] text-white/60 tracking-widest uppercase">Official Supporters Club</p>
                   </div>
                   <Image src="/logo.png" alt="Logo" width={50} height={50} className="object-contain drop-shadow-md" />
                 </div>

                 <div className="space-y-6 relative z-10">
                   <div>
                     <p className="text-[10px] uppercase tracking-widest text-white/50 mb-1">Passholder Name</p>
                     <p className="font-headline font-bold text-2xl text-white tracking-wide">{MOCK_USER.name}</p>
                   </div>
                   <div className="flex justify-between items-end">
                     <div>
                       <p className="text-[10px] uppercase tracking-widest text-white/50 mb-1">Membership ID</p>
                       <p className="font-mono text-lg text-white/90">{MOCK_USER.memberId}</p>
                     </div>
                     <Badge className="bg-white text-black font-bold border-none shadow-[0_0_15px_rgba(255,255,255,0.3)] py-1 uppercase tracking-wider text-[10px]">
                       {MOCK_USER.tier}
                     </Badge>
                   </div>
                 </div>
              </LiquidGlassCard>
            </div>
          </div>
        )}

        {/* ORDERS TAB */}
        {activeTab === "orders" && (
          <div className="space-y-6">
            <div className="mb-6">
              <h1 className="text-3xl font-bold font-headline text-white tracking-tight">Order History</h1>
              <p className="text-foreground/70 mt-2">Track the status of your official Penya merchandise.</p>
            </div>

            <LiquidGlassCard className="bg-background/20 border border-white/10 overflow-hidden text-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-white/5 border-b border-white/10 uppercase tracking-wider text-[11px] text-white/50">
                    <tr>
                      <th className="p-4 font-semibold">Order ID</th>
                      <th className="p-4 font-semibold">Date</th>
                      <th className="p-4 font-semibold">Product</th>
                      <th className="p-4 font-semibold">Amount</th>
                      <th className="p-4 font-semibold text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {MOCK_ORDERS.map((order) => (
                      <tr key={order.id} className="hover:bg-white/5 transition-colors">
                        <td className="p-4 font-mono text-white/80">{order.id}</td>
                        <td className="p-4 text-foreground/70">{order.date}</td>
                        <td className="p-4 text-white font-medium">{order.product}</td>
                        <td className="p-4 text-white">{order.price}</td>
                        <td className="p-4 text-right">
                          <Badge variant="outline" className={cn(
                            "border border-white/10 backdrop-blur-sm px-3",
                            order.status === "Delivered" ? "bg-green-500/20 text-green-400" : "bg-orange-500/20 text-orange-400"
                          )}>
                            {order.status === "Delivered" ? <CheckCircle2 className="w-3 h-3 mr-2 hidden sm:inline" /> : <Clock className="w-3 h-3 mr-2 hidden sm:inline" />}
                            {order.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </LiquidGlassCard>
            
            <div className="w-full mt-6 text-center">
              <Button onClick={() => router.push('/merchandise')} variant="outline" className="rounded-full border-white/20 hover:bg-white/10">Browse Store</Button>
            </div>
          </div>
        )}

        {/* SETTINGS TAB */}
        {activeTab === "settings" && (
          <div className="space-y-6">
            <div className="mb-6">
              <h1 className="text-3xl font-bold font-headline text-white tracking-tight">Account Settings</h1>
              <p className="text-foreground/70 mt-2">Update your personal details below.</p>
            </div>

            <LiquidGlassCard className="bg-background/20 border border-white/10 p-6 md:p-8 max-w-2xl">
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Settings saved successfully!'); }}>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-white/80">First Name</Label>
                    <Input id="firstName" defaultValue="Lionel" className="h-12 bg-white/5 border-white/10 focus-visible:ring-primary/50 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-white/80">Last Name</Label>
                    <Input id="lastName" defaultValue="Fan" className="h-12 bg-white/5 border-white/10 focus-visible:ring-primary/50 text-white" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white/80 flex items-center gap-2"><Mail className="w-4 h-4 text-white/50" /> Email Address</Label>
                  <Input id="email" type="email" defaultValue={MOCK_USER.email} className="h-12 bg-white/5 border-white/10 focus-visible:ring-primary/50 text-white" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address" className="text-white/80 flex items-center gap-2"><MapPin className="w-4 h-4 text-white/50" /> Shipping Address</Label>
                  <Input id="address" defaultValue="New Town, Kolkata, West Bengal" className="h-12 bg-white/5 border-white/10 focus-visible:ring-primary/50 text-white" />
                </div>

                <div className="pt-4 border-t border-white/10 flex justify-end">
                  <Button type="submit" size="lg" className="rounded-full bg-primary hover:bg-primary/90 shadow-[0_0_15px_rgba(0,76,153,0.3)]">Save Changes</Button>
                </div>
              </form>
            </LiquidGlassCard>
            
          </div>
        )}

      </FadeIn>
    </div>
  );
}
