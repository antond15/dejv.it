import React from 'react';
import './Projects.scss';

const Projects: React.FC = () => {
  return (
    <div className='projects-wrapper'>
      <section className="projects-container">

        <div className='project-card'>
          <img src="https://opengraph.githubassets.com/a431af076b56d50876ceb17abff7bbd21c40b3ba5a9c9817da25c106045592b2/antond15/ac_switchjob" alt="ac_switchjob" />
          <p className='project-name'>ac_switchjob</p>
          <p className='project-desc'>Simple FiveM ESX script for switching between two jobs.</p>
        </div>

        <div className='project-card'>
          <img src="https://opengraph.githubassets.com/bab30345b08be3fd05dbe8d95d1cc90af4b635b5dac2b6fc5428b7a7ab4ed898/antond15/orp_banking" alt="orp_banking" />
          <p className='project-name'>orp_banking</p>
          <p className='project-desc'>Fork of orp-banking with support for qtarget.</p>
        </div>

      </section>
    </div>
  );
};

export default Projects;
