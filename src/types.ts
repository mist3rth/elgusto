export interface Category {
  id: string;
  name: string;
  icon: string; // lucide icon name or emoji or custom identifier
  count: number;
}

export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  category: string; // matches Category.id
  image: string;
  isChefRecommended?: boolean;
}

export interface Chef {
  id: string;
  name: string;
  role: string;
  image: string;
  socials: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  avatar: string;
  rating: number;
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  discount: string;
  image: string;
  badge: string;
}

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  category: string;
}

export interface Booking {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  people: number;
}
