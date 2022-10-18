import styles from './TextArea.module.scss';

type Props = React.DetailedHTMLProps<
React.InputHTMLAttributes<HTMLTextAreaElement>,
HTMLTextAreaElement
>

export const TextArea = (props: Props) => {
  return (
    <textarea className={styles.input} {...props}/> 
  );
}
