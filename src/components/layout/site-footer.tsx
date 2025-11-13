import { Instagram, Twitter, Facebook, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { name: 'X (Twitter)', icon: Twitter, href: 'https://x.com' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  { name: 'WhatsApp', icon: MessageCircle, href: 'https://whatsapp.com' },
];

const SoccerBallIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a10 10 0 0 1 8.66 5H3.34A10 10 0 0 1 12 2Z" />
      <path d="m17.9 15.25-3.9-2.25-3.9 2.25 1.45 4.5h4.9l1.45-4.5z" />
      <path d="m6.1 15.25 3.9-2.25 3.9 2.25-1.45 4.5h-4.9L6.1 15.25z" />
      <path d="m12 7.5-3.9 2.25 1.45 4.5h4.9l1.45-4.5L12 7.5z" />
    </svg>
  );

export function SiteFooter() {
  return (
    <footer className="bg-card border-t">
      <div className="container flex flex-col items-center justify-between gap-6 py-8 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <SoccerBallIcon className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline hidden sm:inline-block">FCB Kolkata</span>
          </Link>
          <p className="text-center text-sm text-muted-foreground md:ml-4">
            &copy; {new Date().getFullYear()} FCB Kolkata Hub. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-5">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <social.icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
