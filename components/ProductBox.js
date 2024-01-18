import styled from 'styled-components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@/components/Button';
import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from '@/components/CartContext';

const ProductWrapper = styled.div`
  margin-bottom: 6rem;
  background-color: lightgrey;
  border-radius: 10px;
`;

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: 10px;
  img {
    max-width: 100%;
    max-height: 100px;
  }
`;

const Title = styled(Link)`
  font-weight: bold;
  font-size: 1rem;
  color: inherit;
  text-decoration: none;
  margin: 0;
  display: flex;
`;

const ProductInfoBox = styled.div`
  margin-top: 12px;
  padding: 8px;
  display: flex;
  color: black;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const PriceRow = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 5px;
  }
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`;

const Price = styled.div`
  font-size: 0.8rem;
  font-weight: 400;
  margin-top: 6px;
  margin-bottom: 6px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    font-weight: 600;
    text-align: left;
  }
`;

export default function ProductBox({ _id, title, description, price, images }) {
  const { addProduct } = useContext(CartContext);
  const url = '/product/' + _id;

  const handleAddToCart = () => {
    addProduct(_id);
    toast.success(`${title} added to cart!`, {
      position: 'bottom-right',
      autoClose: 3000, 
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <div>
          <img src={images?.[0]} alt="" />
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
          <Price>${price}</Price>
        </PriceRow>
        <Button block onClick={handleAddToCart} primary outline>
          Add to cart
        </Button>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
