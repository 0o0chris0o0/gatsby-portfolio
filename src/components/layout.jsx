import React from 'react';
import PropTypes from 'prop-types';

import '../styles/style.css';

import SideBar from './Sidebar';

function Layout({ children }) {
  return (
    <main className="relative z-10 flex flex-col md:flex-row min-h-screen bg-offWhite">
      <div className="w-full md:w-1/3 p-8 md:p-10">
        <SideBar />
      </div>
      <div className="w-full md:w-2/3">{children}</div>
    </main>
  );
}

export default Layout;

Layout.propTypes = { children: PropTypes.node.isRequired };
