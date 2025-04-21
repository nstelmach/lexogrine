import styles from "./page.module.css";
import NavBar from "@/components/navigation/nav-bar/nav-bar";
import MainContent from "@/app/(auth)/components/main-content/main-content";

export default function SignupPage() {
  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <NavBar />
        <MainContent />
      </div>
    </div>
  );
}
