import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faGithub, faTwitch } from '@fortawesome/free-brands-svg-icons';
import './NavBar.scss';

const NavBar: React.FC = () => {
  return (
    <nav className="nav-container">
      <a href={process.env.PUBLIC_URL}>
        <img
          className="nav-logo"
          src={process.env.PUBLIC_URL + 'assets/logo.svg'}
          alt="logo"
          draggable="false"
        />
      </a>

      <div className="nav-content">
        <div className="nav-left">
          <h2>Dejv.it</h2>
        </div>

        {/* prettier-ignore */}
        <div className="nav-right">
          <a href="https://github.com/antond15" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} fixedWidth />
          </a>
          <a href="https://ko-fi.com/antond" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faMugHot} fixedWidth />
          </a>
          <a href="https://discordapp.com/users/289015294456758272" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faDiscord} fixedWidth />
          </a>
          <a href="https://twitch.tv/antond1" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitch} fixedWidth />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
