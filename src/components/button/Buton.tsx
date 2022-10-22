import styles from './Button.module.scss';
import classNames from 'classnames';
import {ButtonHTMLAttributes} from 'react';

type BtnStyle = 'filled' | 'outlined';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  buttonStyle: BtnStyle;
}

export const Button = ({children, buttonStyle, ...props}: ButtonProps) => {
  return (
    <button {...props} className={classNames({
      [styles.button]: true,
      [styles['button--outlined']]: buttonStyle === 'outlined',
      [styles['button--filled']]: buttonStyle === 'filled'
    })}>{children}</button>
  )
}