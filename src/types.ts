export interface User {
  email: string;
}

export interface PriceItem {
  id: string;
  title: string;
  price: string;
  theme: "light" | "dark";
}

export interface FeatureMap {
  [key: string]: string[];
}

export interface Response {
  success: boolean;
  error?: string;
}

export interface ResponseItem {
  email: string;
  password: string;
  response: Response;
}

export interface NavItem {
  name: string;
  active?: boolean;
}
