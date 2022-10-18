import {MenuTitle, Input, TextArea, Select} from "components";
import styles from './ProjectMenu.module.scss';

export const ProjectMenu = () => {
  return (
    <div className={styles.menu}>
      <MenuTitle>seu projeto</MenuTitle>
      <div className={styles['form-container']}>
        <Input type="text" placeholder="Nome do seu projeto"/>
        <TextArea placeholder="Descrição do seu projeto" />
      </div>
      <MenuTitle>Personalizacao</MenuTitle>
      <div className={styles['form-container']}>
        <Select />
        <Select />
      </div>
    </div>
  );
}