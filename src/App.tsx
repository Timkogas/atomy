import { Outlet, Route, Routes } from 'react-router-dom';
import './index.scss'
import HeaderAndFooterLayout from './components/Layouts/HeaderAndFooterLayout/HeaderAndFooterLayout';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <Routes>
      <Route element={<HeaderAndFooterLayout/>}>
        <Route path='/home' element={<MainPage/>} />
        <Route path='/' element={<MainPage/>} />
        <Route path='/products' element={<>Подукты</>} />
        <Route path='/contacts' element={<>Контакты</>} />
        <Route path='/cart' element={<>Корзина</>} />
      </Route>

    </Routes>
  );
}

export default App;
