"use client";
import { useState } from "react";
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
    <div className={styles.wrapper}>
      <div className={styles.menuWrapper}>
        <Button
          type="button"
          icon={<MenuIcon width={50} height={50} />}
          className={styles.menu}
          onClick={onOpenMenuHandler}
        />
      </div>
      <div>
        {isOpen && (
          <div className={styles.contentWrapper}>
            <Button
              type="button"
              className={styles.icon}
              onClick={onOpenMenuHandler}
              icon={<XIcon width={40} height={40} />}
            />
            <div className={styles.itemsWrapper}>
              <AppTitle />
              <NavItems />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
