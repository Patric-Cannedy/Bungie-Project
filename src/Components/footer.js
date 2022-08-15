import React from "react";
import { Grid, } from '@mui/material';
import '../CSS/styles.css';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Footer = () => {
    const footerItems = [
        {
            title: 'Email',
            subTitle: 'paca7545@colorado.edu',
            icon: <MailIcon sx={{fontSize: '15px'}}/>,
        },
        {
            title: 'Phone',
            subTitle: '+1 719-200-7483',
            icon: <PhoneAndroidIcon sx={{fontSize: '15px'}}/>,
        },
        {
            title: 'Portfolio',
            subTitle: 'github.com/Patric-Cannedy',
            url: 'https://github.com/Patric-Cannedy',
            icon: <GitHubIcon sx={{fontSize: '15px'}}/>,
        },
        {
            title: 'LinkedIn',
            subTitle: 'Pcannedy',
            url: 'https://www.linkedin.com/in/Pcannedy/',
            icon: <LinkedInIcon sx={{fontSize: '15px'}}/>,
        }
    ]
    return (
        <div className={'footer-content'}>
            <Grid container spacing={1} className={'footItems'} style={{minHeight: '20vh', borderTop: '1px rgb(107, 106, 106) solid',}}>
                {footerItems.map(footerItem => {
                    const {title, url, subTitle, icon} = footerItem;
                        return (
                            <>
                                <Grid item xs={3}>
                                        <h4 className={'fTitle'}>
                                            {title}
                                        </h4>
                                        <h4 className={'fSubTitle'}>
                                           {icon}
                                           <a href={url}>{subTitle}</a>
                                        </h4>                                     
                                </Grid>                           
                            </>
                        );
                })}
            </Grid>
        </div>
    )
}