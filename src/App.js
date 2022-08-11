import React from 'react';
import Header from './Components/Header';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Results from './Components/Pages/Results';
import { Route, Switch } from 'react-router-dom';
import { useState} from 'react';


function App() {
  const [data, setData] = useState({})
  const [itemName, setItemName] = useState(null);
  const [itemIcon, setItemIcon] = useState(null);
  const [flavorText, setFlavorText] = useState('')
  const [tierTypeName, setTierTypeName] = useState('');
  const [typeDisplayName, setTypeDisplayName] = useState('');
  const [waterMark, setWaterMark] = useState('');
  const [slotTypeHash, setSlotTypeHash] = useState('');
  const [screenShot, setScreenShot] = useState('');

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
      setTierTypeName(data.inventory["tierTypeName"]);
      setSlotTypeHash(data.inventory["bucketTypeHash"]);
      setTypeDisplayName(data["itemTypeDisplayName"]);
      setWaterMark(data["iconWatermark"]);
      setFlavorText(data["flavorText"]);
      setScreenShot(data["screenshot"]);
      console.log(slotTypeHash);
      return response
  }

  return (
    <Route>
        <Header 
            itemSearch={itemSearch}/>
        <Switch>
          <Route exact path='/' render={()=> <Home />} />            
          <Route path='/about' render={()=> <About />}/>          
          <Route path='/contact'render={()=> <Contact /> }/>
          <Route path='/results' render={()=> 
            <Results 
            itemIcon={itemIcon} 
            itemName={itemName} 
            flavorText={flavorText} 
            tierTypeName={tierTypeName} 
            typeDisplayName={typeDisplayName}
            slotTypeHash={slotTypeHash}
            waterMark={waterMark}
            screenShot={screenShot}/>}/>                 
        </Switch>
    </Route>
  );
}
export default App;
