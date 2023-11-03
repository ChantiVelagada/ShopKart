import { useEffect, useState } from 'react';
import AppContext from './AppContext';
import toast from 'react-hot-toast';

export default function AppState({children}) {

    let [cartItems, setCartItems] = useState([]);
    let [result, setResult] = useState(4)

    let addProductToCart = (product) => {
        // setCartItems([...cartItems, product])

        const existingProducts = cartItems.find(p => p.id === product.id);

        if(existingProducts) {
          const updatedCart = cartItems.map(p => p.id === product.id ? {...p, quantity: +p.quantity + 1} : p);

          setCartItems(updatedCart)
          
        }else {
            setCartItems([...cartItems, {...product, quantity:1}])  
        }

        toast.success('Product Added to Cart')

        
    }

    let handleQunatityChange = (productId, newQuantity) => {
        const updatedCart = cartItems.map((product) => product.id === productId ? {...product,quantity:newQuantity} : product )

        setCartItems(updatedCart)

        let total_price = cartItems.reduce((total,item) => {
            return total += (item.price)*(item.quantity)
        },0)

        setResult(total_price)
    }

    useEffect(() => {
        handleQunatityChange()
    },[cartItems])



    console.log(cartItems)

    let removeProductFromCart = (product) => {
        let updatedCartItems = cartItems.filter((item) => {
            return item.id !== product.id
        })

        setCartItems(updatedCartItems)
        toast.success('Item Removed From Cart')
    }

    return(
        <AppContext.Provider value={{cartItems,result,addProductToCart, removeProductFromCart, handleQunatityChange}}>
            {children}
        </AppContext.Provider>
    )
}
