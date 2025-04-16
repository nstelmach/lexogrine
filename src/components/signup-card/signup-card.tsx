import styles from "./signup-card.module.css";

export const SignupCard = () => {
  return (
    <div className={styles.card}>
      <h3 className={styles.heading3}>Sign Up Now</h3>
      <div className={styles.inputWrapper}>
        <input className={styles.input} placeholder="Your email" />
        <input className={styles.input} placeholder="Your password" />
        <div className={styles.checkboxWrapper}>
          <input
            className={styles.checkbox}
            type="checkbox"
            id="terms"
            name="terms"
          />
          <label htmlFor="terms">
            <p className={styles.label}>I agree to the Terms of Service.</p>
          </label>
        </div>
      </div>

      <button className={styles.button}>Sign In</button>
      <p className={styles.divider}>or</p>
      <button className={styles.twitter}>Login via Twitter</button>
      <div className={styles.articleWrapper}>
        <article className={styles.article}>Do you have an Account?</article>
        <article className={styles.sign}>Sign In</article>
      </div>
    </div>
  );
};
