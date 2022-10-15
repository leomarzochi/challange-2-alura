import {MenuItem} from './menu-item/MenuItem';
import styles from './Sidebar.module.scss';

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <span className={styles.sidebar__title}>MENU</span>
      <MenuItem title="Editor de código"/>
      <MenuItem title="Comunidade"/>
    </aside>
  )
}