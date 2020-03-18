import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

export default function Index({ data }) {
  const cms = data.datoCmsGlobal;
  return (
    <Layout>
      <div className="my-auto text-center font-light">
        <h1 className="text-6xl">{cms.title}</h1>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query HomeQuery {
    datoCmsGlobal {
      title
    }
  }
`;
