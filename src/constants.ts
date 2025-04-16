import { FeatureMap, PriceItem } from "@/types";

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
