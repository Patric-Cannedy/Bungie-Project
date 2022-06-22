import * as React from 'react';
import { Input, IconButton, InputAdornment } from '@mui/material';
import { useTheme, makeStyles, ThemeProvider } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';

function GetData() {
    const [data, setData] = useState({})
    const [showPage, setShowPage] = useState(false);
    const [input, setInput] = useState(null);
    const [itemName, setItemName] = useState(null);
    const [itemImg, setItemImg] = useState(null);

    const togglePreview = () => {
        showPage ? setShowPage(false) : setShowPage(true);
      }

    useEffect (() => {
        fetch('/search')
        .then(res => res.json())
        .then(data => setData(data))


    }, [])

    const name = data.name;
    // setItemName(name);
    const img = data.icon
    // setItemImg(img);
    console.log(name)

}
function SearchBar (props) {
        GetData()
    const handleSubmit = (e) => {
      e.preventDefault()
    //   GetData()
    //   togglePreview();
    }
 
        return (
            
            <Input placeholder='Search Database Here' fullWidth endAdornment={
                <InputAdornment position='end'>
                    <IconButton 
                    // onClick={handleSubmit}
                    >
                    <SearchIcon />
                    </IconButton>
                </InputAdornment>
            }/>
        );
}



export default SearchBar;