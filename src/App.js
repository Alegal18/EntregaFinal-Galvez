import NavBar from "./component/NavBar";
import ItemListContainer from "./component/ItemListContainer";
import Footer from "./component/Footer";
import ItemDetailContainer from "./component/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {  
  
  return (
    <>
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/itemList" element={<ItemListContainer />} />
        <Route path="/producto/:idItem" element={<ItemDetailContainer />} />
        <Route path="/categoria" element={<ItemDetailContainer />} />
        <Route path="*" element={<hi><strong>Error 404, Pagina no encontrada</strong></hi>} />      

      </Routes>
      <Footer />
      </BrowserRouter>
    </>
      
   
  );
}

export default App;
