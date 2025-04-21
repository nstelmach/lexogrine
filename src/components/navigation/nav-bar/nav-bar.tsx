import styles from "./nav-bar.module.css";
import { Fragment } from "react";
import BurgerMenu from "@/components/navigation/burger-menu/burger-menu";
import NavItems from "@/components/navigation/nav-items/nav-items";
import AppTitle from "@/components/app-title/app-title";

export default function NavBar() {
  return (
    <Fragment>
      <div
        // initial={{ opacity: 0, y: -20 }}
        // animate={{ opacity: 1, y: 0 }}
        // exit={{ opacity: 0, y: -20 }}
        // transition={{ duration: 0.5 }}
        className={styles.wrapper}
      >
        <div
        // initial={{ rotate: 0 }}
        // whileHover={{ rotate: 360 }}
        // transition={{ duration: 0.5 }}
        >
          <AppTitle />
        </div>
        <div className={styles.itemsWrapper}>
          <NavItems />
        </div>
      </div>
      <BurgerMenu />
    </Fragment>
  );
}
