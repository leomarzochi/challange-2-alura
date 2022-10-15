import styles from './MenuItem.module.scss';

interface Props {
  title: string,
  icon: JSX.Element
}

export const MenuItem = ({title, icon}: Props) => {
  return (
    <div className={styles.menu}>
      <div className={styles.menu__icon_container}>
        <span>
          {icon}
        </span>
      </div>
      <div style={{'width':  '1rem'}}></div>
      <p className={styles.menu__title}>
        {title}
      </p>
    </div>
  )
}