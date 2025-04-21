import styles from "./page.module.css";
import PricingHeader from "@/app/pricing/components/pricing-header/pricing-header";
import PricingList from "@/app/pricing/components/pricing-list/pricing-list";

export default function PricingPage() {
  return (
    <div className={styles.wrapper}>
      <PricingHeader />
      <PricingList />
    </div>
  );
}
