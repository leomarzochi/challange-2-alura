import {Button} from 'components';
import styles from './CodeEditor.module.scss';

export const CodeEditor = () => {
  return (
    <>
      <div className={styles.editor}>
        <div className={styles.editor__header}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
        <div className={styles.editor__body_spacing}>
          <span
            autoCorrect="false"
            role="textarea"
            contentEditable
            className={styles.editor__body}
          />
        </div>
      </div>
      <Button type='outlined'>Visualizar com o highlight</Button>
    </>
  );
}