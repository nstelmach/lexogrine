"use client";
import { Fragment, useState } from "react";
import styles from "./burger-menu.module.css";
import { MenuIcon, XIcon } from "lucide-react";
import NavItems from "@/components/navigation/nav-items/nav-items";
import AppTitle from "@/components/app-title/app-title";
import Button from "@/components/button/button";

// Burger menu for small devices
export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const onOpenMenuHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <div className={styles.menuWrapper}>
        <Button
          type="button"
          icon={<MenuIcon />}
          className={styles.menu}
          onClick={onOpenMenuHandler}
        />
      </div>
      <div>
        {isOpen && (
          <div className={styles.wrapper}>
            <Button
              type="button"
              className={styles.icon}
              onClick={onOpenMenuHandler}
              icon={<XIcon />}
            />
            <div className={styles.itemsWrapper}>
              <AppTitle />
              <NavItems />
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
}
