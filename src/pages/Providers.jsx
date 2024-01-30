// Providers.jsx
import React, { useState } from 'react';
import './Providers.css';

const Providers = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <header className="text-input">
        <div className="for-providers">
          <span>For Providers</span>
          <div className={`providers-dropdown ${isDropdownOpen ? 'open' : ''}`}>
            <button className="dropdown-button" onClick={toggleDropdown}>
             For Providers
            </button>
            <div className="dropdown-content">
              <a href="#manage-profile">Manage Your Profile</a>
              <a href="#list-practices">List Your Practices</a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Providers;
