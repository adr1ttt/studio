"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, MessageCircle, Twitter, Mail, Send, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { MagneticHover } from '@/components/ui/magnetic-hover';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FadeIn } from '@/components/ui/fade-in';

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { name: 'X (Twitter)', icon: Twitter, href: 'https://x.com' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  { name: 'WhatsApp', icon: MessageCircle, href: 'https://whatsapp.com' },
];

const footerLinks = [
  {
    title: 'Explore',
    links: [
      { label: 'Upcoming Matches', href: '/fixtures' },
      { label: 'First Team Squad', href: '/squad' },
      { label: 'Media Gallery', href: '/gallery' },
      { label: 'Member Perks', href: '/membership' },
    ]
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'About the Penya', href: '/about' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ]
  }
];

export function SiteFooter() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="relative mt-32 border-t border-white/5 bg-background/40 pt-20 pb-12 overflow-hidden shadow-[0_-50px_100px_rgba(0,0,0,0.4)]">
      {/* Decorative background blur */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-primary/20 blur-[150px] rounded-full pointer-events-none opacity-40" />

      <div className="container relative z-10 max-w-7xl mx-auto px-4">
        {/* Newsletter Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 pb-20 border-b border-white/5">
          <FadeIn direction="right">
            <div>
              <h3 className="font-headline text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Join the City of Joy Base</h3>
              <p className="text-lg text-foreground/70 font-medium max-w-md">Subscribe to our newsletter for exclusive screening invites, matchday updates, and official member announcements.</p>
            </div>
          </FadeIn>
          
          <FadeIn direction="left" delay={0.2}>
            <div className="relative">
              {!subscribed ? (
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1 group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-foreground/40 group-focus-within:text-white transition-colors" />
                    <Input 
                      placeholder="Enter your email" 
                      className="h-14 pl-12 bg-white/5 border-white/10 text-white rounded-2xl focus-visible:ring-primary/50 text-lg transition-all"
                    />
                  </div>
                  <MagneticHover strength={10}>
                    <Button 
                      onClick={() => setSubscribed(true)}
                      className="h-14 px-8 rounded-2xl bg-primary text-white hover:bg-primary/90 font-bold text-lg shadow-[0_0_20px_rgba(0,76,153,0.3)]"
                    >
                      Subscribe <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </MagneticHover>
                </div>
              ) : (
                <div className="h-14 flex items-center gap-3 text-green-400 font-bold text-lg bg-green-500/10 border border-green-500/20 px-6 rounded-2xl animate-in zoom-in-95 duration-500">
                  <CheckCircle2 className="h-6 w-6" /> You&apos;re on the list! Welcome, Cule.
                </div>
              )}
            </div>
          </FadeIn>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20 text-center md:text-left">
          <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <Image src="/logo.png" alt="FCB Kolkata" width={80} height={80} className="object-contain drop-shadow-2xl transition-transform group-hover:scale-110" />
              <div className="flex flex-col text-left">
                <span className="font-bold font-headline text-xl leading-none tracking-tight">FCB Kolkata</span>
                <span className="text-xs text-primary font-medium tracking-widest uppercase mt-1">Official Penya</span>
              </div>
            </Link>
            <p className="text-foreground/50 text-sm font-medium leading-relaxed max-w-xs mb-8">
              Més que un club. More than a fan club. We are the heartbeat of FC Barcelona in Kolkata.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} className="text-foreground/40 hover:text-white transition-colors">
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-headline text-lg font-bold text-white uppercase tracking-widest mb-6">{column.title}</h4>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-foreground/60 hover:text-white transition-colors text-sm font-medium inline-flex items-center group">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
             <h4 className="font-headline text-lg font-bold text-white uppercase tracking-widest mb-6">HQ Address</h4>
             <p className="text-foreground/60 text-sm font-medium leading-relaxed mb-4">
               Club Kolkata Hub,<br />
               Salt Lake Sector V,<br />
               Kolkata, WB 700091
             </p>
             <button className="text-xs text-primary hover:text-primary/70 font-bold flex items-center gap-1 group">
               View on Maps <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
             </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-white/5 text-xs font-semibold uppercase tracking-widest text-foreground/30">
          <p>&copy; {new Date().getFullYear()} FCB Kolkata Hub</p>
          <div className="flex items-center gap-2 text-[10px]">
            <ShieldCheck className="h-3 w-3 text-green-500/50" /> FCB Official Supporters Club Registered
          </div>
          <div className="flex items-center gap-6">
            <span>Visca el Barça</span>
            <span>Visca Catalunya</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
