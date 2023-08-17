import styles from './MainPagePromo.module.scss'
import promoImg from '../../../assets/images/promo.jpg'
import Button, { ThemeButton } from '../../UI/Button/Button';

const MainPagePromo = () => {

  return (
    <div className={styles.promo_wrapper}>
      <div className={styles.promo}>
        <p className={styles.title}>Атоми</p>
        <p className={styles.subtitle}>Прекрасное место для приобретения корейских товаров и косметики высшего качества!</p>
      </div>
      <div className={styles.promo_img_wrapper}>
        <img src={promoImg} alt='girl' className={styles.promo_img} />
        <div className={styles.promo_img_wrapper_info}>
          <p className={styles.promo_img_wrapper_info_text}>
            Зарегистрируйся в интернет-магазине АТОМИ, чтобы приобретать продукцию по минимальной цене, пользоваться бесплатной доставкой и принимать участие в акциях!
          </p>
          <Button theme={ThemeButton.MAIN}>Регистрация</Button>
          
        </div>
      </div>
    </div>
  )
};

export default MainPagePromo
