import {colorState} from 'atoms/codeEditorAtom';
import {useRef} from 'react';
import {useRecoilState} from 'recoil';
import styles from './ColorPicker.module.scss';

export const ColorPicker = () => {
  const colorPickerRef = useRef<HTMLInputElement>(null);
  const handleFocus = () => {
    colorPickerRef.current?.click();
  }

  const [color, setColor] = useRecoilState(colorState);

  return (
    <div className={styles.color}>
      <div className={styles.color__container} style={{'background': `${color}`}} onClick={handleFocus} />
      <input
        ref={colorPickerRef}
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value) }
        className={styles.color__content}
      />
    </div>
  );
}