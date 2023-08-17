import { FC } from 'react';
import styles from './Header.module.scss'
import { NavLink } from 'react-router-dom';

const Header: FC = () => {

  return (
    <div className={styles.header_wrapper}>
      <header className={styles.header}>
        <NavLink to='/products' className={styles.link}>
          Купить корейские товары
        </NavLink>
        <NavLink to='/' className={styles.link}>
          Главная
        </NavLink>
        <NavLink to='/contacts' className={styles.link}>
          Контакты
        </NavLink>
        <NavLink to='/cart' className={styles.link}>
          Корзина
        </NavLink>

      </header>
    </div>
  )
};

export default Header
