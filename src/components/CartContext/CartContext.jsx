import { useState, createContext } from 'react';

export const CartContext = createContext();

const CartContextProvider = props => {
  const { children } = props;

  const [cartList, setCartList] = useState([]);

  const addItem = (product, quantity) => {
    const foundProd = cartList.find(prod => prod.id === product.id);

    if (foundProd) {
      foundProd.amount += quantity;
      setCartList(cartList);
    } else {
      setCartList([
        ...cartList,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          amount: quantity,
          image: product.image,
        },
      ]);
    }
  };

  const removeItem = productId => {
    const result = cartList.filter(prod => prod.id !== productId);
    setCartList(result);
    console.log(cartList);
  };

  const clear = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider value={{ cartList, addItem, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
