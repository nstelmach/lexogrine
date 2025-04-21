import styles from "./card.module.css";
import { PropsWithChildren } from "react";

interface CardProps {
  theme: "dark" | "light";
}

export default function Card({
  children,
  theme,
}: PropsWithChildren<CardProps>) {
  return (
    <div className={`${styles.card} ${theme === "dark" && styles.darkCard}`}>
      {children}
    </div>
  );
}
