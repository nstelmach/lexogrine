import styles from "./button.module.css";
import { Loader } from "lucide-react";
import { motion } from "motion/react";
import { JSX } from "react";

interface ButtonProps {
  disabled?: boolean;
  isLoading?: boolean;
  type: "submit" | "reset" | "button";
  label?: string;
  className: string;
  onClick?: () => void;
  icon?: JSX.Element;
}

export default function Button({
  disabled,
  isLoading,
  type,
  label,
  className,
  onClick,
  icon,
}: ButtonProps) {
  return (
    // Preventing button abuse
    <motion.button
      initial={{ opacity: 1, scale: 1 }}
      whileHover={{ opacity: 0.8, scale: 1.1 }}
      transition={{ duration: 0.3 }}
      type={type}
      className={`${styles.button} ${className}`}
      disabled={disabled || false}
      onClick={onClick}
    >
      <>{icon}</>
      <>{isLoading ? <Loader /> : label}</>
    </motion.button>
  );
}
