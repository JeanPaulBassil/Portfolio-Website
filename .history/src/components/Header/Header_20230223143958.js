import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span} from './HeaderStyles';

export default function Header() {
  const navNames = ['Projects', 'Technologies', 'About'];
  const navBar = navNames.map(name => {
    return (
      <li>
        <Link href={`#${name.toLowerCase()}`}>
          <NavLink>{name}</NavLink>
        </Link>
      </li>
    )
  })

  const socialNames = [
    {
      icon: <AiFillGithub size="3rem"/>,
      link: 'https://github.com/JeanPaulBassil'
    },
    {
      icon: <AiFillLinkedin size="3rem"/>,
      link: 'https://www.linkedin.com/in/jean-paul-bassil/'
    },
    {
      icon: <AiFillInstagram size= '3rem'/>,
      link: 'https://www.instagram.com/jayp.dev/'
    }
  ]

  const socialIcons = socialNames.map(link => {
    return (
      <SocialIcons href={link.link}>
        {link.icon}
      </SocialIcons>
    )
  })
  
  return (
    <Container>
    <Div1>
      <Link href="/">
      <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20px'}}>
        <DiCssdeck  size="3rem"/>
        <Span>Portfolio</Span>
      </a>
      </Link>
    </Div1>
    <Div2>
      {navBar}
    </Div2>
    <Div3>
      {socialIcons}
    </Div3>
  </Container>
);
};

