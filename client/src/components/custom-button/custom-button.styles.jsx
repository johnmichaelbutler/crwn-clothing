import styled, {css} from 'styled-components';

const buttonStyles = css `
  background-color: black;
  color: white;
  border: none;
  @media screen and (max-width: 800px) {
    font-size: 13px;

  }

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

// A function that determines the style of our button. If it is google button, apply
// google styles. If it is inverted, apply inveted styles or else, generic buttonStyles
const getButtonStyles = props => {
  if(props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
}

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  @media screen and (max-width: 800px) {
    font-size: 13px;
  }

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const CustomButtonContainer = styled.button `
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 15px;
  padding: 0 25px;
  font-size: 14px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}

`
