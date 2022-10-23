import { codeEditorRefState, languageState } from 'atoms/codeEditorAtom';
import { MenuTitle, Input, TextArea, Select, Button } from 'components';
import { ColorPicker } from 'components/color-picker/ColorPicker';
import {toPng} from 'html-to-image';
import {useCallback} from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {ProjectLanguage} from 'types/shared';
import styles from './ProjectMenu.module.scss';

export const ProjectMenu = () => {
  const [language, setLanguage] = useRecoilState(languageState);

  const languages: readonly ProjectLanguage[] = [
    { name: 'Javascript', id: 'javascript' },
    { name: 'Python', id: 'python' },
    { name: 'Java', id: 'java' },
    { name: 'Kotlin', id: 'kotlin' },
  ];
  const ref = useRecoilValue(codeEditorRefState);

  const onButtonClick = useCallback(() => {
    console.log(ref);
    
    if (ref === null) {
      return
    }

    toPng(ref, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'my-image-name.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ref])
  
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
        <button onClick={onButtonClick}>tete</button>
      </div>
    </div>
  );
};
