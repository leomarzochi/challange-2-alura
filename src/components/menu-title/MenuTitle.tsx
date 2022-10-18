import styles from './MenuTitle.module.scss';

interface Props {
  children: string
}

export const MenuTitle = ({children}: Props) => {
  return <p className={styles['menu-title']}>{children}</p>;
}