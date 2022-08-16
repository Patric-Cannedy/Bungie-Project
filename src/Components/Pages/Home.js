import React from 'react';
import { Grid, } from '@mui/material';
import { ThemeProvider, useTheme } from '@mui/styles';
import '../../CSS/styles.css';
import image1 from '../../images/HD-wallpaper-destiny-popular-game-destiny-red-logo-red-carbon-fiber-background-destiny-logo-destiny-emblem.jpg';
import image2 from '../../images/destiny-2-community-manager.jpg'
import image3 from '../../images/istockphoto-1251362621-170667a.jpg'
import { useHistory } from 'react-router';
import { useRef } from 'react';

const Home = ({bottomRef}) => {
    const theme = useTheme();
    const newsItems = [
        {
            title: 'Community',
            subTitle: 'Coming Soon!',
            url: image1,
            pageURL: '/construction',
        },
        {
            title: 'Lastest Tips',
            subTitle: 'Coming Soon!',
            url: image2,
            pageURL: '/construction',
        },
        {
            title: 'Shop',
            subTitle: 'Coming Soon!',
            url: image3,
            pageURL: '/construction',
        },
    ]
    let history = useHistory();
    const go = (e) => {
        e.preventDefault();
        history.push('/comingsoon');
    }


    return(
        <div className={'main-content'}>
            <div className={'upper-container'}>
                <div className={'upper-bg'}>
                    <Grid container spacing={0} style={{minHeight: '70vh'}}>
                    <ThemeProvider theme={theme}>
                        <div>
                            {/* Put animation here later */}
                        </div>
                    </ThemeProvider>
                    </Grid>
                </div>
                <div className={'middle-container'}>
                    <div className={'body-headers'}>
                        <span className={'news'}>Featured</span>
                    </div>
                    {/* ADD links to these */}
                    <Grid container spacing={1} style={{minHeight: '40vh', marginTop: '2rem', marginLeft: '.001rem'}} className={'news-content'}> 
                        <Grid item xs={1} sx={{minWidth: '25vw', }} className={'pinned1'} onClick={go}>
                                <a href='/comingsoon'>
                                    <div className='pinned-title'>Raid Weapons</div>
                                </a>
                        </Grid>
                        <Grid item xs={1} sx={{minWidth: '15vw'}} className={'pinned2'} onClick={go}>
                                <a href='/comingsoon'>
                                    <div className='pinned-title'>New Weapons</div>
                                </a>
                        </Grid>
                        <Grid item xs={1}  sx={{minWidth: '15vw'}} className={'pinned3'} onClick={go}>
                                <a href='/comingsoon'>
                                    <div className='pinned-title'>Trials Weapons</div>
                                </a>
                        </Grid>
                    </Grid>
                </div>
                <div className={'middle-container'}>
                    <div className={'body-headers'}>
                        <span className={'news'}>News!</span>
                    </div>
                    <Grid container spacing={2}  direction="column" style={{minHeight: '40vh', marginTop: '3rem', marginLeft: '.85rem'}} className={'pinned-stories'}>
                        {newsItems.map(newsItem => {
                        const {title, pageUrl, subTitle} = newsItem;
                        return (
                            <>
                        <Grid container spacing={2}>
                            <Grid item xs={12} style={{minHeight: '20vh', maxWidth: '15vw', marginBottom:'3rem', backgroundImage: `url(${newsItem.url})`}} className={'thumbnails'}>
                            </Grid>
                            <Grid item xs container direction="column" spacing={2} justifyContent="flex-end">
                                <Grid item xs>
                                    <h4 className={'title'}>
                                        {title}
                                    </h4>
                                    <h1 className={'subTitle'}>
                                        {subTitle}
                                    </h1> 
                                </Grid> 
                            </Grid>
                        </Grid>
                        </>
                        );
                        })}   
                    </Grid>
                </div>
            </div>
            <div className={'bottom'} ref={bottomRef}></div>
        </div>    
    )
}


export default Home;