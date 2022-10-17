import {Avatar} from 'components/avatar/Avatar';
import {TextBody} from 'components/text-body/TextBody';
import {useEffect, useState} from 'react';
import {HiMenu} from 'react-icons/hi';

import styles from './Profile.module.scss';

export const Profile = () => {

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(getWindowSize())
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, [])

  const getWindowSize = () => {
    const {innerHeight, innerWidth} = window;
    return {innerHeight, innerWidth};
  }

  const [windowSize, setWindowSize] = useState(getWindowSize());

  return (
    <div className={styles.content}>
      <div className={styles.profile}>
        {windowSize.innerWidth > 862 ? (
          <>
            <Avatar className={styles.avatar} />
            <div style={{ width: '0.5rem' }} />
            <TextBody>{windowSize.innerWidth.toString()}</TextBody>
          </>
        ) : (
          <HiMenu size={32} color="white" />
        )}
      </div>
    </div>
  );
}