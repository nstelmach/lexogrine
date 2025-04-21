"use client";
import styles from "./info.module.css";
import Button from "@/components/button/button";
import Typography from "@/components/typography/typography";
import { motion } from "motion/react";

export default function Info() {
  return (
    <motion.div
      className={styles.wrapper}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <Typography as="h2" variant="xxlarge" className={styles.title}>
        Generate Awesome Web Pages
      </Typography>
      <Typography as="h5" variant="base2" className={styles.subtitle}>
        The most important part of the Startup is the samples. The samples form
        a set of 25 usable pages you can use as is or you can add new blocks.
      </Typography>
      <Button type="button" label="Learn More" className={styles.button} />
    </motion.div>
  );
}
