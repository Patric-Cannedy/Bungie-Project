import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme, makeStyles, ThemeProvider } from '@mui/styles';
import { withRouter } from 'react-router';
import Button from '@mui/material/Button';
import SearchBar from './SearchBar';
import { Grid } from '@mui/material';
import { useState, useEffect } from 'react';

//materialui style
const useStyles = makeStyles(theme => ({

  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      flexGrow: 1
    }
  },
  headerOptions: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-evenly'
  }
}));

//header code
  const Header = ({showPage, togglePreview, input,data, itemIcon, itemName, handleChange, handleSubmit}) => {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));  
    const handleClose = pageURL => {
      
      setAnchorEl(null);
    };
    // const [data, setData] = useState({})
    // const [input, setInput] = useState('');
    // const [itemName, setItemName] = useState(null);
    // const [itemIcon, setItemIcon] = useState(null);

    // function itemSearch (input) {
        
    //     fetch('/search', {
    //         method: 'POST',
    //         mode: 'cors',
    //         body: JSON.stringify({input}),
    //         headers: { 'Content-Type': 'application/json' },
    //     })
    //     .then(res => res.json())
    //     .then(data => setData(data), setItemName(data.name), setItemIcon(data.icon)) //update states here. use an use effect later
    //     console.log(data)
    //     console.log(itemName)
        
    // }

    // const handleChange = (e) => {
    //   setInput(e.target.value);
    // }
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     itemSearch(input)
    //     togglePreview();
    // }
//list to map items and streamline a bit
  const menuItems = [
    {
      menuTitle: 'Home',
      pageURL: '/',
    },
    {
      menuTitle: 'Contact',
      pageURL: '/Contact',
    },
    {
      menuTitle: 'About',
      pageURL: '/About',
    },
  ]

  return (
  <ThemeProvider theme={theme}>
    <Grid container spacing={0}>
    <div className={classes.root}>
      
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          
          <Toolbar>
          <Grid item xs={3}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Bungie API Project
            </Typography>
          </Grid>
          <Grid item xs={6}>      
            <SearchBar data={data} showPage={showPage} input={input} itemName={itemName} itemIcon={itemIcon} handleSubmit={handleSubmit} handleChange={handleChange}/>
            {/* WRIIIIIIIIIIIIIIIITE HHHHHHHHHHHHEEEEEEEEEEEEEEEEERE */}
          </Grid>            
          <Grid item xs={2}>
                </Grid>
              <div>
                {isMobile ? (   
                  <>         
                <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>

                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  {menuItems.map(menuItem => {
                    const {menuTitle, pageURL} = menuItem;
                    return (
                    <MenuItem onClick={() => handleClose(pageURL)}>{menuTitle} </MenuItem>
                    );
                  })}
                </Menu>
                
                </>
                ) : (<Grid item xs={12}> 
                  <div className={classes.headerOptions}>
                    {menuItems.map(menuItem => {
                      const {menuTitle, pageURL} = menuItem;
                      return ( 
                      <Button variant='outLined' onClick={() => handleClose(pageURL)}>{menuTitle} </Button>
                      );
                  })}
                </div></Grid>
                )
                }
              </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
    </Grid>
    </ThemeProvider>
  );
}

export default withRouter(Header);
