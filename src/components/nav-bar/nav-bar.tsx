import styles from "./nav-bar.module.css";
import { NavItem } from "@/components/nav-item/nav-item";

export const NavBar = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.heading}>Startup 3</p>
      <div className={styles.itemsWrapper}>
        <NavItem title="Overview" active={true} />
        <NavItem title="Prices" />
        <NavItem title="Blog" />
        <NavItem title="Feedback" />
        <button className={styles.button}>Purchase</button>
      </div>
    </div>
  );
};
