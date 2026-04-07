import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { Toaster } from "@/components/ui/toaster";
import { CartProvider } from "@/components/cart-provider";
import { PageTransitions } from "@/components/ui/page-transitions";
import { SmoothScroll } from "@/components/ui/smooth-scroll";

export const metadata: Metadata = {
  title: 'FCB Kolkata Hub',
  description: 'The official hub for FC Barcelona fans in Kolkata. Find events, join as a member, and connect with the community.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-primary/30 min-h-screen relative">
        <CartProvider>
          <SmoothScroll>
            <div className="relative flex min-h-screen flex-col z-10">
              <SiteHeader />
              <PageTransitions>{children}</PageTransitions>
              <SiteFooter />
            </div>
            <Toaster />
          </SmoothScroll>
        </CartProvider>
      </body>
    </html>
  );
}
