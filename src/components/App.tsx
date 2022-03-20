import React from 'react';
import NavBar from './utils/NavBar';

const App: React.FC = () => {
  return (
    <>
      <div className="Wrapper">
        <NavBar />
      </div>
      <div className="Wip">
        <h1>Work in progress</h1>
      </div>
    </>
  );
};

export default App;
