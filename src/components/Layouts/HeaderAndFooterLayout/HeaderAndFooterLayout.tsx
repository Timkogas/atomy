import { Outlet } from 'react-router-dom';
import styles from './HeaderAndFooterLayout.module.scss'
import Header from './Header/Header';
import { FC } from 'react';
import Footer from './Footer/Footer';

const HeaderAndFooterLayout: FC = () => {

  return (
    <>
    <Header/>
      <main className={styles.content}>
        <Outlet />
      </main>
    <Footer/>
    </>
  )
};

export default HeaderAndFooterLayout
