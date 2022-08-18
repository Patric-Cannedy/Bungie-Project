import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router';
import { Input, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import '../CSS/styles.css';



function SearchBar ({itemSearch}) {
    const [input, setInput] = useState('');
    const ref = useRef(input);
    // useEffect(()=>{
    //     console.log(input)  
    // },[input])
    // const updateState = (newState) => {
    //     ref.current = newState;
    //     setInput(newState);
    // }
    let history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        itemSearch(input);
        history.push('/Bungie-Project/results')
    }
    useEffect(()=> {
        console.log(input)
        itemSearch(input)
      },[input])

    const onEnterPress = (e) => {
        if(e.keyCode === 13 && e.shiftKey === false) {
          e.preventDefault();
          itemSearch(input);
          history.push('/Bungie-Project/results')
        }
      }

        return (
            <div className={'icons'}>
                <Input style={{backgroundColor:'#F5F5F5	', color:'#000000', borderRadius: '5px',}} 
                    onKeyDown={onEnterPress} 
                    onChange={(e) => setInput(e.target.value)} 
                    placeholder='Search the Database' 
                    fullWidth endAdornment={
                        <InputAdornment position='end'>
                            <IconButton onClick={handleSubmit} >                    
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>} />
            </div>
        );
}



export default SearchBar;
