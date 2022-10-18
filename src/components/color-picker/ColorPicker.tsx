import {useRef, useState} from 'react';
import styles from './ColorPicker.module.scss';

export const ColorPicker = () => {
  const colorPickerRef = useRef<HTMLInputElement>(null);
  const handleFocus = () => {
    colorPickerRef.current?.click();
  }

  const [color, setColor] = useState('#6BD1FF')
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