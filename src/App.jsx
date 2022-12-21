import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import DescriptionContainer from './components/DescriptionContainer/DescriptionContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider from './components/CartContext/CartContext';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route
            path='/categoria/:categoryName'
            element={<ItemListContainer />}
          />
          <Route path='/item/:itemID' element={<DescriptionContainer />} />
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
