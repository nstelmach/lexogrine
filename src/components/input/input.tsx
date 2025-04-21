import React, { InputHTMLAttributes } from "react";

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
    <div
    // whileHover={{ scale: 1.05 }}
    >
      <input
        placeholder={placeholder}
        type={type}
        className={className}
        id={id}
        required
        {...props}
      />
    </div>
  );
}
