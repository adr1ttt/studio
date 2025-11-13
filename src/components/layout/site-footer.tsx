import { Instagram, Twitter, Facebook, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { name: 'X (Twitter)', icon: Twitter, href: 'https://x.com' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  { name: 'WhatsApp', icon: MessageCircle, href: 'https://whatsapp.com' },
];

const FcBarcelonaLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    {...props}
  >
    <path
      d="M0 20C0 8.954 8.954 0 20 0h60c11.046 0 20 8.954 20 20v80H0V20z"
      fill="#004c99"
    />
    <path
      d="M0 20C0 8.954 8.954 0 20 0h60c11.046 0 20 8.954 20 20v25H0V25z"
      fill="#a70042"
    />
    <path d="M42 45H0v-5h42z" fill="#fbb100" />
    <path d="M10 50h15v10H10zm20 0h15v10H30z" fill="#a70042" />
    <path d="M10 65h15v10H10zm20 0h15v10H30z" fill="#a70042" />
    <path d="M10 80h15v10H10zm20 0h15v10H30z" fill="#a70042" />
    <path d="M55 50h15v10H55zm20 0h15v10H75z" fill="#004c99" />
    <path d="M55 65h15v10H55zm20 0h15v10H75z" fill="#004c99" />
    <path d="M55 80h15v10H55zm20 0h15v10H75z" fill="#004c99" />
    <path
      d="M25 5L5 20h20zm20 0L25 20h20z"
      fill="#fff"
      stroke="#a70042"
      strokeWidth="2"
    />
    <path
      d="M75 5L55 20h20zm20 0L75 20h20z"
      fill="#a70042"
      stroke="#fff"
      strokeWidth="2"
    />
    <path d="M5 30l20-15v20zm20 0l20-15v20z" fill="#fff" stroke="#a70042" strokeWidth="2" />
    <path
      d="M55 30l20-15v20zm20 0l20-15v20z"
      fill="#a70042"
      stroke="#fff"
      strokeWidth="2"
    />
    <path d="M50 40 a12 12 0 0 1 0 20 a12 12 0 0 1 0-20" fill="#fbb100" />
    <path d="M50 42 a10 10 0 0 1 0 16 a10 10 0 0 1 0-16" fill="#000" />
    <path d="M50 50 a5 5 0 0 1 0-5 a5 5 0 0 0 0 5" fill="red" />
    <path
      d="M48 53h4v4h-4zm-5-3h4v4h-4zm10 0h4v4h-4zm-2.5-3h4v4h-4zm-5-3h4v4h-4z"
      fill="#fff"
    />
  </svg>
);

export function SiteFooter() {
  return (
    <footer className="bg-card border-t">
      <div className="container flex flex-col items-center justify-between gap-6 py-8 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <FcBarcelonaLogo className="h-8 w-8" />
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
