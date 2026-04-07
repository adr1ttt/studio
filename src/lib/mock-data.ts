import type { Event, Organizer, GalleryImage, NewsItem, SquadPlayer, Fixture, MatchResult, MerchandiseItem, CommunityPost } from './types';

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

export const galleryImages: GalleryImage[] = [
  { id: 'gal-1', imageId: 'gallery-screening-1', caption: 'El Clásico Watch Party 2024', category: 'screenings' },
  { id: 'gal-2', imageId: 'gallery-tournament-1', caption: 'Blaugrana Cup Semi-Finals', category: 'tournaments' },
  { id: 'gal-3', imageId: 'gallery-meetup-1', caption: 'Monthly Culers Meetup', category: 'meetups' },
  { id: 'gal-4', imageId: 'gallery-charity-1', caption: 'Winter Charity Drive', category: 'charity' },
  { id: 'gal-5', imageId: 'gallery-screening-2', caption: 'Champions League Night', category: 'screenings' },
  { id: 'gal-6', imageId: 'gallery-tournament-2', caption: 'Blaugrana Cup Finals', category: 'tournaments' },
  { id: 'gal-7', imageId: 'gallery-meetup-2', caption: 'New Members Welcome Night', category: 'meetups' },
  { id: 'gal-8', imageId: 'gallery-screening-3', caption: 'La Liga Season Opener', category: 'screenings' },
];

export const newsItems: NewsItem[] = [
  {
    id: "news-1",
    headline: "FCB Kolkata ranked among India's Top 5 Official Penyes",
    date: "April 12, 2026",
    category: "Club",
    author: "Aarav Sharma",
    imageId: "news-ranking",
    content: "We are thrilled to announce that FC Barcelona has officially recognized FCB Kolkata as one of the top 5 official fan clubs in India for the 2025-26 season. This recognition comes after a year of record-breaking screening attendances and community engagement projects.\n\n\"This is a testament to the passion of our members,\" said Aarav Sharma, President of FCB Kolkata. \"From our first meetup in 2012 to this official recognition, it's been an incredible journey for every Cule in the city.\""
  },
  {
    id: "news-2",
    headline: "El Clásico Live Screening — Registrations Now Open!",
    date: "April 15, 2026",
    category: "Events",
    author: "Priya Das",
    imageId: "news-clasico",
    content: "The biggest match in club football is back! FCB Kolkata is hosting its signature live screening for the upcoming El Clásico. Expect high-octane atmosphere, prizes, and exclusive member discounts at the venue.\n\nRegistration is mandatory for all attendees. Premium and General members get priority access to seats. Ensure you have your digital membership card ready at the entrance."
  },
  {
    id: "news-3",
    headline: "New season, new kits — Blaugrana merchandise arriving soon",
    date: "April 18, 2026",
    category: "Merchandise",
    author: "Rohan Banerjee",
    imageId: "news-merch",
    content: "The official shop is getting a refresh! We have partnered with Nike and official club distributors to bring the 2026-27 season kits directly to Kolkata. Pre-orders will open next week for verified Penya members.\n\nIn addition to the match kits, we are launching an exclusive series of 'Kolkata Culers' lifestyle apparel, including hoodies and commemorative scarves designed by local artists."
  },
  {
    id: "news-4",
    headline: "Annual Charity Drive raises ₹2L+ for local schools",
    date: "April 20, 2026",
    category: "Community",
    author: "Aarav Sharma",
    imageId: "news-charity",
    content: "Football is about more than just the 90 minutes. Our annual 'Culers for Change' drive has successfully raised over ₹2,00,000 for local primary schools in Kolkata. The funds will go towards improving sports infrastructure and providing kits for young aspiring athletes.\n\nA huge thank you to all our members who donated and volunteered. This is what 'Més que un club' means to us."
  }
];

export const communityPosts: CommunityPost[] = [
  {
    id: "post-1",
    user: "Sayan_Culer",
    content: "Still not over that Yamal goal from last night! The curve was insane. 🔵🔴",
    timestamp: "2 hours ago",
    likes: 24,
    isMember: true
  },
  {
    id: "post-2",
    user: "Anjali_Barca",
    content: "Does anyone know if the screening for the PSG game is happening at Maidan or Downtown?",
    timestamp: "5 hours ago",
    likes: 8,
    isMember: true
  },
  {
    id: "post-3",
    user: "Deepak1899",
    content: "Just got my official penya scarf! Material is top-notch. Highly recommend checking out the shop.",
    timestamp: "1 day ago",
    likes: 42,
    isMember: true
  }
];

