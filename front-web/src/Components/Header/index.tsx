import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg'
import './styles.css';

const Header = () => (
    <header className="main-header">
      
      <Link to="/">
           <Logo />
      </Link>
      
      <Link to="/">

        <div className="logo-text">
              <span className="logo-text-1">Big Game</span>
              <span className="logo-text-2"> Survey</span>
        </div>
      </Link>
      <div className="owner-text">
        <span className="text-owner">By Denis</span>
        </div>
    </header>
);

export default Header; 