import styles from './Input.module.scss';

type Props = React.DetailedHTMLProps<
React.InputHTMLAttributes<HTMLInputElement>,
HTMLInputElement
>

export const Input = (props: Props) => {
  return <input className={styles.input} {...props} />;
};