export const squadPlayers: SquadPlayer[] = [
  // Goalkeepers
  { number: 1, name: 'Marc-André ter Stegen', position: 'Goalkeeper', nationality: 'Germany' },
  { number: 13, name: 'Iñaki Peña', position: 'Goalkeeper', nationality: 'Spain' },
  // Defenders
  { number: 2, name: 'Pau Cubarsí', position: 'Defender', nationality: 'Spain' },
  { number: 3, name: 'Alejandro Balde', position: 'Defender', nationality: 'Spain' },
  { number: 4, name: 'Ronald Araújo', position: 'Defender', nationality: 'Uruguay' },
  { number: 15, name: 'Andreas Christensen', position: 'Defender', nationality: 'Denmark' },
  { number: 23, name: 'Jules Koundé', position: 'Defender', nationality: 'France' },
  { number: 28, name: 'Héctor Fort', position: 'Defender', nationality: 'Spain' },
  // Midfielders
  { number: 6, name: 'Gavi', position: 'Midfielder', nationality: 'Spain' },
  { number: 8, name: 'Pedri', position: 'Midfielder', nationality: 'Spain' },
  { number: 14, name: 'Fermín López', position: 'Midfielder', nationality: 'Spain' },
  { number: 16, name: 'Frenkie de Jong', position: 'Midfielder', nationality: 'Netherlands' },
  { number: 17, name: 'Marc Casadó', position: 'Midfielder', nationality: 'Spain' },
  { number: 20, name: 'Dani Olmo', position: 'Midfielder', nationality: 'Spain' },
  { number: 22, name: 'Pablo Torre', position: 'Midfielder', nationality: 'Spain' },
  // Forwards
  { number: 7, name: 'Ferran Torres', position: 'Forward', nationality: 'Spain' },
  { number: 9, name: 'Robert Lewandowski', position: 'Forward', nationality: 'Poland' },
  { number: 10, name: 'Ansu Fati', position: 'Forward', nationality: 'Spain' },
  { number: 11, name: 'Raphinha', position: 'Forward', nationality: 'Brazil' },
  { number: 19, name: 'Lamine Yamal', position: 'Forward', nationality: 'Spain' },
];

export const upcomingFixtures: Fixture[] = [
  {
    id: 'fix-1',
    homeTeam: 'FC Barcelona',
    awayTeam: 'Mallorca',
    date: 'Apr 26, 2026',
    time: '00:30 IST',
    competition: 'La Liga',
    venue: 'Estadi Olímpic Lluís Companys',
  },
  {
    id: 'fix-2',
    homeTeam: 'FC Barcelona',
    awayTeam: 'Paris Saint-Germain',
    date: 'May 06, 2026',
    time: '00:30 IST',
    competition: 'Champions League',
    venue: 'Estadi Olímpic Lluís Companys',
  },
  {
    id: 'fix-3',
    homeTeam: 'Real Betis',
    awayTeam: 'FC Barcelona',
    date: 'May 10, 2026',
    time: '22:30 IST',
    competition: 'La Liga',
    venue: 'Benito Villamarín',
  },
  {
    id: 'fix-4',
    homeTeam: 'FC Barcelona',
    awayTeam: 'Espanyol',
    date: 'May 17, 2026',
    time: '23:45 IST',
    competition: 'La Liga',
    venue: 'Estadi Olímpic Lluís Companys',
  },
  {
    id: 'fix-5',
    homeTeam: 'Celta Vigo',
    awayTeam: 'FC Barcelona',
    date: 'May 24, 2026',
    time: '21:00 IST',
    competition: 'La Liga',
    venue: 'Balaídos',
  },
];

export const recentResults: MatchResult[] = [
  {
    id: 'res-1',
    homeTeam: 'FC Barcelona',
    awayTeam: 'Real Madrid',
    homeScore: 2,
    awayScore: 1,
    date: 'Mar 30, 2025',
    competition: 'La Liga',
  },
  {
    id: 'res-2',
    homeTeam: 'Borussia Dortmund',
    awayTeam: 'FC Barcelona',
    homeScore: 0,
    awayScore: 3,
    date: 'Mar 26, 2025',
    competition: 'UCL Round of 16',
  },
  {
    id: 'res-3',
    homeTeam: 'FC Barcelona',
    awayTeam: 'Athletic Bilbao',
    homeScore: 4,
    awayScore: 0,
    date: 'Mar 22, 2025',
    competition: 'La Liga',
  },
  {
    id: 'res-4',
    homeTeam: 'Girona FC',
    awayTeam: 'FC Barcelona',
    homeScore: 1,
    awayScore: 4,
    date: 'Mar 15, 2025',
    competition: 'La Liga',
  },
  {
    id: 'res-5',
    homeTeam: 'FC Barcelona',
    awayTeam: 'Borussia Dortmund',
    homeScore: 3,
    awayScore: 1,
    date: 'Mar 12, 2025',
    competition: 'UCL Round of 16',
  },
];

export const merchandiseItems: MerchandiseItem[] = [
  {
    id: 'merch-1',
    name: 'FCB Kolkata Official Scarf',
    price: '₹599',
    category: 'Accessories',
    status: 'In Stock',
    imagePlaceholder: 'fcb-scarf',
  },
  {
    id: 'merch-2',
    name: 'Retro 1999 Anniversary Jersey (Replica)',
    price: '₹1499',
    category: 'Apparel',
    status: 'Pre-order',
    imagePlaceholder: 'retro-jersey',
  },
  {
    id: 'merch-3',
    name: 'Penya Member Enamel Pin',
    price: '₹299',
    category: 'Accessories',
    status: 'In Stock',
    imagePlaceholder: 'enamel-pin',
  },
  {
    id: 'merch-4',
    name: 'Matchday Hoodie - Special Edition',
    price: '₹1999',
    category: 'Apparel',
    status: 'Coming Soon',
    imagePlaceholder: 'hoodie',
  },
  {
    id: 'merch-5',
    name: 'Camp Nou Framed Poster',
    price: '₹899',
    category: 'Memorabilia',
    status: 'In Stock',
    imagePlaceholder: 'poster',
  },
  {
    id: 'merch-6',
    name: 'Official Fan Club Coffee Mug',
    price: '₹399',
    category: 'Accessories',
    status: 'In Stock',
    imagePlaceholder: 'coffee-mug',
  },
];
