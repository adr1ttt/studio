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
        fill="#A70042"
        d="M0 50V20C0 8.954 8.954 0 20 0h60c11.046 0 20 8.954 20 20v30H0z"
      />
      <path
        fill="#004C99"
        d="M0 50h100v30c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V50z"
      />
      <path fill="#EDBB00" d="M44 50H10v35c0 2.761 2.239 5 5 5h29V50z" />
      <path fill="#EDBB00" d="M90 50H56v35c0 2.761-2.239 5-5 5h29c2.761 0 5-2.239 5-5V50z" />
      <path fill="#A70042" d="M10 50h34v12H10zM10 70h34v12H10z" />
      <path fill="#004C99" d="M56 50h34v12H56zM56 70h34v12H56z" />
      <path
        fill="#A70042"
        d="M10 10h12v12H10zM28 10h12v12H28zM10 28h12v12H10zM28 28h12v12H28z"
      />
      <path
        fill="#004C99"
        d="M58 10h12v12H58zM76 10h12v12H76zM58 28h12v12H58zM76 28h12v12H76z"
      />
      <path fill="#EDBB00" d="M44 44h12v12H44z" />
      <path
        d="M50 50c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15z"
        fill="#EDBB00"
      />
      <path d="M50 53c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z" />
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
