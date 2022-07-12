import React from 'react';
import Tiles from '../Tiles';
import { Box, Grid } from '@mui/material';
import { makeStyles, ThemeProvider, useTheme } from '@mui/styles';
import DisplayItem from '../DisplayItem';
import { useState, useEffect } from 'react';

const useStyles = makeStyles(theme => ({
    billBoardPadding: {
        paddingTop: '40px',

      },
}));


const Home = ({showPage, togglePreview, itemIcon, itemName, flavorText, tierTypeName, typeDisplayName}) => {
    const theme = useTheme();
    const classes = useStyles();

    return(
        <ThemeProvider theme={theme}>
            <div style={{ display: showPage ? 'none' : 'block' }}>
            <Grid container spacing={0}   style={{ minHeight: '100vh' }}>                    
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={10}>
                    <div className={classes.billBoardPadding}>
                        <Box sx={{ width: 1050, height: 350, backgroundColor: 'primary.dark', '&:hover': { backgroundColor: 'primary.main', opacity: [0.9, 0.8, 0.7],},}}
                            display = 'flex' alignItems="center" justifyContent='center' >
                            <div id='contentContainer'>
                                <Tiles />
                            </div>
                        </Box>
                    </div>
                </Grid>  

                <Grid item xs={2}>
                </Grid>
                <Grid item xs={10}>
                    <div className={classes.billBoardPadding}>
                        <Box sx={{ width: 1050, height: 350, backgroundColor: 'primary.dark', '&:hover': { backgroundColor: 'primary.main', opacity: [0.9, 0.8, 0.7],},}}
                            display = 'flex' alignItems="center" justifyContent='center' >
                            <div id='contentContainer'>
                                <Tiles />
                            </div>
                        </Box>
                    </div>
                </Grid>

                <Grid item xs={2}>
                </Grid>
                <Grid item xs={3}>
                    <div className={classes.billBoardPadding}>
                        <Box sx={{ width: 400, height: 650, backgroundColor: 'primary.dark', '&:hover': { backgroundColor: 'primary.main', opacity: [0.9, 0.8, 0.7],},}}
                            display = 'flex' alignItems="center" justifyContent='center' >
                            <div id='contentContainer'>
                                <Tiles />
                            </div>
                        </Box>
                    </div>
                </Grid> 

                <Grid item xs={2}>
                    <div className={classes.billBoardPadding}>
                        <Box sx={{ width: 573, height: 650, backgroundColor: 'primary.dark', '&:hover': { backgroundColor: 'primary.main', opacity: [0.9, 0.8, 0.7],},}}
                            display = 'flex' alignItems="center" justifyContent='center' >
                            <div id='contentContainer'>
                                <Tiles />
                            </div>
                        </Box>
                    </div>
                </Grid>   
            </Grid>
            </div>
            <DisplayItem showPage={showPage} itemIcon={itemIcon} itemName={itemName} flavorText={flavorText} tierTypeName={tierTypeName} typeDisplayName={typeDisplayName}/>
        </ThemeProvider>        
    )
}


export default Home;