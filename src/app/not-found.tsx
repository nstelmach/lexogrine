import Link from "next/link";
import styles from "./not-found.module.css";
import Typography from "@/components/typography/typography";

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <Typography as="h2">Not Found</Typography>
      <Typography as="p">Could not find requested resource</Typography>
      <Link className={styles.link} href="/">
        Return home
      </Link>
    </div>
  );
}
