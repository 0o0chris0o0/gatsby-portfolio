import React from 'react';
import PropTypes from 'prop-types';

import '../styles/style.css';

import SideBar from './Sidebar';

function Layout({ children }) {
  return (
    <main className="relative z-10 flex min-h-screen bg-offWhite">
      <div className="w-1/3 p-10">
        <SideBar />
      </div>
      <div className="w-2/3">{children}</div>
    </main>
  );
}

export default Layout;

Layout.propTypes = { children: PropTypes.node.isRequired };
