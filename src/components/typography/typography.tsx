import { PropsWithChildren } from "react";
import styles from "./typography.module.css";

type TypographyProps = {
  variant?: "base" | "small" | "xxlarge" | "xlarge" | "base2";
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5";
  className?: string;
};

export const variantMap = {
  base: styles.base,
  small: styles.small,
  large: styles.large,
  xlarge: styles.xlarge,
  xxlarge: styles.xxlarge,
  base2: styles.base2,
};

export default function Typography({
  variant = "small",
  as = "p",
  children,
  className,
}: PropsWithChildren<TypographyProps>) {
  const Comp = as;

  return (
    <Comp className={`${variantMap[variant]} ${className}`}>{children}</Comp>
  );
}
