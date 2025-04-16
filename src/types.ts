export interface PriceItem {
  id: string;
  title: string;
  price: string;
  theme: "light" | "dark";
}

export interface FeatureMap {
  [key: string]: string[];
}
