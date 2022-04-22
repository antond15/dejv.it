import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';

const NotFound: React.FC = () => {
  return (
    <div className="nf-wrapper">
      <div className="nf-container">
        <h1>404</h1>
        <div className="nf-line" />
        <div>
          <p className="nf-text">The page you are looking for was not found.</p>
          <Link to="/">
            <p className="nf-back">Go back</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
