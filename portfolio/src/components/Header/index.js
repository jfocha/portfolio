import React, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
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

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (location) => {
    setCurrentCategory(categories[location]);
    handleClose();
  }

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
                  Joe Focha
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
            sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}
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
          <div>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                mr: 2,
                display: { sm: 'flex', md: 'none' }
              }}
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            {categories.map((category, i) => (
              <Menu
                key={i}
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {categories.map((category, i) => (
                  <span key={i}>
                    <MenuItem onClick={() => { handleClick(i) }}>
                      <Link to={category.link}>{category.name}</Link>
                    </MenuItem>
                  </span>
                ))}
              </Menu>
            ))}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}