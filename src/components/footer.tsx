import React, { useState } from 'react';
import { Tagline } from '../tagline';

type FooterLinkType = {
  name: string,
  url: URL
}

const links: FooterLinkType[] = [
  {
    name: 'Facebook',
    url: new URL('https://www.facebook.com/St.PhillipsMBC')
  },
  {
    name: 'YouTube',
    url: new URL('https://www.youtube.com/channel/UChKql4EVoCgSpWNSwqhxOsA')
  }
]

const FooterLink = ({ link }: { link: FooterLinkType }) => {
  const [ underline, setUnderline ] = useState<boolean>(false);

  const hover = () => setUnderline(true);
  const leave = () => setUnderline(false);

  return (
    <a 
      href={link.url.toString()}
      onMouseEnter={hover}
      onMouseLeave={leave}
      style={{
        textDecoration: underline ? 'underline' : 'none' ,
        color: 'white',
        fontSize: '1.15em'
      }}
    >
      {link.name}
    </a>
  )
}

const Footer = () => {
  return (
    <footer
      style={{
        width: '100%',
        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(80, 9, 9, 1))',
        height: '5em',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        position: 'absolute',
        justifyContent: 'space-between',
        bottom: 0,
        left: 0,
        padding: '0.25%'
      }}
    >
      <div style={{ display: 'flex', gap: '1em' }}>
        {links.map((link) => <FooterLink link={link} />)}
      </div>
      <Tagline />
    </footer>
  );
}

export default Footer;