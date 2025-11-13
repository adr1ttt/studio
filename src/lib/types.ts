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
