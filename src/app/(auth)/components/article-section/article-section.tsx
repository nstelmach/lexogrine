import styles from "./article-section.module.css";

export default function ArticleSection() {
  return (
    <div className={styles.articleWrapper}>
      <article className={styles.article}>Do you have an Account?</article>
      <article
        // initial={{ x: 0, opacity: 1 }}
        // whileHover={{ x: -5, opacity: 0 }}
        // exit={{ x: 0, opacity: 1 }}
        // transition={{ duration: 0.5 }}
        className={styles.sign}
      >
        Sign In
      </article>
    </div>
  );
}
