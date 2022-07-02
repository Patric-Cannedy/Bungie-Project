import React from 'react';
import Paper from '@mui/material/Paper';
import { useTheme, makeStyles, ThemeProvider, styled } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';


const useStyles = makeStyles(theme => ({
    itemName: {
        paddingTop: '40px',
      },
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
    itemHeader: {
        textAlign: "left",
        display: 'inline-flex'
    }
  }));


const Item = ({showPage, togglePreview, itemIcon, itemName}) =>  {
  
  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });
  var imageHeader = "https://www.bungie.net"+itemIcon

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            {/* Item header and pic */}
            <Grid>
            <Grid container spacing={0} style={{ minHeight: '100vh',  }}> 
                    <Grid item xs={2}>
                        </Grid>
                    <Grid item xs={10} className={classes.itemName}>
                        
                      <Grid container spacing={0}>
                        <Grid item>
                          <Box sx={{ width: 128, height: 128,  }}>
                            <Box sx={{ position:'absolute', width: 128}}>
                              <Img alt="idk" src={"https://www.bungie.net"+itemIcon}/>
                            </Box>
                          
                            <Img alt="complex" src="https://www.bungie.net/common/destiny2_content/icons/9976b41a3b121e9c191fa0b313eb6bf9.jpg" />
                          </Box>                      
                        </Grid>                                       
                          <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                              <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" component="h1">
                                  {itemName}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                Exotic / Power / Sword
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                The last thing the Vex ever heard—the grinding wails of a vicious Banshee.
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
              <Typography gutterBottom variant="subtitle1" component="div">
                Perks
              </Typography>
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
                    <Grid item xs={1}>
                      <Typography gutterBottom variant="subtitle1" component="div">
                        Lore
                      </Typography>
                   </Grid>
          <Grid item container  spacing={0}> 
          <Grid item xs={2}></Grid>
            <Grid item xs={1}>
              <div style={{overflow: "hidden", textOverflow: "ellipsis", width: '30rem'}}>
              <Typography variant="body2" gutterBottom>
              The Lament
              <br></br><br></br>
              The last thing the Vex ever heard—the grinding wails of a vicious Banshee.
              <br></br><br></br>
              FROM THE DESK OF CLOVIS BRAY
              <br></br><br></br>
              Dear… me.
              <br></br><br></br>
              For one who has delved into some of the greatest secrets science has to offer, you would think I'd find speaking with oneself rather monotonous. However, this very letter represents a successful culmination of all I have worked to achieve.
              <br></br><br></br>
              You'll have questions, no doubt. Hopefully by now, the AI has answered most of them.
              <br></br><br></br>
              Except one: Why?
              <br></br><br></br>
              Legacy, of course.
              <br></br><br></br>
              …Is the answer you'd expect from me. And rightfully so. It's not wrong, but it's only part of the story.
              <br></br><br></br>
              Frankly, I'm alarmed. For all my successes in scientific research, I have lacked any substantial findings of an afterlife. All I can find is death. An infinite nothingness. No remembering my loved ones, no seeing them again. No feeling their touch, or hearing their voices.
              <br></br><br></br>
              In my pursuit of eternity in this reality, I have foregone those niceties. Abandoned them. But you are a second chance. An opportunity to continue what I started, and hopefully in time, make amends with those I've wronged.
              <br></br><br></br>
              Attached to this letter, you will find a gift. A blade built just for you.
              <br></br><br></br>
              Keep it close. Never let anyone else take it. Stay alive.
              <br></br><br></br>
              For legacy.
              </Typography>
              </div>
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