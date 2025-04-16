import { NavBar } from "@/components/nav-bar/nav-bar";
import { MainContent } from "@/components/main-content/main-content";
import styles from "./signup.module.css";

export default function SignupPage() {
  return (
    <div className={styles.wrapper}>
      <NavBar />
      <MainContent />
    </div>
  );
}
