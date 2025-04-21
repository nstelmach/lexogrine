import styles from "./pricing-list.module.css";
import { PRICING_LIST } from "@/constants";
import PricingItem from "@/app/pricing/components/pricing-item/pricing-item";

export default function PricingList() {
  return (
    <div className={styles.wrapper}>
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
  );
}
