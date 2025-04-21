"use client";

import styles from "./nav-item.module.css";
import Typography from "@/components/typography/typography";
import { motion } from "motion/react";

interface NavItemProps {
  title: string;
  active?: boolean;
}

export default function NavItem({ title, active }: NavItemProps) {
  return (
    <motion.div whileHover={{ x: 5, y: -5 }}>
      <Typography
        as="p"
        className={`${styles.title} ${active && styles.active}`}
        variant="base"
      >
        {title}
      </Typography>
    </motion.div>
  );
}
