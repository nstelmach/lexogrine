import styles from "./feature-item.module.css";
import { CheckIcon } from "lucide-react";
import Typography from "@/components/typography/typography";

interface FeatureItemProps {
  id: string;
  feature: string;
  featureList: string[];
}

export default function FeatureItem({
  id,
  feature,
  featureList,
}: FeatureItemProps) {
  const isVisible = featureList.includes(id);

  return (
    <div className={styles.wrapper}>
      <CheckIcon className={isVisible ? styles.icon : styles.hiddenIcon} />
      <Typography
        as="p"
        variant="small"
        className={isVisible ? styles.feature : styles.fade}
      >
        {feature}
      </Typography>
    </div>
  );
}
