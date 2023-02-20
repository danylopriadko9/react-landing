import React from 'react';
import {
  FooterContainer,
  FooterLink,
  FooterLinksContainer,
  FooterLinksItem,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from './FooterElements';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Footer: React.FC = (): JSX.Element => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItem>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to='/signin'>How it works</FooterLink>
              <FooterLink to='/signin'>Testimonials</FooterLink>
              <FooterLink to='/signin'>Careers</FooterLink>
              <FooterLink to='/signin'>Investors</FooterLink>
              <FooterLink to='/signin'>Terms of Service</FooterLink>
            </FooterLinksItem>
            <FooterLinksItem>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to='/signin'>Submit Video</FooterLink>
              <FooterLink to='/signin'>Ambassadors</FooterLink>
              <FooterLink to='/signin'>Agency</FooterLink>
              <FooterLink to='/signin'>Influencer</FooterLink>
            </FooterLinksItem>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinksItem>
              <FooterLinkTitle>Cotact Us</FooterLinkTitle>
              <FooterLink to='/signin'>Cotact</FooterLink>
              <FooterLink to='/signin'>Support</FooterLink>
              <FooterLink to='/signin'>Destinations</FooterLink>
              <FooterLink to='/signin'>Sponsorships</FooterLink>
            </FooterLinksItem>
            <FooterLinksItem>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to='/signin'>Instagram</FooterLink>
              <FooterLink to='/signin'>Facebook</FooterLink>
              <FooterLink to='/signin'>Youtube</FooterLink>
              <FooterLink to='/signin'>Twitter</FooterLink>
            </FooterLinksItem>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo onClick={toggleHome} to='/'>
              dolla
            </SocialLogo>
            <WebsiteRights>
              dolla © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
