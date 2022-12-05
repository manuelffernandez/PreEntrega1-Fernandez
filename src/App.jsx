import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import DescriptionContainer from './components/DescriptionContainer/DescriptionContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoryName' element={<ItemListContainer />} />
        <Route path='/item/:itemID' element={<DescriptionContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
