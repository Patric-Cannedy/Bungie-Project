import './App.css';
import React from 'react';
import Header from './Components/Header';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import DisplayItem from './Components/DisplayItem';
import Contact from './Components/Pages/Contact'
import { makeStyles } from '@mui/styles';
import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';

const useStyles = makeStyles({});

function App() {
  const classes = useStyles();
  const [showPage, setShowPage] = useState(false);
  const togglePreview = () => {
    showPage ? setShowPage(false) : setShowPage(true);
  }
  const [data, setData] = useState({})
  const [input, setInput] = useState('');
  const [itemName, setItemName] = useState(null);
  const [itemIcon, setItemIcon] = useState(null);
  const [flavorText, setFlavorText] = useState('')
  function itemSearch (input) {
      
      fetch('/search', {
          method: 'POST',
          mode: 'cors',
          body: JSON.stringify({input}),
          headers: { 'Content-Type': 'application/json' },
      })
      .then(res => res.json())
      .then(data => setData(data), setItemName(data.name), setItemIcon(data.icon), setFlavorText(data.flavorText)) //update states here. use an use effect later
      console.log(data)
      console.log(itemName)
      
  }

  const handleChange = (e) => {
    setInput(e.target.value);
  }
  const handleSubmit = (e) => {
      e.preventDefault()
      itemSearch(input)
      togglePreview();
  }
  return (
    <div className={classes.container}>
      
    <Header itemIcon={itemIcon} itemName={itemName} togglePreview={togglePreview} showPage={showPage} input={input} handleChange={handleChange} handleSubmit={handleSubmit}/>
    <Home/>
    <DisplayItem showPage={showPage} itemIcon={itemIcon} itemName={itemName}/> 
      <Switch>
        <Route exact path='/home' render={props => <Home {...props} />} />
        <Route path='/search' render={props => <DisplayItem {...props} />} />
        <Route path='/about'render={props => <About {...props} />} />
        <Route path='/contact'render={props => <Contact {...props} />} />
    </Switch>
    </div>
  );
}

export default App;
