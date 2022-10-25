import hljs from 'highlight.js';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { codeEditorRefState, codeEditorState, colorState, languageState } from 'atoms/codeEditorAtom';
import { Button } from 'components';

import styles from './CodeEditor.module.scss';

import 'highlight.js/styles/github.css';

export const CodeEditor = () => {
  const color = useRecoilValue(colorState);
  const language = useRecoilValue(languageState);
  const [showEditor, setShowEditor] = useState(true);
  const [buffer, setBuffer] = useState('');
  const codeEditorRef = useSetRecoilState(codeEditorRefState);
  const [content, setContent] = useRecoilState(codeEditorState);

  useEffect(() => {
    if (!showEditor) {
      setContent(hljs.highlight(language.name, buffer).value);
    }
  }, [language, showEditor, buffer, setContent]);

  const handleHighlight = () => {
    if (showEditor) {
      setBuffer(content);
      setContent(hljs.highlight(language.name, content).value);
      setShowEditor(false);
      return;
    }
    setContent(buffer);
    setShowEditor(true);
  };

  return (
    <>
      <div
        ref={(ref) => codeEditorRef(ref)}
        style={{ backgroundColor: color }}
        className={styles.editor}
      >
        <div className={styles.editor__header}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
        <div className={styles.editor__body_spacing}>
          {showEditor && (
            <textarea
              className={styles.editor__body}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          )}
          {!showEditor && (
            <pre>
              <code
                className={styles.editor__body}
                dangerouslySetInnerHTML={{
                  __html: content,
                }}
              ></code>
            </pre>
          )}
        </div>
      </div>
      <Button buttonStyle="outlined" onClick={handleHighlight}>
        {!showEditor
          ? 'Voltar ao modo de edição'
          : 'Visualizar com o highlight'}
      </Button>
    </>
  );
};
