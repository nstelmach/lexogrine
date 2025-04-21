import { Fragment } from "react";
import styles from "./nav-items.module.css";
import NavItem from "@/components/navigation/nav-item/nav-item";
import Button from "@/components/button/button";
import { NAV_ITEMS_MAP } from "@/constants";

export default function NavItems() {
  return (
    <Fragment>
      <>
        {NAV_ITEMS_MAP.map((item) => (
          <NavItem key={item.name} title={item.name} active={item.active} />
        ))}
      </>
      <Button type="button" label="Purchase" className={styles.button} />
    </Fragment>
  );
}
