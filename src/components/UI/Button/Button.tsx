import { memo, type ButtonHTMLAttributes, type FC } from 'react'

import styles from './Button.module.scss'
import classNames from 'classnames';

export enum ThemeButton {
  MAIN = 'main',
}

type ButtonProps = {
  className?: string;
  theme: ThemeButton,
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = props => {
  let {
    className,
    theme,
    disabled,
    children,
    ...otherProps
  } = props
  
  return (
    <button
      className={classNames(styles.button, [className, styles[theme]], {[styles.disabled]: disabled})}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  )
};

export default memo(Button)