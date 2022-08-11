import React from 'react';
import { BucketHashes } from '../data';
import { useTheme, makeStyles, ThemeProvider, styled } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';


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
    screenShotCont:{
      minHeight: '20vh',
    },
    itemScreenShot:{
      maxWidth: '54vw',
      display: 'center'
    },
  }));


const Item = ({
    itemIcon, 
    itemName, 
    flavorText, 
    tierTypeName, 
    typeDisplayName, 
    waterMark, 
    slotTypeHash,
    screenShot}) =>  {

    const classes = useStyles();
    const theme = useTheme();
    const Img = styled('img')({
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    });

    let slot = (BucketHashes) => {
        for (let k in BucketHashes) {
          if (BucketHashes[k] === slotTypeHash) {
              console.log(k);
              return k;
          }
      }
    } 

  
  
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
                        <Img alt="" src={"https://www.bungie.net"+itemIcon}/>
                        
                      </Box>
                    
                      <Img alt="" src={"https://www.bungie.net"+waterMark }/>
                    </Box>                      
                  </Grid>                                       
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs >
                          <Typography gutterBottom  component="h2" className={classes.itemTitle}>
                            {itemName}
                          </Typography>
                          <Typography gutterBottom component="h4" className={classes.subTitle}>
                          {tierTypeName} / {slot(BucketHashes)} / {typeDisplayName}
                          </Typography>
                          <Typography  color="text.secondary" className={classes.flavorText}>
                            {flavorText}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid> 
                  </Grid>
              </Grid>
    
            <Grid item xs={2}>
              </Grid>
            <Grid item xs={10} className={classes.itemName}>
                <Grid item xs={5} container>
                  <Grid item xs={12}>
                      <Box className={classes.archTyp} sx={{ width: '54vw'}}>
                        <Typography gutterBottom variant="subtitle1" component="div" className={classes.perkName}>
                          Screen Shot
                        </Typography>
                      </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
        </Grid>

        <Grid container className={classes.screenShotCont}>
          <Grid item xs={2}></Grid>
          <Grid item xs={7}>
            <Box className={classes.itemScreenShot}>
                <Img src={"https://www.bungie.net"+screenShot}/>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
  )
}

export default Item

//check the containers in the second portion. that may resolve the weird issues