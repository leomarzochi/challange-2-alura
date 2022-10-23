import { languageState } from 'atoms/codeEditorAtom';
import { MenuTitle, Input, TextArea, Select, Button } from 'components';
import { ColorPicker } from 'components/color-picker/ColorPicker';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import {ProjectLanguage} from 'types';
import styles from './ProjectMenu.module.scss';



export const ProjectMenu = () => {
  const languages: readonly ProjectLanguage[] = [
    { name: 'Javascript', id: 'javascript' },
    { name: 'Python', id: 'python' },
    { name: 'Java', id: 'java' },
    { name: 'Kotlin', id: 'kotlin' },
  ];

  const [language, setLanguage] = useRecoilState(languageState);
  return (
    <div className={styles.menu}>
      <MenuTitle>seu projeto</MenuTitle>
      <div className={styles['form-container']}>
        <Input type="text" placeholder="Nome do seu projeto" />
        <TextArea placeholder="Descrição do seu projeto" />
      </div>
      <MenuTitle>Personalizacao</MenuTitle>
      <div className={styles['form-container']}>
        <Select
          value={language}
          options={languages}
          onChange={setLanguage}
          mapOptionToValue={(option: ProjectLanguage) => option.id}
          mapOptionToLabel={(option: ProjectLanguage) => option.name}
        />
        <ColorPicker />
        <Button buttonStyle="filled">Salvar projeto</Button>
      </div>
    </div>
  );
};
