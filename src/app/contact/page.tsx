import { Mail, Phone, MessageCircle, Instagram, Twitter, Facebook } from 'lucide-react';
import Link from 'next/link';
import { ContactForm } from './components/contact-form';
import { FadeIn } from '@/components/ui/fade-in';
import { LiquidGlassCard } from '@/components/ui/liquid-glass-card';
import { MagneticHover } from '@/components/ui/magnetic-hover';

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com', handle: '@fcbkolkata' },
  { name: 'X (Twitter)', icon: Twitter, href: 'https://x.com', handle: '@FCB_Kolkata' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com', handle: 'FCBKolkata' },
];

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-6xl py-20 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-24">
        <FadeIn direction="down" duration={1}>
           <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 drop-shadow-lg pb-4">
             Get in Touch
           </h1>
        </FadeIn>
        <FadeIn direction="up" delay={0.2} duration={1}>
           <p className="mt-6 max-w-3xl mx-auto text-xl md:text-2xl text-foreground/80 font-medium leading-relaxed drop-shadow-sm">
             Have questions, suggestions, or just want to say hi? We'd love to hear from you.
           </p>
        </FadeIn>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <FadeIn direction="left" delay={0.4} className="order-2 lg:order-1 space-y-12">
          <h2 className="text-4xl lg:text-5xl font-bold font-headline text-white tracking-tight leading-tight">Contact Information</h2>
          
          <div className="space-y-10">
            <div className="flex items-start gap-6 group">
              <MagneticHover strength={20}>
                <div className="p-4 rounded-2xl liquid-glass bg-white/5 border border-white/10 shrink-0 group-hover:bg-primary/20 transition-colors shadow-lg">
                  <Mail className="h-8 w-8 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                </div>
              </MagneticHover>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-foreground/70 mb-3 font-medium text-lg">For general inquiries</p>
                <a href="mailto:contact@fcbkolkata.com" className="text-primary hover:text-white transition-colors text-lg font-bold tracking-wide hover:underline">
                  contact@fcbkolkata.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-6 group">
              <MagneticHover strength={20}>
                <div className="p-4 rounded-2xl liquid-glass bg-white/5 border border-white/10 shrink-0 group-hover:bg-primary/20 transition-colors shadow-lg">
                  <Phone className="h-8 w-8 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                </div>
              </MagneticHover>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-foreground/70 mb-3 font-medium text-lg">For urgent matters</p>
                <a href="tel:+911234567890" className="text-primary hover:text-white transition-colors text-lg font-bold tracking-wide hover:underline">
                  +91 123 456 7890
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <MagneticHover strength={20}>
                <div className="p-4 rounded-2xl liquid-glass bg-white/5 border border-white/10 shrink-0 group-hover:bg-accent/30 transition-colors shadow-lg">
                  <MessageCircle className="h-8 w-8 text-accent drop-shadow-[0_0_8px_rgba(165,0,68,0.8)]" />
                </div>
              </MagneticHover>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Join our WhatsApp</h3>
                <p className="text-foreground/70 mb-3 font-medium text-lg">For matchday banter and updates</p>
                 <Link href="#" className="text-accent hover:text-white transition-colors text-lg font-bold tracking-wide hover:underline">
                  Click here for an invite
                </Link>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white mb-8 tracking-tight">Follow Us</h3>
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <MagneticHover strength={30} key={social.name}>
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-16 w-16 rounded-full liquid-glass bg-white/5 border border-white/10 hover:bg-primary hover:border-primary transition-all shadow-xl hover:-translate-y-2 group"
                  >
                    <social.icon className="h-7 w-7 text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all" />
                  </Link>
                </MagneticHover>
              ))}
            </div>
          </div>
        </FadeIn>
        
        <FadeIn direction="right" delay={0.6} className="order-1 lg:order-2 h-full">
           <LiquidGlassCard tiltStrength={2} className="h-full bg-background/30 border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] rounded-3xl">
              <ContactForm />
           </LiquidGlassCard>
        </FadeIn>
      </div>
    </div>
  );
}
