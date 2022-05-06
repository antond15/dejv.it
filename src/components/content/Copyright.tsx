import React from 'react';
import { Box, Typography } from '@mui/material';

const Copyright: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        alignSelf: 'flex-end',
        width: '100%',
        padding: 2,
      }}
    >
      <Typography variant="body2" color="text.secondary" align="center">
        {`© ${new Date().getFullYear()} All rights reserved.`}
      </Typography>
    </Box>
  );
};

export default Copyright;
