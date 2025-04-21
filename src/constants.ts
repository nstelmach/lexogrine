import { FeatureMap, NavItem, PriceItem, ResponseItem } from "@/types";

export const PRICING_LIST: PriceItem[] = [
  { id: "start", title: "start", price: "19", theme: "light" },
  { id: "enterprise", title: "enterprise", price: "49", theme: "dark" },
  { id: "enterprise+", title: "enterprise", price: "99", theme: "light" },
];

export const FEATURES: FeatureMap = {
  "2 GB of hosting space": ["start", "enterprise", "enterprise+"],
  "14 days of free backup": ["start", "enterprise", "enterprise+"],
  "Social integrations": ["enterprise", "enterprise+"],
  "Advanced client billing": ["enterprise+"],
};

// Those are predefined responses for signing up.
export const PREDEFINED_RESPONSES: ResponseItem[] = [
  {
    email: "success@example.com",
    password: "password123",
    response: { success: true },
  },
  {
    email: "blocked@example.com",
    password: "password123",
    response: {
      success: false,
      error: "This email domain is blocked.",
    },
  },
];

export const NAV_ITEMS_MAP: NavItem[] = [
  { name: "Overview", active: true },
  { name: "Prices" },
  { name: "Blog" },
  { name: "Feedback" },
];
