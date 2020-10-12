import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px 0;
`;

export const Menu = styled.div`
    display: flex;
    align-items: center;
`;

export const MenuItem = styled.span`
    margin: 0 10px;

    &.bars {
      display: none;
      svg {
        height: 40px;
        width: 40px;
      }
    }

    a {
        text-decoration: none;
        text-transform: uppercase;
        color: #000;
        font-weight: bold;
        font-size: 16px;
    }

    @media(max-width: 600px) {
      display: none;
      &:first-child {
        display: block;
      }
      &.bars {
        display: block;
      }
    }
`;

export const IconItem = styled.div`
  display: inline-block;
    margin: 0 5px;

    a {
        color: black;
        text-decoration: none;
    }
`;

export const Badge = styled.div`
  display: inline-block;
  width: 20px;
  line-height: 15px;
  text-align: center;
  vertical-align: middle;
  border-radius: 50%;
  color: #fff;
  background: #f00;
`;
