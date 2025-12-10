export interface ServiceItem {
  name: string;
  price: number;
  description?: string;
  highlight?: boolean;
}

export interface PackageItem {
  id: string;
  title: string;
  price: number;
  description: string;
  imageUrl?: string;
  tags?: string[];
}

export interface SectionData {
  id: string;
  title: string;
  subtitle?: string;
  items: ServiceItem[];
  extraInfo?: string;
  coverImage?: string;
}