import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Grid item xs>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Joseph Focha</Link>
            </Typography>
          </Grid>
          <Grid
          item xs={6}
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center" 
          >
            {/* <Button color="inherit">Login</Button>  */}
            
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>About</Link>
            <Link to="/projects" style={{ textDecoration: 'none', color: 'inherit' }}>Projects</Link>
          <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</Link>
          
          </Grid>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

        </Toolbar>
      </AppBar>
    </Box>
  );
}