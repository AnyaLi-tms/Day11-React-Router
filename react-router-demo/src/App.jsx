import { Routes, Route } from 'react-router';
import './App.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Header from './components/layout/Header.jsx';
import Products from './pages/Products.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Profile from './pages/Profile.jsx';
import ProfileInfo from './pages/ProfileInfo.jsx';
import PurchasedProducts from './pages/PurchasedProducts.jsx';
import LikedProducts from './pages/LikedProducts.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <>
      <Header />
      <main className='container section'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/profile' element={<Profile />}>
            <Route index element={<ProfileInfo />} />
            <Route path='purchased' element={<PurchasedProducts />} />
            <Route path='liked' element={<LikedProducts />} />
          </Route>
          <Route path='/products/:id' element={<ProductDetail />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
