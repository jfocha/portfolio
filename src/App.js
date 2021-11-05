import * as React from 'react';
import Box from '@mui/material/Box';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Box
          sx={{
            display: 'grid',
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
            // position: "static"
            // transform: "scale3d(2, 2, 1)",
            // alignItems: 'center'
          }}>
            <Sidebar />
          </Box>
          <Box sx={{ gridArea: 'main' }}>
            <Switch>
              <Route exact path="/" component={About} />
              <Route exact path="/projects" component={Projects} />
              {/* <Route exact path="/contact" component={Contact} />

              <Route component={NoMatch} /> */}
            </Switch>
          </Box>
        </Box>
      </Router>
    </div>
  );
}

export default App;
