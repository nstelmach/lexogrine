import styles from "./pricing-card.module.css";
import PriceSection from "@/app/pricing/components/price-section/price-section";
import Card from "@/components/card/card";
import Typography from "@/components/typography/typography";

interface PricingCardProps {
  title: string;
  price: string;
  theme: "dark" | "light";
}

export default function PricingCard({ title, price, theme }: PricingCardProps) {
  return (
    <Card theme={theme}>
      <label className={styles.title}>{title.toUpperCase()}</label>
      <PriceSection price={price} />
      <Typography
        as="p"
        variant="small"
        className={`${styles.description} ${theme === "dark" && styles.darkDescription}`}
      >
        All the features you need to keep your personal files safe, accessible,
        and easy to share.
      </Typography>
    </Card>
  );
}
