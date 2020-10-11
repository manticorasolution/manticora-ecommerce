/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, {
  createContext, useState, useContext,
} from 'react';

import Products from '../products.json';

const CartContext = createContext({});

const CartProvider = ({ children }) => {
  const [products, setProdcuts] = useState([]);

  function addProduct(product_id) {
    setProdcuts([...products, {
      id: product_id,
      quantity: 1,
    }]);
  }

  function removeProduct(product_id) {
    setProdcuts(products.filter((product) => product.id !== product_id));
  }

  function getQuantity() {
    let count = 0;

    products.forEach((product) => { count += product.quantity; });

    return count;
  }

  function getQuantityByProductId(product_id) {
    const product = products.find((productFind) => productFind.id === product_id);

    if (!product) return 0;

    return product.quantity;
  }

  function addProductByQuantity(product_id, quantity) {
    const productExists = products.some((product) => product.id === product_id);
    const currentQuantity = getQuantityByProductId(product_id);

    if (currentQuantity === 0 && quantity > 0) { // não existe, cria
      setProdcuts([...products, {
        id: product_id,
        quantity,
      }]);
    } else if (currentQuantity + quantity > 0 && productExists) { // acrescenta a um que existe
      setProdcuts(products.map((productMap) => {
        if (productMap.id === product_id) {
          Object.assign(productMap, { id: product_id, quantity: productMap.quantity + quantity });
        }

        return productMap;
      }));
    } else if (currentQuantity + quantity <= 0 && productExists) { // remove se a quantidade de pontos ficar negativa
      removeProduct(product_id);
    }
  }

  function changeQuantity(product_id, operation) {
    const productExists = products.some((product) => product.id === product_id);
    if (operation === 'add') {
      if (productExists) {
        setProdcuts(products.map((productMap) => {
          if (productMap.id === product_id) {
            Object.assign(productMap, { id: product_id, quantity: productMap.quantity + 1 });
          }

          return productMap;
        }));
      } else {
        addProduct(product_id);
      }
    } else if (operation === 'remove') {
      if (productExists) {
        const product = products.find((productFind) => productFind.id === product_id);
        if (product.quantity === 1) {
          removeProduct(product_id);
        } else {
          setProdcuts(products.map((productMap) => {
            if (productMap.id === product_id) {
              Object.assign(productMap, { id: product_id, quantity: productMap.quantity - 1 });
            }

            return productMap;
          }));
        }
      }
    }
  }

  function getProductInfo(product_id) {
    return Products.data.find((product) => product.id === product_id);
  }

  function getTotalValue() {
    let total = 0;

    Products.data.forEach((productData) => {
      products.forEach((product) => {
        if (productData.id === product.id) {
          total += product.quantity * productData.price;
        }
      });
    });

    return total;
  }

  return (
    <CartContext.Provider
      value={{
        products,
        addProduct,
        removeProduct,
        getQuantity,
        getQuantityByProductId,
        changeQuantity,
        getProductInfo,
        getTotalValue,
        addProductByQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within an CartProvider.');
  }

  return context;
};

export { CartProvider, useCart };
