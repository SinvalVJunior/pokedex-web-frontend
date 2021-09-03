import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import Home from './pages/Home/Home';
import LoginPage from './pages/Login/Login';
import Roulette from './pages/Game/Roulette/Roulette'
import Navbar from './Navbar/Navbar';
import Inventory from './pages/Inventory/Inventory';
import PrivateRoute from './routes/PrivateRoute';
import * as HomeActions from './pages/Home/home.actions';
import { useHomeDispatch } from './pages/Home/home.context';
import Loading from './Loading/Loading';

function App() {

  const dispatch = useHomeDispatch();

  useEffect(() => {
    const userString = localStorage.getItem("user");
    if(userString) {
      const userObj = JSON.parse(userString);
      dispatch(HomeActions.setUser(userObj));
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Loading />
      <BrowserRouter>
        <Navbar />
        <Switch>
          < PrivateRoute path="/inventory" exact component={Inventory} />
          < PrivateRoute path="/play" exact component={Roulette} />
          < Route path="/login" exact component={LoginPage} />
          < Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;