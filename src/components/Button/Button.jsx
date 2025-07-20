import styles from './Button.module.css'
import classNames from 'classnames';

export const Button = ({ size, buttonType = '', isActive, children, ...rest }) => {
  const buttonClass = classNames(
    styles.button,
    {
      [styles.l]: size === 'large',
      [styles.m]: size === 'medium',
      [styles.s]: size === 'small',
      [styles.active]: isActive,
      [styles[buttonType]]: buttonType,
    }
  );

  return (
    <button
      className={buttonClass}
      {...rest}
    >
      {children}
    </button>
  )
};
