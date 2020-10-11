/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { AiOutlineHeart } from 'react-icons/ai';
import { BiShoppingBag } from 'react-icons/bi';
import swal from 'sweetalert';
import { useCart } from '../../contexts/cart';
import {
  Container, ProductFooter, ProductHeader, ProductImage, ProductInfo, Name, Price, AddCart,
} from './styles';

const Product = ({
  product,
}) => {
  const { addProductByQuantity } = useCart();
  const [productQuantity, setProductQuantity] = useState(1);

  const handleChange = (op) => {
    if (op === 'add') {
      setProductQuantity(productQuantity + 1);
    } else {
      setProductQuantity(productQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    addProductByQuantity(product.id, productQuantity);

    swal('Sucesso', 'Itens foram adicionados com sucesso ao carrinho!!', 'success');
  };

  return (
    <Container>
      <ProductHeader>
        {product.isNew && <span>Novo</span>}
        <AiOutlineHeart size={25} />
      </ProductHeader>

      <ProductImage>
        <img src={product.image} alt={product.name} />
      </ProductImage>

      <ProductFooter>
        <ProductInfo>
          <Name>
            {product.name}
          </Name>
          <Price>
            {`R$ ${product.price},00`}
          </Price>
        </ProductInfo>

        <AddCart>
          <div>
            <button disabled={productQuantity <= 1} type="button" onClick={() => handleChange('remove')}>-</button>
            <span>{productQuantity}</span>
            <button type="button" onClick={() => handleChange('add')}>+</button>
          </div>
          <div>
            <button type="button" onClick={() => handleAddToCart()}>
              <BiShoppingBag size={25} />
              Adicionar ao carrrinho
            </button>
          </div>
        </AddCart>
      </ProductFooter>

    </Container>
  );
};

export default Product;
