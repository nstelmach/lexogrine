"use client";
import styles from "./signup-card.module.css";
import SignupForm from "@/app/(auth)/components/signup-form/signup-form";
import ArticleSection from "@/app/(auth)/components/article-section/article-section";
import Button from "@/components/button/button";
import Typography from "@/components/typography/typography";
import { motion } from "motion/react";

export default function SignupCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className={styles.card}
    >
      <Typography as="h3" variant="xlarge" className={styles.title}>
        Sign Up Now
      </Typography>
      <SignupForm />
      <Typography as="p" variant="small" className={styles.divider}>
        or
      </Typography>
      <Button
        type="button"
        label="Login via Twitter"
        className={styles.button}
      />
      <ArticleSection />
    </motion.div>
  );
}
