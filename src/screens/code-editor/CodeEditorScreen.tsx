import {Button, CodeEditor} from 'components';
import styles from './CodeEditorScreen.module.scss';

export const CodeEditorScreen = () => {
  return (
    <div className={styles.content}>
      <div className={styles['code-editor']}>
        <CodeEditor/>
      </div>
      <Button type='outlined'>Visualizar com o highlight</Button>
      <div className={styles['editor-options']}>aside menu</div>
    </div>
  )
}