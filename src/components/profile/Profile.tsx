import {Avatar} from 'components/avatar/Avatar';
import {TextBody} from 'components/text-body/TextBody';
import {HiMenu} from 'react-icons/hi';

import styles from './Profile.module.scss';

interface Props {
  windowSize: number
}

export const Profile = ({windowSize}: Props) => {
  return (
    <div className={styles.content}>
      <div className={styles.profile}>
        {windowSize > 862 ? (
          <>
            <Avatar className={styles.avatar} />
            <div style={{ width: '0.5rem' }} />
            <TextBody>John Doe</TextBody>
          </>
        ) : (
          <HiMenu size={32} color="white" />
        )}
      </div>
    </div>
  );
}