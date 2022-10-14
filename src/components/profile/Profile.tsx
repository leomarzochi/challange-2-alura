import {Avatar} from 'components/avatar/Avatar';
import {TextBody} from 'components/text-body/TextBody';

import styles from './Profile.module.scss';

export const Profile = () => {
  return (
    <div className={styles.profile}>
      <Avatar className={styles.avatar}/>
      <div style={{'width': '0.5rem'}}/>
      <TextBody>John Doe</TextBody>
    </div>
  )
}