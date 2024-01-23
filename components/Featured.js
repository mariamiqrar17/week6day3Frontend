import Center from "@/components/Center";
import styled from "styled-components";
import Button from "@/components/Button";
import ButtonLink from "@/components/ButtonLink";
import CartIcon from "@/components/icons/CartIcon";
import {useContext} from "react";
import {CartContext} from "@/components/CartContext";
import { FaShoppingCart } from "react-icons/fa";

const Bg = styled.div`
  background-color: #222;
  color:#fff;
  // padding: 50px 0;
  padding: 3.3rem;
`;
const Title = styled.h1`
  margin:0;
  font-weight:normal;
  font-size:1.5rem;
  @media screen and (min-width: 768px) {
    font-size:2rem;
  }
`;
const Desc = styled.p`
  color:#aaa;
  font-size:1rem;
`;
const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  img{
    max-width: 100%;
    
    display: block;
    margin: 0 auto;
  }
  div:nth-child(1) {
    order: 2;
  }
  @media screen and (min-width: 768px) {
    
    grid-template-columns: 1.1fr 0.9fr;
    div:nth-child(1) {
      order: 0;
    }
    img{
      max-width: 100%;
      max-height: 300px;
    }
  }
  @media screen and (max-width: 376px) {
    img{
      max-height: 200px;
    }
  }
`;
const Column = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  gap:10px;
  margin-top:25px;
`;

export default function Featured({product}) {
  const {addProduct} = useContext(CartContext);
  function addFeaturedToCart() {
    addProduct(product._id);
  }
  return (
  
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              {/* <Title>{product?.title}</Title> */}
              <Title>Lenovo IdeaPad</Title>
              {/* <Desc>{product?.description}</Desc> */}
              <Desc>Lenovo IdeaPad 1 15AMN7 Laptop - AMD Ryzen 3 7320U - 4GB DDR5 -
                256GB SSD - Radeon 610M Graphics - 15.6" HD Display.</Desc>
                <ButtonsWrapper>
                <ButtonLink
                  href={'/product/' + (product && product._id)}
                  outline={1}
                  white={1}
                >
                  Read more
                </ButtonLink>
                <Button white onClick={addFeaturedToCart}>
                  <CartIcon />
                  Add to cart
                </Button>
              </ButtonsWrapper>
            </div>
          </Column>
          <Column>
          <img src="https://dawid-next-ecommerce.s3.amazonaws.com/1679151719649.png" alt="" />          </Column>
        </ColumnsWrapper>
      </Center>

    </Bg>
  );
}