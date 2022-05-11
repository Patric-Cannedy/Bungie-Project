import './App.css';
import React from 'react';
import Header from './Components/Header';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact'
import { makeStyles } from '@mui/styles';
import { Route, Switch } from 'react-router-dom';

const useStyles = makeStyles({});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
    <Header />
    <Switch>
        <Route exact path='/' render={props => <Home {...props} />} />
        <Route  path='/about'render={props => <About {...props} />} />
        <Route  path='/contact'render={props => <Contact {...props} />} />
    </Switch>
    </div>
  );
}

export default App;
