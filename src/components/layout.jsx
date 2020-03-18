import React from 'react';
import PropTypes from 'prop-types';

import '../styles/style.css';

function Layout({ children }) {
  return (
    <main className="relative z-10 flex flex-col h-screen items-center justify-center">
      {children}
    </main>
  );
}

export default Layout;

Layout.propTypes = { children: PropTypes.node.isRequired };
