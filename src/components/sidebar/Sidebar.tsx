import {MenuItem} from './menu-item/MenuItem';
import {FaCode, FaUsers} from 'react-icons/fa';
import styles from './Sidebar.module.scss';

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <p className={styles.sidebar__title}>MENU</p>
      <MenuItem icon={<FaCode size={23}/>} title="Editor de código"/>
      <MenuItem icon={<FaUsers size={23}/>} title="Comunidade"/>
    </aside>
  )
}