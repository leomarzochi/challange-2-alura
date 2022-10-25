import { atom } from "recoil";

import { ProjectLanguage } from "types";

export const languageState = atom<ProjectLanguage>({
  key: 'languageState',
  default: {id: 'javascript', name: 'Javascript'}
})

export const codeEditorRefState = atom<HTMLDivElement | null>({
  key: 'codeEditorRefState',
  default: null
})

export const colorState = atom({
  key: 'colorState',
  default: '#6BD1FF'
})

export const codeEditorState = atom({
  key: 'codeEditorState',
  default: `const alura_challenge = () => { 
    alert("awesome!"); 
  }
  
  alura_challenge();
  `
})