import styles from "./FooterBar.module.css";
const FooterBar = () => {
  return (
    <footer>
      <hr />
      <div className={styles.lower_footer}>
        <div className={styles.achors_tag}>
          <a href="#"> EdCart Business</a>
          <a href="#">Teach on EdCart</a>
          <a href="#">Get the app</a>
          <a href="#">About us</a>
          <a href="#">Contact us</a>
        </div>
        <div className={styles.achors_tag}>
          <a href="#">EdCart Business</a>
          <a href="#">Teach on EdCart</a>
          <a href="#">Get the app</a>
          <a href="#">About us</a>
          <a href="#">Contact us</a>
        </div>
        <div className={styles.achors_tag}>
          <a href="#">EdCart Business</a>
          <a href="#">Teach on EdCart</a>
          <a href="#">Get the app</a>
          <a href="#">About us</a>
          <a href="#">Contact us</a>
        </div>
      </div>
      <div className={styles.copy_right}>© 2024 EdCart, Inc.</div>
    </footer>
  );
};
export default FooterBar;
