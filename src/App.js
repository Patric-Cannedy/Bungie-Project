import React from 'react';
import Header from './Components/Header';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
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
  const [tierTypeName, setTierTypeName] = useState('');
  const [typeDisplayName, setTypeDisplayName] = useState('')

  function itemSearch (input) {
      
      fetch('/search', {
          method: 'POST',
          mode: 'cors',
          body: JSON.stringify({input}),
          headers: { 'Content-Type': 'application/json' },
      })
      .then(res => res.json())
      .then(data => setData(data))
      setItemName(data.displayProperties["name"]); 
      setItemIcon(data.displayProperties["icon"]);
      setFlavorText(data["flavorText"]);
      setTierTypeName(data.inventory["tierTypeName"])
      setTypeDisplayName(data["itemTypeDisplayName"])
      console.log(data)
      console.log(data["itemTypeDisplayName"])
      
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
      <Switch>
        <Route exact path='/'>
          <Home showPage={showPage} itemIcon={itemIcon} itemName={itemName} flavorText={flavorText} tierTypeName={tierTypeName} typeDisplayName={typeDisplayName}/>
        </Route>

        <Route path='/about'>
          <About />
        </Route>

        <Route path='/contact'>
            <Contact />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
