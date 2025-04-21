"use client";
import { InputHTMLAttributes } from "react";
import { motion } from "motion/react";

type InputProps = {
  placeholder?: string;
  type: "email" | "password" | "checkbox";
  id?: string;
  className: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  placeholder,
  type,
  id,
  className,
  ...props
}: InputProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <input
        placeholder={placeholder}
        type={type}
        className={className}
        id={id}
        required
        {...props}
      />
    </motion.div>
  );
}
