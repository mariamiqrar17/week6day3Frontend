import styled from "styled-components";
import Button from "@/components/Button";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";
import { toast } from 'react-toastify';

const ProductWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
`;

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 200px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 10px; /* Optional: Add border-radius to the image */
  }
`;

const Title = styled(Link)`
  font-weight: bold;
  font-size: 1.05rem;
  color: inherit;
  text-decoration: none;
  margin: 10px 0 5px;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #007bff;
  }
`;

const ProductInfoBox = styled.div`
  padding: 15px;
  text-align: center;
`;

const PriceRow = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
  justify-content: space-between;
`;

const Price = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
`;

export default function ProductBox({ _id, title, description, price, images }) {
  const { addProduct } = useContext(CartContext);
  const url = "/product/" + _id;

  const handleAddToCart = (_id) => {
    addProduct(_id);
    toast.success(`${title} added to cart !`, {
      position: "top-right",
      autoClose: 2000, // Auto close the notification after 2 seconds
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };

  return (
    <>
      <ProductWrapper>
        <WhiteBox href={url}>
          <div>
            <img src={images?.[0]} alt="" />
          </div>
        </WhiteBox>
        <ProductInfoBox>
          <Title href={url}>{title}</Title>
          <Price>${price}</Price>
          <PriceRow>
            <Button
              block
              onClick={() => handleAddToCart(_id)}
              primary
              outline
            >
              Add to Cart
            </Button>
          </PriceRow>
        </ProductInfoBox>
      </ProductWrapper>
    </>
  );
}
