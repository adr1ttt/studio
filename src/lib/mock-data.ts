import type { Event, Organizer } from './types';

export const events: Event[] = [
  {
    id: 'evt-1',
    name: 'El Clásico Live Screening',
    date: 'October 26, 2024',
    time: '8:00 PM',
    location: 'Kolkata',
    venue: 'Downtown Sports Bar',
    description: 'Join us for a thrilling live screening of the biggest match in club football. Experience the passion and excitement with fellow Cules.',
    imageId: 'event-screening',
    mapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.123456789012!2d88.363895!3d22.572646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM0JzIxLjUiTiA4OMKwMjEnNTAuMCJF!5e0!3m2!1sen!2sin!4v1622000000000!5m2!1sen!2sin',
  },
  {
    id: 'evt-2',
    name: 'Blaugrana Cup 5-a-side Tournament',
    date: 'November 15, 2024',
    time: '9:00 AM',
    location: 'Kolkata',
    venue: 'Salt Lake Stadium Grounds',
    description: 'Show off your skills in our annual 5-a-side football tournament. Form a team and compete for the Blaugrana Cup!',
    imageId: 'event-tournament',
    mapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.123456789012!2d88.363895!3d22.572646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM0JzIxLjUiTiA4OMKwMjEnNTAuMCJF!5e0!3m2!1sen!2sin!4v1622000000000!5m2!1sen!2sin',
  },
   {
    id: 'evt-3',
    name: 'Charity Drive & Community Meetup',
    date: 'December 22, 2024',
    time: '11:00 AM',
    location: 'Kolkata',
    venue: 'Maidan',
    description: 'Giving back to the community that unites us. Join our charity drive followed by a fan meetup with games and food.',
    imageId: 'event-charity',
    mapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.123456789012!2d88.363895!3d22.572646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM0JzIxLjUiTiA4OMKwMjEnNTAuMCJF!5e0!3m2!1sen!2sin!4v1622000000000!5m2!1sen!2sin',
  },
];

export const organizers: Organizer[] = [
  {
    id: 'org-1',
    name: 'Aarav Sharma',
    role: 'President & Founder',
    imageId: 'organizer-1',
  },
  {
    id: 'org-2',
    name: 'Priya Das',
    role: 'Events Coordinator',
    imageId: 'organizer-2',
  },
  {
    id: 'org-3',
    name: 'Rohan Banerjee',
    role: 'Membership Lead',
    imageId: 'organizer-3',
  },
];
