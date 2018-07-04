import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';

import network from '../img/network.svg';
import nodes from '../img/nodes.svg';
import phone from '../img/phone.svg';

const Header = ({ siteTitle }) => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image site-logo">
            <img src={nodes} alt="Server nodes" />
            <img src={network} alt="Network" />
            <img src={phone} alt="Phone" />
            <figcaption>{ siteTitle }</figcaption>
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/hey">
          About
        </Link>
      </div>
      <div className="navbar-end">
        <a className="navbar-item" href="https://github.com/ninio/" target="_blank" rel="noopener noreferrer">
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
      </div>
    </div>
  </nav>
)

export default Header;
