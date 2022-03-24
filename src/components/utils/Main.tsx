import React from 'react';
import Projects from './Projects';
import './Main.scss';

const Main: React.FC = () => {
  return (
    <main className="main-container">
      <Projects />
    </main>
  );
};

export default Main;
