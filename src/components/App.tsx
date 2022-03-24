import React from 'react';
import NavBar from './utils/NavBar';
import Main from './utils/Main';

const App: React.FC = () => {
  return (
    <>
      <div className="Wrapper">
        <NavBar />
        <Main />

        <div className="Wip">
          <span>
            <p>WORK IN PROGRESS</p>
            <br/>
            <p>All links are in navbar.</p>
          </span>
        </div>
      </div>
    </>
  );
};

export default App;
