import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import {useContext, useState} from "react";
import {CartContext} from "@/components/CartContext";
import BarsIcon from "@/components/icons/Bars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";


import { FaShoppingCart } from "react-icons/fa";

const StyledHeader = styled.header`
  background-color: #222;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
const Logo = styled(Link)`
  color:white;
  font-size:1.35rem;
  text-decoration:none;
  position: relative;
  z-index: 3;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  // border:1px solid black
`;
const StyledNav = styled.nav`
  ${props => props.mobileNavActive ? `
    display: block;
    color: white;
  ` : `
    display: none;
  `}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #222;
  color:white;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;
const NavLink = styled(Link)`
  display: flex;
  color:white;
  text-decoration:none;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    padding:0;
  }
`;
const NavButton = styled.button`
  background-color: #222;
  width: 30px;
  height: 30px;
  border:0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default function Header() {
  const {cartProducts} = useContext(CartContext);
  const [mobileNavActive,setMobileNavActive] = useState(false);
  return (
    <StyledHeader className="">
      <Center>
        <Wrapper>
        <Logo href={"/"}>
            <FontAwesomeIcon icon={faShoppingBag} style={{ marginRight: "5px" }} />
            Gadget Zone
          </Logo>
            <StyledNav mobileNavActive={mobileNavActive}>
              <NavLink href={'/'}>Home</NavLink>
              <NavLink href={'/products'}>Products</NavLink>
              <NavLink href={'/cart'}><FaShoppingCart /> Cart <sup>({cartProducts.length})</sup> </NavLink>
            </StyledNav>
          <NavButton onClick={() => setMobileNavActive(prev => !prev)}>
            <BarsIcon />
          </NavButton>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}