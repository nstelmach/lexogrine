import styles from "./features.module.css";
import { FEATURES } from "@/constants";
import FeatureItem from "@/app/pricing/components/feature-item/feature-item";

interface FeaturesProps {
  id: string;
}

export default function Features({ id }: FeaturesProps) {
  return (
    <div className={styles.wrapper}>
      {Object.entries(FEATURES).map(([key, value]) => (
        <FeatureItem key={key} id={id} feature={key} featureList={value} />
      ))}
    </div>
  );
}
