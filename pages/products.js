import { useState } from "react";
import Header from "@/components/Header";
import styled from "styled-components";
import Center from "@/components/Center";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";

const ToggleContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const ToggleButton = styled.button`
  padding: 10px;
  background-color: ${(props) => (props.active ? "#4CAF50" : "#ddd")};
  color: ${(props) => (props.active ? "white" : "black")};
  border: 1px solid #ccc;
  cursor: pointer;
`;

export default function ProductsPage({ products }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filterProducts = (category) => {
    if (category === "all") {
      return products;
    } else {
      return products.filter((product) => product.category.name === category);
    }
  };

  return (
    <>
      <Header />
      <Center>
        <Title>All Products</Title>
        <ToggleContainer>
          <ToggleButton
            active={activeCategory === "all"}
            onClick={() => setActiveCategory("all")}
          >
            All
          </ToggleButton>
          <ToggleButton
            active={activeCategory === "laptops"}
            onClick={() => setActiveCategory("laptops")}
          >
            Laptops
          </ToggleButton>

          <ToggleButton
            active={activeCategory === "mobiles"}
            onClick={() => setActiveCategory("mobiles")}
          >
            Mobiles
          </ToggleButton>

          <ToggleButton
            active={activeCategory === "watch"}
            onClick={() => setActiveCategory("watch")}
          >
            Watch
          </ToggleButton>
        </ToggleContainer>
        <ProductsGrid products={filterProducts(activeCategory)} />
      </Center>
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const products = await Product.find({}, null, { sort: { '_id': -1 } });
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
