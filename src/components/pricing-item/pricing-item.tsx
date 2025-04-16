import styles from "./pricing-item.module.css";
import { FEATURES } from "@/constants";
import Icon from "@/components/icon/icon";

interface PricingItemProps {
  id: string;
  title: string;
  price: string;
  theme: "dark" | "light";
}

export const PricingItem = ({ id, title, price, theme }: PricingItemProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.card} ${theme === "dark" && styles.darkCard}`}>
        <label className={styles.title}>{title.toUpperCase()}</label>
        <div className={styles.priceWrapper}>
          <p className={`${styles.text} ${styles.dollar}`}>$</p>
          <h2 className={styles.price}>{price}</h2>
          <div className={styles.textWrapper}>
            <p className={styles.text}>per user</p>
            <p className={styles.text}>per month</p>
          </div>
        </div>
        <p
          className={`${styles.description} ${theme === "dark" && styles.darkDescription}`}
        >
          All the features you need to keep your personal files safe,
          accessible, and easy to share.
        </p>
      </div>
      <div className={styles.featuresWrapper}>
        {Object.entries(FEATURES).map(([key, value]) => {
          const isVisible = value.includes(id);
          return (
            <div key={key} className={styles.featureWrapper}>
              <Icon className={!isVisible && styles.icon} />
              <p className={`${styles.feature} ${!isVisible && styles.fade}`}>
                {key}
              </p>
            </div>
          );
        })}
      </div>
      <button
        className={`${styles.button} ${theme === "dark" && styles.darkButton}`}
      >
        Start Free Trial
      </button>
    </div>
  );
};
