import React from 'react';

import { Container, Grid } from './styles';

import Product from '../../components/Product';
import Header from '../../components/Header';
import Products from '../../products.json';

const Home = () => (
  <>
    <Header />
    <Container>
      <h1>Todos os Produtos</h1>
      <Grid>
        {Products.data.map((product) => (
          <Product product={product} />
        ))}
      </Grid>
    </Container>
  </>
);

export default Home;
