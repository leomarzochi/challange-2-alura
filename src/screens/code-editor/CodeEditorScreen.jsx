import styles from './CodeEditorScreen.module.scss';

export const CodeEditorScreen = () => {
  return (
    <div className={styles.content}>
      <div className={styles['code-editor']}><p></p>code editor</div>
      <div className={styles['editor-options']}>aside menu</div>
    </div>
  )
}