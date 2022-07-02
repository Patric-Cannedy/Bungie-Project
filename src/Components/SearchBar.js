import * as React from 'react';
import { Input, IconButton, InputAdornment } from '@mui/material';
import { useTheme, makeStyles, ThemeProvider } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';



function SearchBar ({data, showPage, input, itemName, itemIcon, setInput, handleSubmit, handleChange}) {
        
    
        return (
            
            <Input value={input} onChange={handleChange} placeholder='Search Database Here' fullWidth endAdornment={
                <InputAdornment position='end'>
                    <IconButton onClick={handleSubmit}>                    
                        <SearchIcon />
                    </IconButton>
                </InputAdornment>
            }/>
        );
}



export default SearchBar;

//Add all relevant item data as props
//create a copy of my search page that populates the data
//may have to adjust the showpage functions so it works now
//make enter work too