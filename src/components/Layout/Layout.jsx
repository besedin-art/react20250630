import styles from './Layout.module.css';
import { ToggleThemeButton } from '../ToggleThemeButton/ToggleThemeButton';
import { UserBlock } from '../UserBlock/UserBlock';

export const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        header
        <ToggleThemeButton />
        <UserBlock />
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>footer</footer>
    </>
  );
}