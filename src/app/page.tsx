"use client";

import styles from "./page.module.css";
import { useState } from "react";
import SignupPage from "@/app/signup/page";
import { Pricing } from "@/components/pricing/pricing";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <main className={styles.main}>
      {isLoggedIn ? <Pricing /> : <SignupPage />}
    </main>
  );
}
