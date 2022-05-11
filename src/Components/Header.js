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
const Header = props => {
  const classes = useStyles();
  const { history } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));  

  const handleClose = pageURL => {
    history.push(pageURL);
    setAnchorEl(null);
  };

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
            <SearchBar />
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
