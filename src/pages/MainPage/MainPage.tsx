import MainPageInfo from '../../components/MainPage/MainPageInfo/MainPageInfo';
import MainPagePromo from '../../components/MainPage/MainPagePromo/MainPagePromo';
import styles from'./MainPage.module.scss'

const MainPage = () => {

  return (
    <div className={styles.MainPage}>
      <MainPagePromo/>
      <MainPageInfo/>
    </div>
  )
};

export default MainPage
