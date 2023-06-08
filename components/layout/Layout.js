import styles from "./Layout.module.css";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>CarShop</h2>
          <p>Choose and buy your Car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>First Next Project || CarShop Project &copy;</footer>
    </>
  );
};

export default Layout;
