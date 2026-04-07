export type Event = {
  id: string;
  name: string;
  date: string;
  time: string;
  location: string;
  venue: string;
  description: string;
  imageId: string;
  mapLink: string;
};

export type Organizer = {
  id: string;
  name: string;
  role: string;
  imageId: string;
};

export type GalleryImage = {
  id: string;
  imageId: string;
  caption: string;
  category: 'screenings' | 'tournaments' | 'meetups' | 'charity';
};

export type NewsItem = {
  id: string;
  headline: string;
  date: string;
  category: "Club" | "Events" | "Merchandise" | "Community";
  author: string;
  content: string;
  imageId: string;
};

export type CommunityPost = {
  id: string;
  user: string;
  content: string;
  timestamp: string;
  likes: number;
  isMember: boolean;
};

export type SquadPlayer = {
  number: number;
  name: string;
  position: 'Goalkeeper' | 'Defender' | 'Midfielder' | 'Forward';
  nationality: string;
};

export type Fixture = {
  id: string;
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
  competition: string;
  venue: string;
};

export type MatchResult = {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  date: string;
  competition: string;
};

export type MerchandiseItem = {
  id: string;
  name: string;
  price: string;
  category: 'Apparel' | 'Accessories' | 'Memorabilia';
  status: 'In Stock' | 'Pre-order' | 'Coming Soon';
  imagePlaceholder: string;
};
