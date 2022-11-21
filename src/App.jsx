import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
   return (
      <>
         <NavBar />
         <ItemListContainer greeting='Bienvenido a Tienda Manu' />
      </>
   );
}

export default App;
