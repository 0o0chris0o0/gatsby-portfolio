import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Nav = styled.nav`
  a {
    display: block;
    backface-visibility: hidden;
    transition: all 0.3s ease-in-out;

    &:before {
      content: '>';
      margin-right: 5px;
    }

    &:hover {
      transform: translateX(4px);
      color: #bad455;
    }
  }
`;

export default function Navigation() {
  return (
    <Nav className="my-5">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </Nav>
  );
}
