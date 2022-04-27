import { Container } from '@mui/material';
import React from 'react';
import Copyright from './Copyright/Copyright';

const App: React.FC = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        position: 'absolute',
        display: 'flex',
        height: '100%',
        // bgcolor: 'brown',
      }}
    >
      <p>cscs</p>
      <Copyright />
    </Container>
  );
};

export default App;
