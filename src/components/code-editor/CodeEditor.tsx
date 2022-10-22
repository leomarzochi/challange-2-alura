import { Button } from 'components';
import hljs from 'highlight.js';
import { useEffect, useState } from 'react';
import styles from './CodeEditor.module.scss';
import 'highlight.js/styles/github.css';

export const CodeEditor = () => {
  const [showEditor, setShowEditor] = useState(true);
  const [buffer, setBuffer] = useState('');
  const [content, setContent] = useState(`const alura_challenge = () => { 
  alert("awesome!"); 
}

alura_challenge();
`);

  const handleHighlight = () => {
    if(showEditor) {
      setBuffer(content);
      setContent(hljs.highlight('javascript', content).value)
      setShowEditor(false)
      return;
    }
    setContent(buffer);
    setShowEditor(true)
  };

  return (
    <>
      <div className={styles.editor}>
        <div className={styles.editor__header}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
        <div className={styles.editor__body_spacing}>
          {showEditor && <textarea
            className={styles.editor__body}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />}
          {!showEditor && <pre>
            <code
              className={styles.editor__body}
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            ></code>
          </pre>}
        </div>
      </div>
      <Button buttonStyle="outlined" onClick={handleHighlight}>
        {!showEditor ? 'Voltar ao modo de edição' : 'Visualizar com o highlight'}
      </Button>
    </>
  );
};
