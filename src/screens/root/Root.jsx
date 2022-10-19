import styles from './Root.module.scss';
import {Header, Sidebar} from 'components';
import {Outlet} from 'react-router-dom';

export const Root = () => {
  return (
    <>
      <Header />
      <div className={styles.content}>
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}