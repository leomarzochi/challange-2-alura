import {MenuTitle, Input, TextArea, Select, Button} from "components";
import {ColorPicker} from "components/color-picker/ColorPicker";
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
        <ColorPicker/>
        <Button buttonStyle="filled">Salvar projeto</Button>
      </div>
    </div>
  );
}