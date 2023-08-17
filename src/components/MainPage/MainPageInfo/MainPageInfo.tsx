import styles from './MainPageInfo.module.scss'
import infoImg from '../../../assets/images/info.jpg'

import icon1 from '../../../assets/images/info-icon-1.png'
import icon2 from '../../../assets/images/info-icon-2.png'
import icon3 from '../../../assets/images/info-icon-3.png'
import classNames from 'classnames'

const MainPageInfo = () => {

  return (
    <div className={styles.info_wrapper}>
      <div className={styles.info}>
        <p className={styles.info_title}>Как заказать товар</p>
        <div className={styles.info_img_and_list}>
          <img alt='курьер' src={infoImg} className={styles.info_img} />
          <div className={styles.info_list}>
            <div className={styles.info_item}>
              <p className={styles.info_item_title}>Для заказа</p>
              <p className={styles.info_item_text}>Добавьте все, что Вас заинтересовало в "Избранное" и нажмите "Хочу заказать". Мы свяжемся с Вами и расскажем, как получить продукцию.</p>
            </div>

            <div className={styles.info_item}>
              <p className={styles.info_item_title}>Доставка из Южной Кореи</p>
              <p className={styles.info_item_text}>Продукция со значком "KR" доставляется напрямую из Южной Кореи, примерный срок доставки - 3-4 недели.</p>
            </div>

            <div className={styles.info_item}>
              <p className={styles.info_item_title}>Доставка по России</p>
              <p className={styles.info_item_text}>Остальная продукция доставляется с российского склада АТОМИ примерно за 5-7 рабочих дней.</p>
            </div>
          </div>
        </div>
      </div>
  
      <img alt='' src={icon1} className={classNames(styles.icon, styles.icon1)}/>
      <img alt='' src={icon2} className={classNames(styles.icon, styles.icon2)}/>
      <img alt='' src={icon3} className={classNames(styles.icon, styles.icon3)}/>
    </div>
  )
};

export default MainPageInfo
