import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper style={{alignItems:"center"}}> 
      <LinkList>
        <LinkColumn>
          <LinkTitle>Téléphone</LinkTitle>
          <LinkItem href="tel : 06.24.90.86.00">06.24.90.86.00</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:juan.m13@hotmail.fr">Juan.m13@hotmail.fr</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
          "With infinite complacence people went to and fro over the earth about their 
          affairs, serene in the assurance of their dominion over this small 
          spinning fragment of solar driftwood which by chance or design man 
          has inherited out of the dark mystery of Time and Space".
          <br/>
          Orson Welles
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/JuanR-T">
            <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/juan-r-3699b51aa/">
            <AiFillLinkedin size="3rem"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
