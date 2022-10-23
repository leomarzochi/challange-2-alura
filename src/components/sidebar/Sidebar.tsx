import {MenuItem} from './menu-item/MenuItem';
import {FaCode, FaUsers} from 'react-icons/fa';
import styles from './Sidebar.module.scss';
import {MenuTitle} from 'components/menu-title/MenuTitle';

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <MenuTitle>MENU</MenuTitle>
      <MenuItem to="/" icon={<FaCode size={23}/>} title="Editor de código"/>
      <MenuItem to="/community" icon={<FaUsers size={23}/>} title="Comunidade"/>
    </aside>
  )
}