import styles from './Header.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { Input } from 'components/Input/Input';
import { Profile } from 'components/profile/Profile';
import { useEffect, useState } from 'react';
import { HiSearch } from 'react-icons/hi';

export const Header = () => {
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(getWindowSize());
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const getWindowSize = () => {
    const { innerHeight, innerWidth } = window;
    return { innerHeight, innerWidth };
  };

  const [windowSize, setWindowSize] = useState(getWindowSize());

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.input}>
        {windowSize.innerWidth > 576 ? (
          <Input placeholder="Busque por algo" />
        ) : (
          <HiSearch size={32} color="white" />
        )}
      </div>
      <Profile windowSize={windowSize.innerWidth} />
    </header>
  );
};
