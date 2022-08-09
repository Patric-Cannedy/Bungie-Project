import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router';
import { Input, IconButton, InputAdornment } from '@mui/material';
import { useTheme, makeStyles, ThemeProvider } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import '../CSS/styles.css';



function SearchBar ({data, showPage, itemName, itemIcon, itemSearch}) {
    const [input, setInput] = useState('');
    const ref = useRef(input);

    useEffect(()=>{
        console.log(input)
    },[input])

    const updateState = (newState) => {
        ref.current = newState;
        setInput(newState);
    }
    let history = useHistory();
   const handleSubmit = (e) => {
        e.preventDefault();
        updateState(input);
        history.push('/results');
    }
    useEffect(()=> {
        itemSearch(input)
      },[input])

        return (
            <div className={'icons'}>
            <Input style={{backgroundColor:'#F5F5F5	', color:'#000000'}}  onChange={(e) => setInput(e.target.value)} placeholder='Search Database Here' fullWidth endAdornment={
                <InputAdornment position='end'>
                    <IconButton onClick={handleSubmit}>                    
                        <SearchIcon />
                    </IconButton>
                </InputAdornment>} />
            </div>
        );
}



export default SearchBar;

//Add all relevant item data as props
//create a copy of my search page that populates the data
//may have to adjust the showpage functions so it works now
//make enter work too