import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, MessageCircle, Twitter } from 'lucide-react';
import { MagneticHover } from '@/components/ui/magnetic-hover';

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { name: 'X (Twitter)', icon: Twitter, href: 'https://x.com' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  { name: 'WhatsApp', icon: MessageCircle, href: 'https://whatsapp.com' },
];

export function SiteFooter() {
  return (
    <footer className="liquid-glass border-t-0 rounded-t-[3rem] mt-24">
      <div className="container flex flex-col items-center justify-between gap-10 py-16 md:flex-row md:py-20">
        <div className="flex flex-col items-center gap-6 md:flex-row md:gap-8">
          <MagneticHover strength={20}>
            <Link href="/" className="flex items-center space-x-4">
              <Image src="/logo.png" alt="FCB Kolkata" width={96} height={96} className="object-contain drop-shadow-xl" />
              <div className="flex flex-col">
                 <span className="font-bold font-headline text-2xl tracking-tight hidden sm:block">FCB Kolkata</span>
                 <span className="text-sm text-muted-foreground hidden sm:block">Més que un club</span>
              </div>
            </Link>
          </MagneticHover>
          <p className="text-center text-sm font-medium text-muted-foreground md:ml-8 max-w-xs">
            &copy; {new Date().getFullYear()} FCB Kolkata Hub. All rights reserved. Designed with passion.
          </p>
        </div>
        <div className="flex items-center gap-6">
          {socialLinks.map((social) => (
            <MagneticHover key={social.name} strength={40}>
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 text-foreground transition-all hover:bg-primary hover:text-white hover:border-primary shadow-lg"
              >
                <social.icon className="h-5 w-5" />
              </Link>
            </MagneticHover>
          ))}
        </div>
      </div>
    </footer>
  );
}
