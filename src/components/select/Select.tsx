import { languageState } from 'atoms/codeEditorAtom';
import { SelectHTMLAttributes } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styles from './Select.module.scss';

interface ProjectLanguage {
  name: string;
  code: string;
}

const languages: ProjectLanguage[] = [
  { name: 'Javascript', code: 'javascript' },
  { name: 'Python', code: 'python' },
  { name: 'Java', code: 'java' },
  { name: 'Kotlin', code: 'kotlin' },
];

export const Select = () => {
  const setLanguage = useSetRecoilState(languageState)
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
  };
  return (
    <select onChange={handleSelectChange} className={styles.input}>
      {languages.map((language) => (
        <option key={language.code} value={language.code}>
          {language.name}
        </option>
      ))}
    </select>
  );
};
