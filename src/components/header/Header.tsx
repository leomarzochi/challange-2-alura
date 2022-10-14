import styles from './Header.module.scss';
import {ReactComponent as Logo} from 'assets/logo.svg';
import {Input} from 'components/Input/Input';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo/>
      <Input placeholder='Busque por algo'/>

    </header>
  )
}