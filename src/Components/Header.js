import * as React from 'react';
import { useHistory } from 'react-router';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme, makeStyles, ThemeProvider, } from '@mui/styles';
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
  },
  appBarTransparent: {
    backgroundColor: 'transparent'
  },
  appBarSolid: {
    backgroundColor: 'rgba(18,23,28,255)'
  },
}));

//header code
  const Header = ({input, data, itemIcon, itemName, itemSearch, handleSubmit}) => {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    let history = useHistory();  
    const handleClose = (pageURL) => {
      history.push(pageURL)
      setAnchorEl(null);
    };
  const [navBackground, setNavBackground] = useState('appBarTransparent');
  const navRef = React.useRef()
  navRef.current = navBackground
  useEffect(() => {
    const handleScroll = () => {
        const show = window.scrollY > 310
        if (show) {
            setNavBackground('appBarSolid')
        } else {
            setNavBackground('appBarTransparent')
        }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
        document.removeEventListener('scroll', handleScroll)
    }
}, [])
  const menuItems = [
    {
      menuTitle: 'Home',
      pageURL: '/',
    },
    {
      menuTitle: 'Contact',
      pageURL: '/contact',
    },
    {
      menuTitle: 'About',
      pageURL: '/about',
    },
  ]

  return (
  <ThemeProvider theme={theme}>
    <Grid container spacing={0}>
    <div className={classes.root}>
      
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed"   className={classes[navRef.current]}>
          
          <Toolbar>
          <Grid item xs={3}>
            <Typography variant="" component="div" sx={{ flexGrow: 1 }} className={'icons'}>
              The Destiny Armory
            </Typography>
          </Grid>
          <Grid item xs={6}>      
            <SearchBar data={data} input={input} itemName={itemName} itemIcon={itemIcon} handleSubmit={handleSubmit} itemSearch={itemSearch}/>
          </Grid>            
          <Grid item xs={2}>
                </Grid>
              <div className={'icons'}>
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
