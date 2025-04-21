"use client";
import styles from "./article-section.module.css";
import { motion } from "motion/react";

export default function ArticleSection() {
  return (
    <div className={styles.articleWrapper}>
      <article className={styles.article}>Do you have an Account?</article>
      <motion.article
        whileHover={{ x: 5, opacity: 0.5 }}
        className={styles.sign}
      >
        Sign In
      </motion.article>
    </div>
  );
}
