import styles from './Select.module.scss';

type Allowed = string | number;

type BaseProps<Value> = {
  value: Value;
  onChange: (newValue: Value) => void;
  options: readonly Value[];
  mapOptionToLabel?: (option: Value) => Allowed;
  mapOptionToValue?: (option: Value) => Allowed;
};

type Props<Value> = Value extends Allowed
  ? BaseProps<Value>
  : Required<BaseProps<Value>>;

const isAllowed = (v: any): v is Allowed =>
  typeof v === 'string' || typeof v === 'number';

export function Select<Value>({
  value,
  onChange,
  options,
  mapOptionToLabel,
  mapOptionToValue,
}: Props<Value>) {
  const toLabel = (option: Value): Allowed => {
    if (mapOptionToLabel) {
      return mapOptionToLabel(option);
    }
    return isAllowed(option) ? option : String(option);
  };

  const toValue = (option: Value): Allowed => {
    if (mapOptionToValue) {
      return mapOptionToValue(option);
    }
    return isAllowed(option) ? option : String(option);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(options[e.target.selectedIndex]);
  };

  return (
    <select className={styles.input} value={toValue(value)} onChange={handleChange}>
      {options.map((value) => (
        <option value={toValue(value)} key={toValue(value)}>
          {toLabel(value)}
        </option>
      ))}
    </select>
  );
}

// export const Select = () => {
//   const setLanguage = useSetRecoilState(languageState)
//   const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setLanguage(event.target.value);
//   };
//   return (
//     <select onChange={handleSelectChange} className={styles.input}>
//       {languages.map((language) => (
//         <option key={language.code} value={language.code}>
//           {language.name}
//         </option>
//       ))}
//     </select>
//   );
// };
