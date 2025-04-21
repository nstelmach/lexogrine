"use client"; // Error components must be Client components
import React from "react";
import styles from "./error.module.css";

export default function Error({ error }: { error: Error }) {
  return (
    <div className={styles.error}>Something went wrong! ({error.message})</div>
  );
}
