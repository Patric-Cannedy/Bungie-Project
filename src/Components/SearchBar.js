import * as React from 'react';
import { Input, IconButton, InputAdornment } from '@mui/material';
import { useTheme, makeStyles, ThemeProvider } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';

    const SearchBar = props => {
        // var hash = 1960218487
        // const id = hash >> 32;
        let baseUrl = 'https://www.bungie.net/Platform/Destiny2/Manifest/'
        var myHeaders = new Headers();
            myHeaders.append("X-API-KEY", "4d80fc1c6b474ae5aa6c01cbc7912002");
            myHeaders.append("Cookie", "Q6dA7j3mn3WPBQVV6Vru5CbQXv0q+I9ddZfGro+PognXQwjWM8bM6VGC=v1V9hRgw__h0G; __cflb=0H28vP5GxS7vgVH4MZT6rB7QcDNQ8jpmEs8nu2hYUSo; bungleanon=sv=BAAAAADXMQAAAAAAALx18wEAAAAAAAAAAAAAAAB80qzwdjHaCEAAAADWWYWQA8xMEO1di/fLFf3QJ0WctMUWwHnJcbQ3zd0wDOj9oz5+e375WK08DXGuyYqxcAGmY2Iu4Bm8t0TRabdx&cl=MC4xMjc1OS4zMjczMjYwNA==; bungled=2684882084705181855; bungledid=B+ylYXW130JNmXGYXdsKtzV80qzwdjHaCAAA; bungles=WebView=False");

            var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
            };

            fetch(baseUrl, requestOptions)
            .then(response => response.json())
            .then(function(json){
                console.log(json);
            })
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

 
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