import { Mail, Phone, MessageCircle, Instagram, Twitter, Facebook } from 'lucide-react';
import Link from 'next/link';
import { ContactForm } from './components/contact-form';

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com', handle: '@kolkatablaugrana' },
  { name: 'X (Twitter)', icon: Twitter, href: 'https://x.com', handle: '@KBG_Official' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com', handle: 'KolkataBlaugrana' },
];

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-6xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold font-headline tracking-tight text-primary sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Have questions, suggestions, or just want to say hi? We'd love to hear from you.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold font-headline text-primary">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Email Us</h3>
                  <p className="text-muted-foreground">For general inquiries</p>
                  <a href="mailto:contact@kolkatablaugrana.com" className="text-primary hover:underline">
                    contact@kolkatablaugrana.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Call Us</h3>
                  <p className="text-muted-foreground">For urgent matters</p>
                  <a href="tel:+911234567890" className="text-primary hover:underline">
                    +91 123 456 7890
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Join our WhatsApp Group</h3>
                  <p className="text-muted-foreground">For matchday banter and updates</p>
                   <Link href="#" className="text-primary hover:underline">
                    Click here for an invite
                  </Link>
                </div>
              </div>
            </div>
             <div className="mt-8 pt-8 border-t">
              <h3 className="text-lg font-semibold text-foreground mb-4">Follow Us</h3>
              <div className="flex space-x-6">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <social.icon className="h-6 w-6" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
