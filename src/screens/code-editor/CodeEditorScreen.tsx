import {CodeEditor} from 'components/code-editor/CodeEditor';
import styles from './CodeEditorScreen.module.scss';

export const CodeEditorScreen = () => {
  return (
    <div className={styles.content}>
      <div className={styles['code-editor']}>
        <CodeEditor/>
      </div>
      <div className={styles['editor-options']}>aside menu</div>
    </div>
  )
}