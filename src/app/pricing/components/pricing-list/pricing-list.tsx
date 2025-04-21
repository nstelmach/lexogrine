"use client";
import styles from "./pricing-list.module.css";
import { PRICING_LIST } from "@/constants";
import PricingItem from "@/app/pricing/components/pricing-item/pricing-item";
import { motion } from "motion/react";

export default function PricingList() {
  const containerVariants = {
    hidden: { opacity: 1, transition: { delay: 0.5 } },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delay: 0.5,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className={styles.wrapper}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <>
        {PRICING_LIST.map((item) => {
          return (
            <motion.div key={item.id} variants={itemVariants}>
              <PricingItem
                theme={item.theme}
                id={item.id}
                price={item.price}
                title={item.title}
              />
            </motion.div>
          );
        })}
      </>
    </motion.div>
  );
}
