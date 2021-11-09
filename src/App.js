import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ImageBackground, StyleSheet, View } from "react-native";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';
import backImage from './assets/background.jpg';
import { createTheme, ThemeProvider } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#102967',
      dark: '#060813',
      contrastText: '#eddde4'
    },
    secondary: {
      main: '#04060f',
      dark: '#133eb9',
      contrastText: '#eddde4'
    },
    error: {
      main: '#c82c76',
      contrastText: '#eddde4'
    },
    success: {
      main: '#04c57e'
    },
    background: {
      default: '#eddde4'
    }
  },
});

function App() {
  const [categories] = useState([
    {
      name: 'About Joe',
      link: "/"
    },
    {
      name: 'Portfolio',
      link: "/projects"
    },
    {
      name: 'Contact',
      link: "/contact"
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: '100vh',
    },
    image: {
      flex: 1,
      width: null,
      height: '100vh',
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <ImageBackground source={backImage} resizeMode='cover' style={styles.image}>
          <Router>
            <Header
              categories={categories}
              setCurrentCategory={setCurrentCategory}
              currentCategory={currentCategory}
            />
            <Box
              sx={{
                display: 'grid',
                maxHeight: '100vh',
                overflow: 'auto',
                gridTemplateColumns: 'repeat(8, 1fr)',
                gap: 6,
                gridTemplateRows: 'auto',
                gridTemplateAreas: `"sidebar main main main main main main ."`,
              }}
            >
              <Box sx={{
                gridArea: 'sidebar',
                display: 'inline-flex',
                m: 5,
                pt: '10rem',
                alignItems: 'flex-start'
              }}>
                <Sidebar />
              </Box>
              <Box sx={{
                gridArea: 'main',
                alignItems: 'flex-start',
              }}>
                <Switch>
                  <Route exact path="/" component={About} />
                  <Route exact path="/projects" component={Projects} />
                  <Route exact path="/contact" component={Contact} theme={theme} />

                  <Route component={NoMatch} />
                </Switch>
              </Box>
            </Box>
          </Router>
        </ImageBackground>
      </View>
    </ThemeProvider>
  );
}

export default App;
