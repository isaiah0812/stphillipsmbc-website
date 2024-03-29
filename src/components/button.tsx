import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

type ButtonProps = {
  text: string;
  onClick?: () => any;
  width?: string | number;
  href?: string | URL;
  style?: React.CSSProperties;
  anchor?: boolean,
  submit?: boolean
}

type ButtonTempProps = {
  props: ButtonProps
}

const ButtonTemp = (buttonProps: ButtonTempProps) => {
  const { props } = buttonProps;
  
  const [color, setColor] = useState('white');
  const [bgColor, setBgColor] = useState('transparent');

  const hover = () => {
    setColor('#9A9004');
    setBgColor('white');
  }
  const leave = () => {
    setColor('white');
    setBgColor('transparent')
  }

  return (
    <Button
      onClick={props.onClick}
      onMouseEnter={hover}
      onMouseLeave={leave}
      type={props.submit ? 'submit' : 'button'}
      style={{ 
        borderWidth: 5,
        borderStyle: 'solid',
        borderColor: 'white',
        borderRadius: 0,
        color: color,
        backgroundColor: bgColor,
        width: props.width ? props.width : '100%',
        fontSize: '1.5em',
        ...props.style,
      }}>
      {props.text}
    </Button>
  )
}

export const SPButton = (props: ButtonProps) => {
  // If href is included, it makes the button a link. Either way it is passed
  // to ButtonTemp, which is the styled Button seen on screen.
  return props.href ? (
    props.anchor ? (
      <a href={props.href.toString()} style={{...props.style}}>
        <ButtonTemp props={{...props}} />
      </a>
    ) : (
      <Link to={props.href} style={{...props.style}}>
        <ButtonTemp props={{...props}}
        />
      </Link>
    )
  ) : (
    <ButtonTemp props={props} />
  )
}