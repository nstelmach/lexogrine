"use client";

import styles from "./app-title.module.css";
import Link from "next/link";
import Typography from "@/components/typography/typography";
import { motion } from "motion/react";

export default function AppTitle() {
  return (
    <Link href="/">
      <motion.div whileHover={{ x: -20 }}>
        <Typography as="p" variant="large" className={styles.title}>
          Startup 3
        </Typography>
      </motion.div>
    </Link>
  );
}
