import styles from './MainPageCategories.module.scss'

import vitamins from '../../../assets/images/main-vitamins.png'
import cosmetics from '../../../assets/images/main-cosmetics.jpg'
import hygiene from '../../../assets/images/main-hygiene.jpg'
import food from '../../../assets/images/main-food.jpg'
import clothes from '../../../assets/images/main-clothes.jpg'
import home from '../../../assets/images/main-home.jpg'

const categories = [
  {
    title: 'БАДы и витамины',
    subtitle: 'Все витамины и БАДы АТОМИ имеют международные сертификаты качества HACCP, GMP, а также сертификат Минздрава Южной Кореи',
    img: vitamins,
  },
  {
    title: 'Косметика',
    subtitle: 'Декоративная и уходовая косметика для увлажнения, питания, омоложение, осветления, а также уход за чувствительной кожей и для лечения акне',
    img: cosmetics,
  },
  {
    title: 'ЛИЧНАЯ ГИГИЕНА',
    subtitle: 'Экологичные, абсолютно безопасные моющие и ухаживающие средства для всей семьи',
    img: hygiene,
  },
  {
    title: 'ТОВАРЫ ДЛЯ ДОМА',
    subtitle: 'Экологичные, высоко эффективные и абсолютно безопасные товары для чистоты и порядка в доме',
    img: home,
  },
  {
    title: 'ЕДА И НАПИТКИ',
    subtitle: 'Ароматный кофе, настоящая корейская лапша Рамен и другая еда и напитки с международным сертификатом HACCP',
    img: food,
  },
  {
    title: 'ОДЕЖДА И ДРУГОЕ',
    subtitle: 'Стильные и высококачественные одежда, белье и аксессуары, а также брендовая продукция компании',
    img: clothes,
  },
]



const MainPageCategories = () => {

  return (
    <div className={styles.categories_wrapper}>
      <div className={styles.categories}>

        {categories.map((el, i) => {
          return (
          <div className={styles.category} key={i}>
            <img src={el.img} alt='card' className={styles.category_img}></img>
            <p className={styles.category_title}>{el.title}</p>
            <p className={styles.category_subtitle}>{el.subtitle}</p>
            <div className={styles.category_button}>ВЫБРАТЬ</div>
          </div>
          )
        })}
        
      </div>
    </div>
  )
};

export default MainPageCategories
