import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import userImg from '../../assets/images/avatar-icon.png'
import logo from "../../assets/images/logo.png";
import './Header.css';

const navLinks = [
  {
    path: '/doctors',
    display: 'Find Doctors'
  },
  {
    path: '/home',
    display: 'Video Consult'
  },
  {
    path: '/services',
    display: 'Lab Tests'
  },
  {
    path: '/contact',
    display: 'For Providers'
  },
];

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          <div className='image'>
            <img className='logo-icon' src={logo} alt='Icon'/>
          </div>
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
          <div className='flex items-center gap-4'></div>
            <div className='loginback'>
            <Link to='/Login'>
              <button className='login'>Login</button>
            </Link>
            </div>
            <div className='signupback'>
            <Link to='/Signup'>
              <button className='signup'>Signup</button>
            </Link>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
