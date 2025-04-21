"use client";
import styles from "./pricing-header.module.css";
import Typography from "@/components/typography/typography";
import { motion } from "motion/react";

export default function PricingHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 30 }}
      transition={{ duration: 0.5 }}
      className={styles.wrapper}
    >
      <Typography as="h3" variant="xlarge" className={styles.title}>
        Simple & flexible pricing built for everyone
      </Typography>
      <Typography as="p" variant="small" className={styles.subtitle}>
        Start with 14-day free trial. No credit card needed. Cancel at anytime.
      </Typography>
    </motion.div>
  );
}
