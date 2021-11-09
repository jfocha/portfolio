import React from 'react';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <footer>
      <Typography variant="h6" component="div" sx={{ color: 'primary.contrastText' }}>&copy;2021 by Joe Focha</Typography>
    </footer>
  );
};

export default Footer;