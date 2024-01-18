import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
const StyledFooter = styled.footer`
  background-color: #222;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem 0;
  position:static
`;
const Wrapper = styled.div`
color:#fff;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;
const Section = styled.div`
color:#fff;
display:flex;
flex-direction:column;
flex-wrap: wrap;
  margin-bottom: 20px;
`;
const SectionTitle = styled.h4`
color:#fff;
  font-size: 1.2rem;
  margin-bottom: 10px;
  // color: #333;
`;
const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  a {
    text-decoration: none;
    color: white; /* Set your preferred color for the social icons */
  }
  a:hover {
    color: #0056B3; /* Set your preferred color for the social icons on hover */
  }
`;
const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 5px 0;
  display: block;
  &:hover {
    color: #007BFF; /* Change to your preferred hover color */
  }
`;
const SubscriptionForm = styled.form`
  display: flex;
  flex-wrap:wrap;
  gap: 10px;
  margin-bottom: 20px;
`;
const EmailInput = styled.input`
  padding: 8px;
  width: 200px;
  border-radius:10px;
`;
const SubscribeButton = styled.button`
  background-color: #007BFF;
  color: #fff;
  border: none;
  padding: 8px 15px;
  cursor: pointer;
  border-radius:10px;
  &:hover {
    background-color: #0056B3;
  }
`;

const Footer = () => {
  return (
    <div style={{position: 'static', bottom: 0}}>
      <StyledFooter>
      <Center>
        <Wrapper>
          
          <Section>
            <SectionTitle>Quick Links</SectionTitle>
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/products">Products</FooterLink>
            {/* <FooterLink href="/categories">Categories</FooterLink>
            <FooterLink href="/account">Account</FooterLink> */}
          </Section>

          <Section>
            <SectionTitle>Newsletter</SectionTitle>
            <p>Subscribe to our newsletter for updates</p>
            <SubscriptionForm>
              <EmailInput type="email" placeholder="Your email" />
              <SubscribeButton type="submit">Subscribe</SubscribeButton>
            </SubscriptionForm>
          </Section>

          <Section>
            <SectionTitle>Connect With Us</SectionTitle>
            <SocialIcons>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </SocialIcons>
          </Section>

        </Wrapper>
      </Center>
    </StyledFooter>
    </div>
  )
}

export default Footer


