import styles from "./pricing.module.css";
import { PricingItem } from "@/components/pricing-item/pricing-item";
import { PRICING_LIST } from "@/constants";

export const Pricing = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>
          Simple & flexible pricing built for everyone
        </h3>
        <p className={styles.subtitle}>
          Start with 14-day free trial. No credit card needed. Cancel at
          anytime.
        </p>
      </div>
      <div className={styles.cardsWrapper}>
        {PRICING_LIST.map((item) => {
          return (
            <PricingItem
              key={item.id}
              theme={item.theme}
              id={item.id}
              price={item.price}
              title={item.title}
            />
          );
        })}
      </div>
    </div>
  );
};
