import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

export default function Header() {
  const linkNames = ['Projects', 'Technologies', 'About'];
  const links = linkNames.map(name => {
    return (
      <li>
        <Link href={`#${name.toLowerCase()}`}>
          <NavLink>name</NavLink>
        </Link>
      </li>
    )
  })
  
  return (
    <Container>
    <Div1>
      <Link href="/">
      <a style={{ display: "flex", alignItems: "center", color: "white"}}>
        <DiCssdeck  size="3rem"/>
        <span>Portfolio</span>
      </a>
      </Link>
    </Div1>
    <Div2>
      {links}
    </Div2>
  </Container>
);
};

