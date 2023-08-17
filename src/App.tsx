import { Outlet, Route, Routes } from 'react-router-dom';
import './index.scss'
import HeaderAndFooterLayout from './components/Layouts/HeaderAndFooterLayout/HeaderAndFooterLayout';

function App() {
  return (
    <Routes>
      <Route element={<HeaderAndFooterLayout/>}>
        <Route path='/home' element={<p className='text'>Главная</p>} />
        <Route path='/' element={<>Главная</>} />
        <Route path='/products' element={<>Подукты</>} />
        <Route path='/contacts' element={<>Контакты</>} />
        <Route path='/cart' element={<>Корзина</>} />
      </Route>

    </Routes>
  );
}

export default App;
