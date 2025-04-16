import styles from "./nav-item.module.css";

interface NavItemProps {
  title: string;
  active?: boolean;
}

export const NavItem = ({ title, active }: NavItemProps) => {
  return (
    <p className={`${styles.title} ${active && styles.active}`}>{title}</p>
  );
};
