import styles from "./info.module.css";

export const Info = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading2}>Generate Awesome Web Pages</h2>
      <h5 className={styles.heading5}>
        The most important part of the Startup is the samples. The samples form
        a set of 25 usable pages you can use as is or you can add new blocks.
      </h5>
      <button className={styles.button}>Learn More</button>
    </div>
  );
};
