import React from 'react';
import Box from '@mui/material/Box';

const NoMatch = () => {
  return (
    <Box
        sx={{
          display: 'flex',
          m: 3,
          pt: '4rem',
          minWidth: { md: 350 },
          flexDirection: { xs: 'column', md: 'row' },
          color: 'white',
          fontFamily: 'default',
          fontWeight: 'medium',
          fontSize: 20
        }}>
      Ummm... I didn't write this page yet.
    </Box>
  );
};

export default NoMatch;