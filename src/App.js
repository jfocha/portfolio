import * as React from 'react';
import Box from '@mui/material/Box';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Header from './components/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import Sidebar from './components/Sidebar';
import backImage from './assets/background.jpg';

// const image = { uri: require(`./assets/background.jpg`).default };

function App() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: '100vh',
      // overflow: 'hidden'
      
    
    
    },
    image: {
      flex: 1,
      width: null,
      height: '100vh',
      
    }
  });
  return (
    <View style={styles.container}>
      <ImageBackground source={backImage} resizeMode='cover' style={styles.image}>
        <Router>
          <Header />

          
          <Box
            sx={{
              display: 'grid',
              maxHeight: '100vh',
            overflow: 'auto',
              gridTemplateColumns: 'repeat(8, 1fr)',
              gap: 6,
              gridTemplateRows: 'auto',
              // background: 'purple',
              gridTemplateAreas: `"sidebar main main main main main main ."`,
            }}
          >
            <Box sx={{
              gridArea: 'sidebar',
              display: 'inline-flex',
              m: 5,
              pt: '10rem',
              // background: 'yellow',
              // position: 'static',
              // top:'5rem',
              alignItems: 'flex-start'
              // transform: "scale3d(2, 2, 1)",
              // alignItems: 'center'
            }}>
              <Sidebar />
            </Box>
            <Box sx={{ 
              gridArea: 'main',
              alignItems: 'flex-start',
              // background: 'orange',
              
               }}>
              <Switch>
                <Route exact path="/" component={About} />
                <Route exact path="/projects" component={Projects} />
                {/* <Route exact path="/contact" component={Contact} />

              <Route component={NoMatch} /> */}
              </Switch>
            </Box>
          </Box>
          

        </Router>
      </ImageBackground>
    </View>

  );
}

export default App;
