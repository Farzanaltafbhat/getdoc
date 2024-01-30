import React from 'react';
import './Forproviders.css';

const TextInput = () => {
  return (
    <header className="text-input">
      <div className="for-providers">
        <span>For Providers</span>
        <div className="providers-dropdown">
          <a href="#manage-profile">Manage Your Profile</a>
          <a href="#list-practices">List Your Practices</a>
        </div>
      </div>
    </header>
  );
};

export default TextInput;
