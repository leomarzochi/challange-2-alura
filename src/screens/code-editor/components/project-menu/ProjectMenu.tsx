import {MenuTitle, Input} from "components";
import styles from './ProjectMenu.module.scss';

export const ProjectMenu = () => {
  return (
    <div className={styles.menu}>
      <MenuTitle>seu projeto</MenuTitle>
      <Input type="text" placeholder="Nome do seu projeto"/>
    </div>
  );
}