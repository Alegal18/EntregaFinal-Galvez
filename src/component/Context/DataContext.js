import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

export const dataContext = createContext();
// Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBLJcebbcRdWcOgXMfWmjiJb705PBRgfEo",
    authDomain: "moto-store-reactjs.firebaseapp.com",
    projectId: "moto-store-reactjs",
    storageBucket: "moto-store-reactjs.appspot.com",
    messagingSenderId: "549067928369",
    appId: "1:549067928369:web:d84269e0646021579c3610"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)

  export async function createOrder(orderData) {
    const collectionRef = collection(db, "orders")

    const respuesta = await addDoc(collectionRef, orderData)
    console.log(respuesta.id)    
    return respuesta.id
  }


const DataProvider = ({children}) => {

    const [data, setData] = useState([])
    const [cart, setCart] = useState([])
        
    useEffect(() => {
        const getCollectionProducts = async () => {
            const productCollectionRef = collection(db, 'productos')
            let snapshotproducts = await getDocs(productCollectionRef)
            const documents = snapshotproducts.docs    
            const dataProducts = documents.map( document => {    
            const product = document.data()
            product.id = document.id;
            return product;    
            })
            setData(dataProducts);
          }
        
        getCollectionProducts()
    }, [])

    const agregarAlCarrito = (singleProducts) => {
        const productoRepetido = cart.find((item) => item.id === singleProducts.id);
        if(productoRepetido){
          setCart(cart.map((item)=> item.id === singleProducts.id ? {...singleProducts, cantidad: productoRepetido.cantidad + 1} : item));
        } else {
          setCart([...cart, singleProducts])
        }    
      }

    return (
        <dataContext.Provider value={{data, cart, setCart, agregarAlCarrito, createOrder}}>{children}</dataContext.Provider>
    )
}

export default DataProvider;