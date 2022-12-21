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

  const calcTotalItemAmount = () => {
    let qty = 0;
    cartList.forEach(item => {
      qty += item.amount;
    });
    return qty;
  };

  const calcItemSubtotal = itemId => {
    const found = cartList.find(item => item.id === itemId);
    const subtotal = found.price * found.amount;
    return subtotal;
  };

  const calcSubtotal = () => {
    let total = 0;

    cartList.forEach(item => {
      total += calcItemSubtotal(item.id);
    });
    return total;
  };

  const calcTaxes = () => {
    const taxRate = 0.21;
    return Math.floor(calcSubtotal() * taxRate);
  };

  const calcTotal = () => {
    return calcSubtotal() + calcTaxes();
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addItem,
        removeItem,
        clear,
        calcTotalItemAmount,
        calcItemSubtotal,
        calcSubtotal,
        calcTaxes,
        calcTotal,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
