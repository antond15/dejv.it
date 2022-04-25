import React from 'react';
import { Typography } from '@mui/material';

const Copyright: React.FC = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {`© ${new Date().getFullYear()} All rights reserved.`}
    </Typography>
  );
};

export default Copyright;
