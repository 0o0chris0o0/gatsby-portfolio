import React from 'react';
import { Link } from 'gatsby';

export default function Header() {
  return (
    <header>
      <div className="container mx-auto py-5">
        <ul className="flex justify-center font-light tracking-wider uppercase text-sm">
          <li className="px-3">
            <Link to="/details">Details</Link>
          </li>
          <li className="px-3">
            <Link to="/rsvp">RSVP</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
