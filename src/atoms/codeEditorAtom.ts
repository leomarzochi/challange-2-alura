import {atom} from "recoil";

export const languageState = atom({
  key: 'languageState',
  default: 'javascript'
})

export const colorState = atom({
  key: 'colorState',
  default: '#6BD1FF'
})