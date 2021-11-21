import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';

const Footer = (props) => {
  const { linkData } = props;

  return (
    <footer style={{ display: "flex", justifyContent: 'space-between' }}>
      <Typography variant="body2" component="div" sx={{ p: '5px', ml: '10px' }}>&copy;2021 by Joe Focha</Typography>
      <div className="footer-link">
        {linkData.map((link, i) => (
          <a key={`footer-link-${i}`} href={link.url} target="_blank" rel="noopener noreferrer">
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pr: '1rem' }}>
              <SvgIcon component={link.icon} className='icon' />
              <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                {link.name}
              </Box>
            </Box>
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;