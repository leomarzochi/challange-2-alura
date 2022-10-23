import {atom} from "recoil";
import {ProjectLanguage} from "screens/code-editor/components/project-menu/ProjectMenu";

export const languageState = atom<ProjectLanguage>({
  key: 'languageState',
  default: {name: 'Javascript', id: 'javascript'}
})

export const colorState = atom({
  key: 'colorState',
  default: '#6BD1FF'
})