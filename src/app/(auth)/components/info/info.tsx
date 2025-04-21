import styles from "./info.module.css";
import Button from "@/components/button/button";
import Typography from "@/components/typography/typography";

export default function Info() {
  return (
    <div className={styles.wrapper}>
      <Typography as="h2" variant="xxlarge" className={styles.title}>
        Generate Awesome Web Pages
      </Typography>
      <Typography as="h5" variant="base2" className={styles.subtitle}>
        The most important part of the Startup is the samples. The samples form
        a set of 25 usable pages you can use as is or you can add new blocks.
      </Typography>
      <Button type="button" label="Learn More" className={styles.button} />
    </div>
  );
}
