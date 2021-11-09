import React, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

export default function ButtonAppBar(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
  } = props;

  useEffect(() => {
    document.title = currentCategory.name;
  }, [currentCategory]);

  return (
    <Box>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Grid item xs>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" 
              style={{ 
                fontFamily: 'Permanent Marker', 
                fontSize: '2rem', 
                }}>
                  <span onClick={() => {
                  setCurrentCategory(categories[0]);
                }}>
                  Joseph Focha
                  </span>
                  </Link>
            </Typography>
          </Grid>
          <Grid
            item xs={6}
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            {categories.map((category) => (
              <Link to={category.link}
                className={`${currentCategory.name === category.name && `navActive`}`}
                key={category.name}
                style={{
                  fontStyle: 'oblique',
                  fontSize: '1.5rem',
                }}>
                <span onClick={() => {
                  setCurrentCategory(category);
                }}>
                  {category.name}
                </span>
              </Link>
            ))}
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