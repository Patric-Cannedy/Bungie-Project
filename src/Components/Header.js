import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
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
import { useHistory } from 'react-router';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
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
    paddingTop: '2.5vh',
    backgroundColor: 'transparent',
    minHeight: '10vh',
  },
  appBarSolid: {
    paddingTop: '2.5vh',
    backgroundColor: 'rgba(18,23,28,255)',
    minHeight: '10vh'
  },
}));

//header code
  const Header = ({itemSearch, goToBott}) => {

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
      if (typeof pageURL!== 'string') {
        let bottom = goToBott()
        onclick=bottom
      } else {
      history.push(pageURL)
      setAnchorEl(null);
      }
    };
    const altHome = (e) => {
      e.preventDefault()
      history.push('/Bungie-Project');
    }
    
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
      pageURL: '/Bungie-Project',
    },
    {
      menuTitle: 'Contact',
      pageURL: goToBott,
    },
  ]


  return (
  <ThemeProvider theme={theme}>
    <Grid container spacing={0} >
    <div className={classes.root} >
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" className={classes[navRef.current]}>
          <Toolbar>
          <Grid item xs={3} className={'btn-cont'}>
            <Button className={'header-button'} sx={{fontSize: '20px', fontWeight: 'bold'}} onClick={altHome}>
              The Destiny Armory
            </Button>
          </Grid>
          <Grid item xs={6}>      
            <SearchBar itemSearch={itemSearch} />
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
                      <div className={'btn-cont'}>
                        <Button                            
                          onClick={() => handleClose(pageURL)} 
                          className={'header-button'}> {menuTitle} 
                        </Button>
                      </div>
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
