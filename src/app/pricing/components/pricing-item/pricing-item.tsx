import styles from "./pricing-item.module.css";
import PricingCard from "@/app/pricing/components/pricing-card/pricing-card";
import Features from "@/app/pricing/components/features/features";
import Button from "@/components/button/button";

interface PricingItemProps {
  id: string;
  title: string;
  price: string;
  theme: "dark" | "light";
}

export default function PricingItem({
  id,
  title,
  price,
  theme,
}: PricingItemProps) {
  return (
    <div className={styles.wrapper}>
      <PricingCard title={title} price={price} theme={theme} />
      <Features id={id} />
      <Button
        type="button"
        label="Start Free Trial"
        className={`${styles.button} ${theme === "dark" ? styles.darkButton : undefined}`}
      />
    </div>
  );
}
