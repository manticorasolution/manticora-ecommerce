import React from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import {
  Container, Menu, MenuItem, IconItem, Badge,
} from './styles';

import Manticora from '../../assets/manticora-black.png';
import { useCart } from '../../contexts/cart';

const Header = () => {
  const { getQuantity } = useCart();

  return (
    <Container>
      <Menu>
        <MenuItem>
          <Link to="/">
            <img src={Manticora} alt="Manticora" height={75} />
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/">
            <span>Home</span>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/">
            <span>Produtos</span>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/">
            <span>Sobre</span>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/">
            <span>Contato</span>
          </Link>
        </MenuItem>

        <MenuItem className="bars">
          <FaBars />
        </MenuItem>

      </Menu>

      <Menu>
        <IconItem>
          <Link to="/">
            <AiOutlineSearch size={20} />
          </Link>
        </IconItem>

        <IconItem>
          <Link to="/">
            <BsPerson size={20} />
          </Link>
        </IconItem>

        <IconItem>
          <Link to="/cart">
            <AiOutlineShoppingCart size={20} />
            <Badge>{getQuantity()}</Badge>
          </Link>
        </IconItem>
      </Menu>
    </Container>
  );
};

export default Header;
