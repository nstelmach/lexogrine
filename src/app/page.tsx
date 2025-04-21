"use client";

import styles from "./page.module.css";
import SignupPage from "@/app/(auth)/signup/page";
import { useAuth } from "@/context/AuthContext";
import PricingPage from "@/app/pricing/page";

export default function Home() {
  const { isLoggedIn } = useAuth();

  //If user is logged in, displaying Pricing Page
  return (
    <main className={styles.main}>
      {isLoggedIn ? <PricingPage /> : <SignupPage />}
    </main>
  );
}
