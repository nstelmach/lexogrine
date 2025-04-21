import styles from "./main-content.module.css";

import SignupCard from "@/app/(auth)/components/signup-card/signup-card";
import Info from "@/app/(auth)/components/info/info";

export default function MainContent() {
  return (
    <div className={styles.wrapper}>
      <Info />
      <SignupCard />
    </div>
  );
}
