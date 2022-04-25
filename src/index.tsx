import React from 'react';
import { render } from 'react-dom';

import './index.scss';
import App from './components/App';
import { ThemeProvider } from '@mui/material';
import { customTheme } from './theme';

render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
