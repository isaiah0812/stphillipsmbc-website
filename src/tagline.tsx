import { useState } from 'react';

export const Tagline = () => {
  const [ underline, setUnderline ] = useState<boolean>(false);

  const hover = () => setUnderline(true);
  const leave = () => setUnderline(false);

  return (
    <a 
      href="https://www.zaemakeswebsites.com"
      onMouseEnter={hover}
      onMouseLeave={leave}
      style={{
        borderBottom: underline ? '1px solid white' : 0,
        textDecoration: 'none',
        color: 'white',
        padding: 1,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'flex-end',
        lineHeight: 'normal'
      }}
    >
      <img 
        src="https://res.cloudinary.com/zaemadethis/image/upload/v1666154829/branding/IBLogo.png"
        alt="Isaiah Bullard's logo"
        style={{
          width: '2.5ch',
          height: 'auto',
          margin: '0px 5px 0px 0px'
        }}
      />
      Yes, Zae made this website.
    </a>
  );
}