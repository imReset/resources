import Link from 'next/link';
import React from 'react';
import { FaSpotify } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import { AiFillGithub } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>School Resources</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Resources</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Other Sites</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/imReset" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://open.spotify.com/user/nvgqxbuhezr20knmu7pupbgee" target="_blank"> 
          <FaSpotify size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://discord.com/users/511326053533351963" target="_blank">
          <SiDiscord size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;