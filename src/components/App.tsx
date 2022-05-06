import { Container } from '@mui/material';
import React from 'react';
import ButtonLinks from './content/ButtonLinks';
import Copyright from './content/Copyright';

const App: React.FC = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        position: 'absolute',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
      }}
    >
      <ButtonLinks />
      <Copyright />
    </Container>
  );
};

export default App;
