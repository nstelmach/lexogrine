import styles from "./price-section.module.css";
import Typography from "@/components/typography/typography";

interface PriceSectionProps {
  price: string;
}

export default function PriceSection({ price }: PriceSectionProps) {
  return (
    <div className={styles.wrapper}>
      <Typography as="p" variant="small" className={styles.dollar}>
        $
      </Typography>
      <Typography as="h2" variant="xxlarge" className={styles.price}>
        {price}
      </Typography>
      <div className={styles.textWrapper}>
        <Typography as="p" variant="small">
          per user
        </Typography>
        <Typography as="p" variant="small">
          per month
        </Typography>
      </div>
    </div>
  );
}
