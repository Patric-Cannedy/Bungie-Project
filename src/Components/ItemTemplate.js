import React from 'react';
import Paper from '@mui/material/Paper';
import { useTheme, makeStyles, ThemeProvider, styled } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Header from './Header'

const useStyles = makeStyles(theme => ({
    itemName: {
        paddingTop: '40px',
      },
    title: {
      [theme.breakpoints.down("sm")]: {
        flexGrow: 1
      }
    },
    itemHeader: {
        textAlign: "left",
        display: 'inline-flex'
    },
    itemTitle: {
        color: 'rgba(170, 170, 170)',
        fontWeight: '600',
        fontSize: '1.5rem',
    },
    subTitle: {
      color: 'rgba(170, 170, 170)',
      fontWeight: '500',
      fontSize: '1.2rem',
      marginTop: '-1.5vh',
    },
    flavorText: {
      color: 'rgba(170, 170, 170)',
      fontWeight: '500',
      fontSize: '.9rem',
      fontStyle: 'italic',
    },
    perkName: {
      color: 'white',
      fontWeight: '700',
      fontSize: '24px',
      textShadow: '1px 1px 1px black',
      paddingLeft: '1vw',
    },
    archTyp: {
      backgroundColor: 'rgb(66, 66, 72)',
      borderRadius: '5px',
    },
  }));


const Item = ({itemIcon, itemName, flavorText, tierTypeName, typeDisplayName}) =>  {
  const classes = useStyles();
  const theme = useTheme();
  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

  
  
  return (
      <ThemeProvider theme={theme}>
          <div style={{ minHeight: '5vh',  }}></div>
          {/* Item header and pic */}
          <Grid>
          <Grid container spacing={0} style={{ minHeight: '10vh',  }}> 
            <Grid item xs={2}>
                </Grid>
            <Grid item xs={10} className={classes.itemName}> 
              <Grid container spacing={0}>
                <Grid item>
                  <Box sx={{ width: 128, height: 128,  }}>
                    <Box sx={{ position:'absolute', width: 128}}>
                      <Img alt="temp" src={"https://www.bungie.net"+itemIcon}/>
                    </Box>
                  
                    <Img alt="complex" src="https://www.bungie.net/common/destiny2_content/icons/9976b41a3b121e9c191fa0b313eb6bf9.jpg" />
                  </Box>                      
                </Grid>                                       
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs >
                        <Typography gutterBottom  component="h2" className={classes.itemTitle}>
                          {itemName}
                        </Typography>
                        <Typography gutterBottom component="h4" className={classes.subTitle}>
                        {tierTypeName} / {typeDisplayName}
                        </Typography>
                        <Typography  color="text.secondary" className={classes.flavorText}>
                          {flavorText}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid> 
                </Grid>
            </Grid>
  
          {/*archetype info  */}
          <Grid item xs={2}>
            </Grid>
          <Grid item xs={10} className={classes.itemName}>
            <Grid item xs={5} container>
              <Grid item xs={12}>
                  <Box className={classes.archTyp} sx={{ width: '54vw'}}>
                    <Typography gutterBottom variant="subtitle1" component="div" className={classes.perkName}>
                      Exotic Perks
                    </Typography>
                  </Box>
              </Grid>
              <Grid item container direction="column" spacing={0}>
                <Grid item xs={12}>
                  <Box sx={{ width: 80, height: 50}}>
                    <Img alt="icon1" src="https://www.bungie.net/common/destiny2_content/icons/011876e11f5c41457f03b5988658f01c.png" />
                  </Box>
                </Grid>            
                <Grid item xs={11}>
            
                  <Typography variant="body2" gutterBottom>
                    Banshee's Wail
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  [Block] : Hold to rev the blade.
                  <br></br>
                  • Increases damage and adds [Shield-Piercing] shield piercing to all attacks.
                  <br></br>
                  • Gain stacks when dealing damage with revved attacks.
                  <br></br>
                  • Additional stacks increase the damage and damage resistance of heavy attacks.
                  </Typography>  
                </Grid>           
              </Grid>
            </Grid>

            <Grid container spacing={0}>
            <Grid item xs={2} container>

              <Grid item xs container direction="column" spacing={1}>
                <Grid item xs={12}>
                  <Box sx={{ width: 80, height: 50}}>
                    <Img alt="icon2" src="https://www.bungie.net/common/destiny2_content/icons/3361aeb06574f8ad05f84942c0144766.png" />
                  </Box>
                </Grid>            
                <Grid item xs={5}>
            
                  <Typography variant="body2" gutterBottom>
                  Revved Consumption
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Damaging a combatant heals the wielder.
                  </Typography>  
                </Grid>           
              </Grid>
            </Grid>
            </Grid>
          </Grid>
                    {/* Lore info */}
            <Grid container spacing={0}>
              
              <Grid item container>
                <Grid item xs={12}></Grid>
                <Grid item xs={12}></Grid>                
              <Grid item xs={2}></Grid>

                <Grid item container  spacing={0}> 
                <Grid item xs={2}>
                </Grid>
                          
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
  )
}

export default Item

//check the containers in the second portion. that may resolve the weird issues