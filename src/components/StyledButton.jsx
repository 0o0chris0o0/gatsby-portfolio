import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  border: 3px solid #fcbc79;
  background: ${props => (props.dark ? 'black' : 'white')};
  color: ${props => (props.dark ? 'white' : 'black')};
  width: 100%;
  line-height: 36px;
  font-size: 14px;
  text-transform: uppercase;
  ${props => props.additionalStyling};
`;

export default function StyledButton({ children, dark, additionalStyling }) {
  return (
    <Button dark={dark} additionalStyling={additionalStyling}>
      {children}
    </Button>
  );
}

StyledButton.defaultProps = { dark: false, additionalStyling: {} };

StyledButton.propTypes = {
  children: PropTypes.node.isRequired,
  dark: PropTypes.bool,
  additionalStyling: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
