import React from 'react';
import menuIcon from '../icons/menu.svg';

const Header = props => {
  const {sidebarShown, modalOpened, openModal, toggleSidebar} = props;
  return (
    <header id="main-header" role="banner">
      <h1>Recommended Restaurants</h1>
      <button 
        type="button" 
        id="menu-btn"
        onClick={toggleSidebar}
        aria-controls="sidebar"
        aria-pressed={sidebarShown ? "true" : "false"}
        aria-expanded={sidebarShown ? "true" : "false"}
      >
        <img 
          src={menuIcon} 
          alt="Menu Icon" 
        />
      </button>
      <button
        type="button"
        id="place-btn"
        onClick={openModal}
        aria-controls="modal"
        aria-pressed={modalOpened ? "true" : "false"}
        aria-expanded={modalOpened ? "true" : "false"}
      >
        change place
      </button>
    </header>
  );
}

export default Header;
