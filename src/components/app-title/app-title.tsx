import styles from "./app-title.module.css";
import Link from "next/link";
import Typography from "@/components/typography/typography";

export default function AppTitle() {
  return (
    <Link href="/">
      <Typography as="p" variant="large" className={styles.title}>
        Startup 3
      </Typography>
    </Link>
  );
}
