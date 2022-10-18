import { CodeEditor} from 'components';
import styles from './CodeEditorScreen.module.scss';
import {ProjectMenu} from './components/project-menu/ProjectMenu';

export const CodeEditorScreen = () => {
  return (
    <div className={styles.content}>
      <div className={styles['code-editor']}>
        <CodeEditor/>
      </div>
      <div className={styles['editor-options']}>
        <ProjectMenu />
      </div>
    </div>
  )
}