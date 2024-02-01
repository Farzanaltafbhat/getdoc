import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import userImg from '../../assets/images/avatar-icon.png'
import logo from "../../assets/images/logo.png";
import Forproviders from './Forproviders';
import './Header.css';

const navLinks = [
  {
    path: '/doctors',
    display: 'Find Doctors'
  },
  {
    path: '/video',
    display: 'Video Consult'
  },
  {
    path: '/services',
    display: 'Lab Tests'
  },
  {
    path: '/contact',
    display: <Forproviders />,
  },
];

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          <Link to='/home'>
            <div className='image'>
              <img className='logo-icon' src={logo} alt='Icon'/>
            </div>
          </Link>
          <div className='navigation'>
            <ul className='menu '>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? 'text-[16px] leading-7 font-[600]'
                        : 'text-[16px] leading-7 font-[600]'
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className='log'></div>
          <div className='loginback'>
            <Link to='/Login'>
              <button className='login'>Login</button>
            </Link>
          </div>
          <div className='signupback'>
            <Link to='/register'>
              <button className='signup'>Signup</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
