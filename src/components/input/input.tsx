import { motion } from "motion/react";
import { ChangeHandler } from "react-hook-form/dist/types/form";
import React, { InputHTMLAttributes } from "react";

type InputProps = {
  placeholder?: string;
  type: "email" | "password" | "checkbox";
  id?: string;
  className: string;
  onChange: ChangeHandler;
  name: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  placeholder,
  type,
  id,
  className,
  onChange,
  name,
  ...props
}: InputProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <input
        placeholder={placeholder}
        type={type}
        className={className}
        id={id}
        onChange={onChange}
        name={name}
        required
        {...props}
      />
    </motion.div>
  );
}
