import styles from './TextBody.module.scss';

interface Props {
  children: string;
}


export const TextBody = ({children}: Props) => {
  return (
    <p className={styles['text-body']}>{children}</p>
  )
}