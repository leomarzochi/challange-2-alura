import styles from './CodeEditorScreen.module.scss';

export const CodeEditorScreen = () => {
  return (
    <>
      <div className={styles['code-editor']}>code editor</div>
      <div className={styles['editor-options']}>aside menu</div>
    </>
  )
}