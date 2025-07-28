import styles from './Layout.module.css';
import { ToggleThemeButton } from '../ToggleThemeButton/ToggleThemeButton';
import { UserBlock } from '../UserBlock/UserBlock';
import { Cart } from '../Cart/Cart';
import { ScrollProgressBar } from '../ScrollProgressBar/ScrollProgressBar';
import { useUser } from '../UserContext/useUser';
import { Outlet, useOutletContext, Link, useNavigate } from 'react-router';

export const Layout = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <>
      <ScrollProgressBar />
      <header className={styles.header}>
        <Link to="/">Home</Link>
        <button onClick={() => { navigate(-1) }}>Back</button>
        <ToggleThemeButton />
        <UserBlock />
        {user && <Cart />}
      </header>
      <main>
        <Outlet />
      </main>
      <footer className={styles.footer}>footer</footer>
    </>
  );
}