import { CheckCircle } from 'lucide-react';
import { MembershipForm } from './components/membership-form';
import { Card, CardContent } from '@/components/ui/card';

const benefits = [
  "Exclusive access to event pre-bookings",
  "Discounts on merchandise and event tickets",
  "Entry to members-only WhatsApp group",
  "Chance to be featured as 'Fan of the Month'",
  "Priority seating at live screenings",
  "Voting rights in fan club decisions",
];

export default function MembershipPage() {
  return (
    <div className="container mx-auto max-w-6xl py-16 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline tracking-tight text-primary sm:text-5xl">
          Become a Premium Member
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Join the official Kolkata Blaugrana family and unlock exclusive perks.
        </p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
            <h2 className="text-3xl font-bold font-headline text-primary">Membership Benefits</h2>
            <p className="text-muted-foreground">
                As an official premium member, you're not just a fan; you're part of the core. Enjoy these benefits for just ₹499/year.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent-foreground mr-3 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
        </div>

        <div>
           <MembershipForm />
        </div>
      </div>
    </div>
  );
}
