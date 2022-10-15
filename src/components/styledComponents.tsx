import { Container, Form } from 'react-bootstrap';
import styled from 'styled-components';

export const Header = styled.h1`
  font-size: 2em;
  text-align: center;
  line-height: normal;
`

export const Divide = styled.hr<{ width: string | number} >`
  border: 0.3em solid #707070;
  width: ${props => props.width};
  opacity: 1;
  border-radius: 100vw;
`

export const ShadowBox = styled(Container)`
  background-color: rgba(71, 71, 71, 0.39);
`

export const SPFormGroup = styled(Form.Group)`
  text-align: left;
  margin: 0px 0px 1em;
`