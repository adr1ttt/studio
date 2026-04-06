"use client";

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { signup } from '@/lib/actions/auth';
import { FadeIn } from '@/components/ui/fade-in';
import { LiquidGlassCard } from '@/components/ui/liquid-glass-card';
import { MagneticHover } from '@/components/ui/magnetic-hover';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function SignupPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    const formData = new FormData(e.currentTarget);
    const password = formData.get('password') as string;
    const confirm = formData.get('confirmPassword') as string;

    if (password !== confirm) {
      setError("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    try {
      await signup(formData);
      router.push(callbackUrl);
      router.refresh(); 
    } catch (err) {
      setError("Failed to create account. Please try again.");
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 min-h-[85vh]">
      <FadeIn direction="up" duration={0.8} className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-white mb-3">Join the Club</h1>
          <p className="text-foreground/60 font-medium">Create your official Penya profile.</p>
        </div>

        <LiquidGlassCard tiltStrength={2} className="bg-background/30 border-white/10 p-8 md:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle glow effect behind form */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/10 blur-[80px] pointer-events-none" />

          <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
            {error && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium text-center">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="name" className="text-white/80 font-medium ml-1">Full Name</Label>
              <Input 
                id="name" 
                name="name" 
                type="text" 
                placeholder="Lionel Messi" 
                required 
                className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-primary/50 text-base rounded-xl"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white/80 font-medium ml-1">Email</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                placeholder="culer@fcbarcelona.com" 
                required 
                className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-primary/50 text-base rounded-xl"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white/80 font-medium ml-1">Password</Label>
              <Input 
                id="password" 
                name="password" 
                type="password" 
                required 
                className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-primary/50 text-base rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-white/80 font-medium ml-1">Confirm Password</Label>
              <Input 
                id="confirmPassword" 
                name="confirmPassword" 
                type="password" 
                required 
                className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-primary/50 text-base rounded-xl"
              />
            </div>

            <MagneticHover strength={10}>
              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full h-14 mt-6 bg-accent hover:bg-accent/90 text-white rounded-xl shadow-[0_0_20px_rgba(165,0,68,0.3)] transition-all font-bold text-lg border-none"
              >
                {isLoading ? (
                   <span className="flex items-center gap-2"><Loader2 className="h-5 w-5 animate-spin" /> Creating account...</span>
                ) : (
                   <span className="flex items-center gap-2">Create Account <ArrowRight className="h-5 w-5" /></span>
                )}
              </Button>
            </MagneticHover>

            <div className="text-center mt-6">
              <p className="text-white/50 text-sm">
                Already have an account?{' '}
                <Link href={`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`} className="text-white font-semibold hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </LiquidGlassCard>
      </FadeIn>
    </div>
  );
}
