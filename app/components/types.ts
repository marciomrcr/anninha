// Tipos para os componentes da aplicação

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
  anchor: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  anchor?: string;
  submenu?: MenuSubItem[];
}

export interface MenuSubItem {
  id: string;
  name: string;
  anchor: string;
}

export interface CategoryItem {
  id: string;
  title: string;
  description: string;
  emoji: string;
  bgColor: string;
}

export interface ProductItem {
  id: string;
  name: string;
  description: string;
  price: number;
  emoji: string;
  bgColor: string;
}

export interface TrustItem {
  id: string;
  title: string;
  description: string;
  emoji: string;
  bgColor: string;
}

export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterSection {
  id: string;
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}