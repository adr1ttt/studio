import { events } from '@/lib/mock-data';
import { EventCard } from './components/event-card';
import { FadeIn } from '@/components/ui/fade-in';

export default function EventsPage() {
  return (
    <div className="container mx-auto max-w-7xl py-20 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-20">
        <FadeIn direction="down">
          <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 drop-shadow-lg pb-4">
            Upcoming Events
          </h1>
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <p className="mt-6 max-w-3xl mx-auto text-xl md:text-2xl text-foreground/80 font-medium leading-relaxed drop-shadow-sm">
            Join your fellow Cules! Here's what's on the schedule.
          </p>
        </FadeIn>
      </header>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => (
          <FadeIn key={event.id} delay={0.1 * index} direction="up" duration={0.8} className="h-full">
            <EventCard event={event} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
