import {createGlobalStyle} from "styled-components";
import {CartContextProvider} from "@/components/CartContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  body{
    background-color: #eee;
    
    font-family: 'Poppins', sans-serif;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <CartContextProvider>
        <ToastContainer />
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  );
}
