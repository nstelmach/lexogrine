import styles from "./pricing-header.module.css";
import Typography from "@/components/typography/typography";

export default function PricingHeader() {
  return (
    <div className={styles.wrapper}>
      <Typography as="h3" variant="xlarge" className={styles.title}>
        Simple & flexible pricing built for everyone
      </Typography>
      <Typography as="p" variant="small" className={styles.subtitle}>
        Start with 14-day free trial. No credit card needed. Cancel at anytime.
      </Typography>
    </div>
  );
}
