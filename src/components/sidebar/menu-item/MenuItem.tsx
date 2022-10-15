import styles from './MenuItem.module.scss';

interface Props {
  title: string,
  icon?: string
}

export const MenuItem = ({title, icon}: Props) => {
  return (
    <div className={styles.menu}>
      <div className={styles.menu__icon_container}>
        <i className={styles.menu__icon}>X</i>
      </div>
      <div style={{'width':  '1rem'}}></div>
      <div className={styles.menu__title}>
        {title}
      </div>
    </div>
  )
}