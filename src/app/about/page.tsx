import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getImageById } from '@/lib/placeholder-images';
import { organizers } from '@/lib/mock-data';

export default function AboutPage() {
  const aboutImage = getImageById('about-us-group');

  return (
    <div className="container mx-auto max-w-5xl py-12 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline tracking-tight text-primary sm:text-5xl">
          Our Story
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          From a small group of friends to a family of thousands, this is how Kolkata became Blaugrana.
        </p>
      </header>

      <section className="mb-16">
        <Card className="overflow-hidden">
          <div className="lg:flex">
            <div className="lg:w-1/2">
              {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                  data-ai-hint={aboutImage.imageHint}
                />
              )}
            </div>
            <div className="lg:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-bold font-headline text-primary mb-4">The Beginning</h2>
              <p className="text-muted-foreground mb-4">
                Our journey started in 2012 with a handful of passionate FC Barcelona supporters who gathered in a small café to watch El Clásico. The energy was electric, and we knew we had something special. We decided to create a community where fans from all over Kolkata could share their love for the club.
              </p>
              <h2 className="text-2xl font-bold font-headline text-primary mb-4">Growth and Community</h2>
              <p className="text-muted-foreground">
                Over the years, our fanpage has grown into one of the most active fan communities in India. We've organized countless screenings, tournaments, and charity events, bringing together thousands of Cules. Our goal is to create a home away from home for every Barça fan in Kolkata.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline text-primary sm:text-4xl">Meet the Team</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            The dedicated individuals who work tirelessly to bring our community together.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {organizers.map((organizer) => {
            const organizerImage = getImageById(organizer.imageId);
            return (
              <Card key={organizer.id} className="text-center">
                <CardHeader className="items-center">
                  <Avatar className="h-24 w-24 mb-4">
                    {organizerImage && <AvatarImage src={organizerImage.imageUrl} alt={organizer.name} data-ai-hint={organizerImage.imageHint} />}
                    <AvatarFallback>{organizer.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="font-headline">{organizer.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-accent-foreground font-semibold">{organizer.role}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
