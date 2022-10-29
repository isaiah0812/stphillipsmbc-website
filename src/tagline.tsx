import { useState, useRef } from 'react';

export const Tagline = ({ dark }: { dark?: boolean }): React.ReactElement => {
  const [ highlight, setHighlight ] = useState<boolean>(false);
  const tagText = useRef<HTMLSpanElement>(null)

  const hover = () => setHighlight(true);
  const leave = () => setHighlight(false);

  const colors = dark ? {
    bg: 'linear-gradient(to left, transparent, transparent 50%, rgb(4, 11, 48) 50%, rgb(4, 11, 48))',
    color: 'white'
  } : {
    bg: 'linear-gradient(to left, transparent, transparent 50%, white 50%, white)',
    color: 'rgb(4, 11, 48)'
  }

  return (
    <a
      href="https://www.zaemakeswebsites.com"
      onMouseEnter={hover}
      onMouseLeave={leave}
      onClick={leave}
      style={{
        textDecoration: 'none',
        padding: highlight ? '0.2em 0.5em' : '0.2em 0',
        borderRadius: highlight ? '50em' : 0,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'flex-end',
        lineHeight: 'normal',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        backgroundImage: colors.bg,
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
          color: highlight ? colors.color : 'transparent',
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