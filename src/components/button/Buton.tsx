import styles from './Button.module.scss';
import classNames from 'classnames';

type ButtonType = 'filled' | 'outlined';

interface Props {
  children: string,
  type: ButtonType
}

export const Button = ({children, type}: Props) => {
  return (
    <button className={classNames({
      [styles.button]: true,
      [styles['button--outlined']]: type === 'outlined',
      [styles['button--filled']]: type === 'filled'
    })}>{children}</button>
  )
}