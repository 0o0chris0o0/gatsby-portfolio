import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Navigation from './Navigation';

import EmailIcon from '../images/email.svg';
import LinkedIcon from '../images/linkedin.svg';
import GithubIcon from '../images/github.svg';

const StyledPara = styled.div`
  p {
    margin: 0.5rem 0;
  }
`;

export default function Sidebar() {
  const data = useStaticQuery(graphql`
    query sidebarQuery {
      datoCmsSidebar {
        title
        introNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `);
  const cms = data.datoCmsSidebar;

  const Icons = [
    {
      id: 1,
      alt: 'Linked In',
      link: 'https://www.linkedin.com/in/cmart91',
      img: LinkedIcon
    },
    {
      id: 2,
      alt: 'Github',
      link: 'https://github.com/0o0chris0o0',
      img: GithubIcon
    },
    {
      id: 3,
      alt: 'Email',
      link: 'mailto:chrismartin5691@gmail.com',
      img: EmailIcon
    }
  ];

  return (
    <>
      <h1 className="text-lg mb-5">{cms.title}</h1>
      <StyledPara
        className="text-gray-600 font-light"
        dangerouslySetInnerHTML={{ __html: cms.introNode.childMarkdownRemark.html }}
      />
      {/* <Navigation /> */}
      <ul className="flex items-center -ml-1 mt-5">
        {Icons.map(({ id, alt, link, img }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer">
            <li className="rounded-full border border-solid border-gray-500 p-3 mx-1">
              <img src={img} className="w-5 h-5" alt={alt} />
            </li>
          </a>
        ))}
      </ul>
    </>
  );
}
