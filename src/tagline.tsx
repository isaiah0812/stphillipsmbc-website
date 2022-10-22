import { useState, useRef } from 'react';

export const Tagline = () => {
  const [ highlight, setHighlight ] = useState<boolean>(false);
  const tagText = useRef<HTMLSpanElement>(null)

  const hover = () => setHighlight(true);
  const leave = () => setHighlight(false);

  return (
    <a 
      href="https://www.zaemakeswebsites.com"
      onMouseEnter={hover}
      onMouseLeave={leave}
      onClick={leave}
      style={{
        textDecoration: 'none',
        padding: '0.2em 0.5em',
        borderRadius: '50em',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'flex-end',
        lineHeight: 'normal',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        backgroundImage: 'linear-gradient(to left, transparent, transparent 50%, white 50%, white)',
        backgroundPosition: highlight ? '0 0' : '100% 0',
        backgroundSize: '200% 100%',
        WebkitBackgroundSize: '200% 100%',
        transition: 'all 0.5s, color 0.5s ease-in-out 0.5s',
        WebkitTransition: 'all 0.5s, color 0.5s ease-in-out 0.5s',
        MozTransition: 'all 0.5s, color 0.5s ease-in-out 0.5s'
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
      <span
        ref={tagText}
        style={{
          fontFamily: 'Incosolata, monospace',
          color: highlight ? 'black': 'transparent',
          opacity: highlight ? 1 : 0,
          maxWidth: highlight ? tagText.current!.scrollWidth : 0,
          transition: 'all 0.5s, color 0.5s ease-in-out 0.5s',
          WebkitTransition: 'all 0.5s, color 0.5s ease-in-out 0.5s',
          MozTransition: 'all 0.5s, color 0.5s ease-in-out 0.5s'
        }}
      >
        Yes, Zae made this website.
      </span>
    </a>
  );
}