import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import Home from './pages/Home';
import LoginPage from './pages/Login/Login';
import Roulette from './pages/Roulette/Roulette'
import Navbar from './Navbar/Navbar';
import Inventory from './pages/Inventory/Inventory';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          < Route path="/inventory" exact component={Inventory} />
          < Route path="/play" exact component={Roulette} />
          < Route path="/login" exact component={LoginPage} />
          < Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;