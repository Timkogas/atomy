import { FC } from 'react';
import styles from './Footer.module.scss'

const Footer: FC = () => {
  return (
    <div className={styles.footer_wrapper}>
      <footer className={styles.footer}>
        <div>
          По любым вопросам Вы также можете связаться с нами: 
          <br/>
          <a className={styles.link} href='https://htmlbook.ru/html/a/target' target='_blank'>Telegram</a>, <a className={styles.link} href='#' target='_blank'>WhatsApp</a>
        </div>

        <div>
          © 2023 AtomyCatolog
          <br />
          Все права защищены
        </div>
      </footer>
    </div>
  )
};

export default Footer
