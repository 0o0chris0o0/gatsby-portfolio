import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';

const StyledPara = styled.div`
  p {
    margin: 0.5rem 0;
  }
`;

export default function Index({ data }) {
  const cms = data.allDatoCmsWork.nodes;
  return (
    <Layout>
      <div className="my-auto text-center font-light p-10">
        <div className="grid grid-cols-3 gap-4">
          {cms.map(item => (
            <div key={item.slug}>
              <div className="shadow-md hover:shadow-none transform hover:translate-y-1 transition duration-500">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <div
                    className="w-full h-64"
                    style={{
                      backgroundImage: `url("${item.thumbnail.url}")`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  <div className="bg-white py-3 px-4 text-left">
                    <strong>{item.title}</strong>
                    <StyledPara
                      className="text-sm"
                      dangerouslySetInnerHTML={{
                        __html: item.introDescriptionNode.childMarkdownRemark.html
                      }}
                    />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query HomeQuery {
    allDatoCmsWork {
      nodes {
        id
        title
        slug
        link
        introDescriptionNode {
          childMarkdownRemark {
            html
          }
        }
        thumbnail {
          url
        }
      }
    }
  }
`;
