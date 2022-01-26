import React from 'react';
import { AiFillGithub} from 'react-icons/ai';

import { FaSpotify } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Visit the old version</LinkTitle>
          <LinkItem href="https://schoolresources.netlify.app/">Here</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:rankios12@gmail.com">
            rankios12@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Copyright &copy; 2022 Reset</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/imReset">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://open.spotify.com/user/nvgqxbuhezr20knmu7pupbgee">
            <FaSpotify size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://discord.com/users/511326053533351963">
            <SiDiscord size="3rem"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
