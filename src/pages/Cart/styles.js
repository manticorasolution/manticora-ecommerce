/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-gap: 15px;
  margin-top: 50px;

  @media(max-width: 600px) {
    grid-template-columns: 1fr;
  }

  > section {
    > h1 {
      margin-bottom: 15px;
    }

    > div {
      margin-top: 10px;
    }
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  tr {
    &:first-child {
      border-bottom: 1px solid black;
      font-weight: bold;
    }

    &:last-child {
      border-bottom: 1px solid black;
    }
  }

  .change-quantity {
      display: inline-block;
      margin: 0 5px;
      border: none;
      height: 25px;
      width: 25px;
      background: #fff;
      color: #000;
      border-radius: 50%;
    }

    > section > div {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;

      a {
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 16px;
        color: black;
        align-items: center;


        svg {
          margin-right: 10px;
        }
      }
    }

    > aside {
      > section {
        display: flex;
        flex-direction: column;
        background: #f7f7f7;
        border-radius: 6px;
        padding: 20px;
        margin-bottom: 20px;

        h1 {
          font-size: 30px;
          margin-bottom: 30px;
        }

        > button {
          margin: 20px 0;
          padding: 10px;
          border-radius: 10px;
          background: #243aff;
          color: white;
          font-size: 18px;
          font-weight: bold;
          text-transform: uppercase;
          text-align: center;
          border: none;
        }

        > small {
          font-size: 12px;
          font-weight: bold;
          color: #888;
        }

        > img {
          margin-top: 15px;
          max-width: 85px;
        }

        form {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          label {
            display: flex;
            flex-direction: column;
            margin-bottom: 20px;

            span {
              font-size: 12px;
              font-weight: bold;
              color: #888;
            }

            input {
              background: transparent;
              border: 0;
              border-bottom: 1px solid #474747;
              font-size: 12px;
              color: #000;
              padding: 5px 0;

              &:focus {
                border-color: #5e70ff;
              }
            }
          }
        }

        &.delivery {
          label {
            &:nth-child(1) {
              width: calc(80% - 10px);
              margin-right: 10px;
            }
            &:nth-child(2) {
              width: 20%;
            }
            &:nth-child(3), &:nth-child(4) {
              width: calc(33% - 10px);
              margin-right: 10px;
            }

            &:nth-child(5) {
              width: 33%;
            }

            &:nth-child(6) {
              width: calc(50% - 10px);
              margin-right: 10px;
            }

            &:nth-child(7) {
              width: 50%;
            }
          }
        }

        &.payment {
          label {
            width: 100%;
            margin-bottom: 5px;
            display: flex;
            align-items: center;
            justify-content: center;

            input {
              margin-right: 5px;
            }
            span {
              margin-left: 5px;

            }
          }
          > small {
            margin-top: 5px;
          }
        }
      }
    }
`;

export const Product = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  small {
    &:first-child {
      font-weight: bold;
      font-size: 14px;
    }
  }

  img {
      max-height: 100px;
    }
`;

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3px;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    &:nth-child(1), &:nth-child(2)  {
      span {
        &:first-child {
          margin-right: 75px;
       }
        &:nth-child(1) {
          color: #B7B7B7;
          font-size: 12px;
        }

        &:nth-child(2) {
          color: #B7B7B7;
          font-size: 16px;
          font-weight: bold;
        }
      }
    }
    &:nth-child(3)  {
      padding-top: 10px;
      border-top: 1px solid #000;
      span {
        &:first-child {
          margin-right: 75px;
       }
        &:nth-child(1) {
          color: #000;
          font-size: 16px;
          font-weight: bold;

        }
        &:nth-child(2) {
          color: #000;
          font-size: 16px;
          font-weight: bold;
        }
      }
    }
  }

  span {
    display: block;
    margin-bottom: 15px;
  }
`;
