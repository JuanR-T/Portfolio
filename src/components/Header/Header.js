import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
    <Container>
        <Div1>
            <Link href="/">

              <a style ={{ display : "flex", alignItems :"center", color: 'whitesmoke', marginBottom: '15px'}}>
                  <DiCssdeck size="3rem"/> <Span>Portfolio</Span>
              </a>

            </Link>
        </Div1>

        <Div2>

          <li>
            <Link href="#projets">
              <NavLink>Projets</NavLink>
            </Link>
          </li>

          <li>
            <Link href="#competences">
              <NavLink>Compétences</NavLink>
            </Link>
          </li>

          <li>
            <Link href="#apropos">
              <NavLink>A propos</NavLink>
            </Link>
          </li>

        </Div2>

        <Div3>

            <SocialIcons href="https://github.com/JuanR-T">
              <AiFillGithub size="3rem"/>
            </SocialIcons>

            <SocialIcons href="https://www.linkedin.com/in/juan-r-3699b51aa/">
              <AiFillLinkedin size="3rem"/>
            </SocialIcons>

        </Div3>
    </Container>
);

export default Header;
