import React from 'react';

import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { ImCross, ImArrowLeft2 } from 'react-icons/im';
import { AiOutlineCreditCard } from 'react-icons/ai';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { Container, Product, Total } from './styles';
import { useCart } from '../../contexts/cart';
import GetNet from '../../assets/getnet.png';

const Cart = () => {
  const {
    products, getProductInfo, changeQuantity, removeProduct, getTotalValue,
  } = useCart();

  return (
    <Container>
      <section>
        <h1>Carrinho de Compras</h1>
        <table>
          <tbody>
            <tr>
              <td>
                Produto
              </td>
              <td>
                Quantidade
              </td>
              <td>
                Total
              </td>
              <tc />
            </tr>

            {products.map((product) => {
              const { name, price, image } = getProductInfo(product.id);
              const { quantity } = product;
              return (
                <tr>
                  <td>
                    <Product>
                      <div>
                        <img src={image} alt={name} />
                      </div>
                      <div>
                        <small>{name}</small>
                        <br />
                        <small>Descrição</small>
                      </div>
                    </Product>

                  </td>
                  <td>
                    <button className="change-quantity" type="button" onClick={() => changeQuantity(product.id, 'remove')}>-</button>
                    {quantity}
                    <button className="change-quantity" type="button" onClick={() => changeQuantity(product.id, 'add')}>+</button>
                  </td>
                  <td>
                    {`R$ ${quantity * price},00`}
                  </td>
                  <td>
                    <ImCross onClick={() => removeProduct(product.id)} size={15} color="#7B7B7B" style={{ cursor: 'pointer' }} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div>
          <Link to="/">
            <ImArrowLeft2 />
            Continuar comprando
          </Link>
          <Total>
            {getTotalValue() > 0 && (
              <>
                <div>
                  <span>Subtotal</span>
                  <span>{`R$ ${getTotalValue()},00`}</span>
                </div>

                <div>
                  <span>Entrega</span>
                  <span>Gratuito</span>
                </div>

                <div>
                  <span>Total</span>
                  <span>{`R$ ${getTotalValue()},00`}</span>
                </div>
              </>
            )}

          </Total>
        </div>
      </section>

      <aside>
        <section className="delivery">
          <h1>Info. Entrega</h1>
          <form>
            <label htmlFor="address">
              <span>Endereço</span>
              <input id="address" type="text" />
            </label>

            <label htmlFor="number">
              <span>Número</span>
              <input id="number" type="number" />
            </label>

            <label htmlFor="neighborhood">
              <span>Bairro</span>
              <input id="neighborhood" type="text" />
            </label>

            <label htmlFor="city">
              <span>Cidade</span>
              <input id="city" type="text" />
            </label>

            <label htmlFor="state">
              <span>Estado</span>
              <input id="state" type="text" />
            </label>

            <label htmlFor="complement">
              <span>Complemento</span>
              <input id="complement" type="text" />
            </label>

            <label htmlFor="zipcode">
              <span>CEP</span>
              <input id="zipcode" type="text" />
            </label>
          </form>
        </section>

        <section className="payment">
          <h1>Info. Pagamento</h1>
          <form>
            <label htmlFor="credit" style={{ display: 'block' }}>
              <input id="credit" type="radio" value="Credit" name="method" />
              <AiOutlineCreditCard />
              <span>Cartão de Crédito</span>
            </label>

            <label htmlFor="money" style={{ display: 'block' }}>
              <input id="money" type="radio" value="Money" name="method" />
              <FaRegMoneyBillAlt />
              <span>Dinheiro</span>
            </label>

            {/* <label htmlFor="card-name">
              <span>Nome no cartão</span>
              <input id="card-name" type="text" />
            </label>

            <label htmlFor="card-number">
              <span>Número no cartão</span>
              <input id="card-number" type="text" pattern="[0-9]*" inputMode="numeric" />
            </label>

            <label htmlFor="card-valid-date">
              <span>Validade</span>
              <input id="card-valid-date" type="text" />
            </label>

            <label htmlFor="card-cvc">
              <span>CVC</span>
              <input id="card-cvc" type="text" pattern="[0-9]*" inputMode="numeric" />
            </label> */}
          </form>
          <button type="button" onClick={() => swal('Sucesso', 'Pedido realizado com sucesso!!', 'success')}>Fazer pedido</button>

          <small>
            *MANDAREMOS A MAQUININHA PARA VOCÊ EFETUAR O PAGAMENTO
            <br />
            <br />
            Pagamento seguro com
          </small>

          <img src={GetNet} alt="getnet" />
        </section>
      </aside>
    </Container>
  );
};

export default Cart;
