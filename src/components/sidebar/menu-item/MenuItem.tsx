import styles from './MenuItem.module.scss';
import {NavLink} from 'react-router-dom'

interface Props {
  title: string,
  icon: JSX.Element,
  to: string
}

export const MenuItem = ({title, icon, to}: Props) => {
  return (
    <div className={styles.menu}>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? `${styles['menu--active']} ${styles.menu__link}`
            : styles.menu__link
        }
        end
      >
        <div className={styles.menu__icon_container}>
          <span>{icon}</span>
        </div>
        <div style={{ width: '1rem' }}></div>
        <p className={styles.menu__title}>{title}</p>
      </NavLink>
    </div>
  );
}