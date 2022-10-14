import styles from './Header.module.scss';
import {ReactComponent as Logo} from 'assets/logo.svg';
import {Input} from 'components/Input/Input';
import {Profile} from 'components/profile/Profile';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.input}>
        <Input placeholder='Busque por algo'/>
      </div>
      <Profile/>
    </header>
  )
}