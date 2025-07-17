import styles from './Layout.module.css';

export const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>header</header>
      <main>{children}</main>
      <footer className={styles.footer}>footer</footer>
    </>
  );
}