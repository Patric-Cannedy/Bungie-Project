import React from 'react';
import Header from './Components/Header';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Results from './Components/Results';
import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';


function App() {
  const [data, setData] = useState({})
  const [itemName, setItemName] = useState(null);
  const [itemIcon, setItemIcon] = useState(null);
  const [flavorText, setFlavorText] = useState('')
  const [tierTypeName, setTierTypeName] = useState('');
  const [typeDisplayName, setTypeDisplayName] = useState('')

  async function itemSearch(input){
      
     const response = await fetch('/search', {
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
      setTierTypeName(data.inventory["tierTypeName"]);
      setTypeDisplayName(data["itemTypeDisplayName"]);
      console.log(data);
      console.log(data["itemTypeDisplayName"]);
      return response
  }

  return (
    <Route>
        <Header itemIcon={itemIcon} itemName={itemName} itemSearch={itemSearch}/>
        <div></div>
        <Switch>
          <Route exact path='/' render={()=> <Home itemIcon={itemIcon} itemName={itemName} flavorText={flavorText} tierTypeName={tierTypeName} typeDisplayName={typeDisplayName}/>} />            
          <Route path='/about' render={()=> <About />}/>          
          <Route path='/contact'render={()=> <Contact /> }/>
          <Route path='/results' render={()=> <Results itemIcon={itemIcon} itemName={itemName} flavorText={flavorText} tierTypeName={tierTypeName} typeDisplayName={typeDisplayName}/>}/>                 
        </Switch>
    </Route>
  );
}
export default App;
