import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #F5F5F5;
    padding: 10px;
`;

export const ProductHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductImage = styled.div`
  margin: 0 auto;
  img {
    height: 200px;
  }
`;

export const ProductFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Name = styled.span`
  font-size: 16px;
`;

export const Price = styled.span`
  color: #A5A5A5;
  font-size: 16px;
`;

export const AddCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;

  div {
    &:first-child {
      button {
        display: inline-block;
        margin: 0 5px;
        border: none;
        height: 25px;
        width: 25px;
        background: #fff;
        border-radius: 50%;
      }
      margin-bottom: 5px;
    }
    &:last-child {
      button {
        display: flex;
        margin: 0;
        font-size: 12px;
        border: none;
        align-items: center;
        background: transparent;
      }
    }
  }
`;
