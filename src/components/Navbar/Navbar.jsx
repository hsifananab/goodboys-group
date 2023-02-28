import React from 'react';
import { navs } from '../../data/data';
import { Link } from 'react-scroll';

import './Navbar.scss';

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        {navs.map(n => (
          <li className="navbar__item" key={n.title}>
            <div></div>
            <Link
              to={n.path}
              smooth={true}
              duration={500}
              className="navbar__link"
            >
              {n.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
