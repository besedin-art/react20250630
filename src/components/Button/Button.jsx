import styles from './Button.module.css'
import classNames from 'classnames';
import { useTheme } from '../ThemeContext/useTheme';
import { Link } from '../Link/Link';

export const Button = ({ size, buttonType = '', isActive, isLink, to, children, ...rest }) => {
  const { theme } = useTheme();
  const buttonClass = classNames(
    styles.button,
    {
      [styles.l]: size === 'large',
      [styles.m]: size === 'medium',
      [styles.s]: size === 'small',
      [styles.active]: isActive,
      [styles[buttonType]]: buttonType,
      [styles.light]: theme === 'light',
      [styles.dark]: theme === 'dark',
    }
  );

  if (isLink) {
    return (
      <Link
        to={to}
        className={buttonClass}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={buttonClass}
      {...rest}
    >
      {children}
    </button>
  )
};
