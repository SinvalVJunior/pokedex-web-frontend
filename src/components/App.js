import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import Home from './pages/Home';
import LoginPage from './pages/Login/Login';

function App() {
  return (
    <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Switch>
                    < Route path="/" exact component={LoginPage}/>
                    < Route path="/home" exact component={Home}/>
                </Switch>
            </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;