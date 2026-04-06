"use client";

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { login } from '@/lib/actions/auth';
import { FadeIn } from '@/components/ui/fade-in';
import { LiquidGlassCard } from '@/components/ui/liquid-glass-card';
import { MagneticHover } from '@/components/ui/magnetic-hover';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData(e.currentTarget);
      await login(formData);
      router.push(callbackUrl);
      router.refresh(); // Refresh the router to update server components with new session
    } catch (err) {
      setError("Failed to sign in. Please try again.");
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] px-4">
      <FadeIn direction="up" duration={0.8} className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-white mb-3">Welcome Back</h1>
          <p className="text-foreground/60 font-medium">Sign in to your Penya account.</p>
        </div>

        <LiquidGlassCard tiltStrength={3} className="bg-background/30 border-white/10 p-8 md:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle glow effect behind form */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[80px] pointer-events-none" />

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            {error && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium text-center">
                {error}
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white/80 font-medium ml-1">Email</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                placeholder="culer@fcbarcelona.com" 
                required 
                className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-primary/50 text-lg rounded-xl"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between ml-1">
                <Label htmlFor="password" className="text-white/80 font-medium">Password</Label>
              </div>
              <Input 
                id="password" 
                name="password" 
                type="password" 
                required 
                className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-primary/50 text-lg rounded-xl"
              />
            </div>

            <MagneticHover strength={10}>
              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full h-14 mt-4 bg-primary hover:bg-primary/90 text-white rounded-xl shadow-[0_0_20px_rgba(0,76,153,0.3)] transition-all font-bold text-lg border-none"
              >
                {isLoading ? (
                   <span className="flex items-center gap-2"><Loader2 className="h-5 w-5 animate-spin" /> Signing in...</span>
                ) : (
                   <span className="flex items-center gap-2">Sign In <ArrowRight className="h-5 w-5" /></span>
                )}
              </Button>
            </MagneticHover>

            <div className="text-center mt-6">
              <p className="text-white/50 text-sm">
                Don&apos;t have an account?{' '}
                <Link href={`/signup?callbackUrl=${encodeURIComponent(callbackUrl)}`} className="text-white font-semibold cursor-pointer hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </LiquidGlassCard>
      </FadeIn>
    </div>
  );
}
