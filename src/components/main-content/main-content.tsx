import styles from "./main-content.module.css";
import { Info } from "@/components/info/info";
import { SignupCard } from "@/components/signup-card/signup-card";

export const MainContent = () => {
  return (
    <div className={styles.wrapper}>
      <Info />
      <SignupCard />
    </div>
  );
};
