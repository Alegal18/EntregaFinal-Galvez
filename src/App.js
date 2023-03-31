import NavBar from "./component/NavBar/NavBar";
import ItemListContainer from "./component/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./component/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartItems from "./component/CartItems";
import DataProvider from "./component/Context/DataContext";
import OffRoad from "./component/OffRoad/OffRoad";
import Street from "./component/Street/Street";
import Trail from "./component/Trail/Trail";
import Footer from "./component/Footer/Footer";
import Formulario from "./component/Formulario/Formulario";

function App() {  
  
  return (
    
    <DataProvider>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/itemList" element={<ItemListContainer />} />
          <Route path="/producto/:idItem" element={<ItemDetailContainer />} />
          <Route path="/offRoad/" element={<OffRoad />} />
          <Route path="/offRoad/producto/:idItem" element={<ItemDetailContainer />} />
          <Route path="/street/" element={<Street />} />
          <Route path="/street/producto/:idItem" element={<ItemDetailContainer />} />
          <Route path="/trail/" element={<Trail />} />
          <Route path="/trail/producto/:idItem" element={<ItemDetailContainer />} />
          <Route path="/cartItems" element={<CartItems />} />          
          <Route path="*" element={<hi><strong>Error 404, Pagina no encontrada</strong></hi>} />      

        </Routes>
        <Footer />
        </BrowserRouter>
    </DataProvider>      
   
  );
}

export default App;
