import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import coverImage from '../../assets/portfolio-pic.jpg';
import { boxSizing } from '@mui/system';


const darkTheme = createTheme({ palette: { mode: 'dark' } });
export default function About() {
    return (
        <Box sx={{
            // width: '100%', 
            // height: '100%', 
            // maxHeight: '100vh',
            // overflow: 'auto'
        }}
        >
            <Box
                sx={{
                    fontFamily: 'Permanent Marker',
                    fontWeight: 'medium',
                    textAlign: 'center',
                    fontSize: '7rem',
                    color: 'white',
                    
                    lineHeight: 2
                }}
            >
                Joseph Focha
            </Box>
            <Box
                sx={{
                    fontFamily: 'default',
                    fontStyle: 'oblique',
                    textAlign: 'center',
                    fontSize: '1.5rem',
                    letterSpacing: 10,
                    color: 'white',
                    lineHeight: 3
                }}
            >
                Full Stack Web Developer
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    color: 'white',
                    // overflow: 'hidden',
                    // borderRadius: '12px',
                    // boxShadow: 1,
                    fontFamily: 'default',
                    fontWeight: 'medium',
                }}
            >

                <Box
                    component="img"
                    sx={{
                        height: '100%',
                        width: 200,
                        //   maxHeight: { xs: 233, md: 167 },
                        //   maxWidth: { xs: 350, md: 250 },
                        borderRadius: '12px',
                        //   ":hover": {
                        //     boxShadow: 6,
                        //   },
                    }}
                    alt="Joseph's face."
                    src={coverImage}
                />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: { xs: 'center', md: 'flex-start' },
                        m: 3,
                        minWidth: { md: 350 },
                    }}
                >
                    <Box component="span" sx={{ fontSize: 20, mt: 1, }}>
                        Full stack web developer educated at UC Berkeley Extension and San Francisco State University. Skills in JavaScript, MongoDB, Mongoose, mySQL, Sequelize, Express, Apollo Server, GraphQL, Apollo Client, React, React Native, Material UI, Node, jQuery, APIs, RESTful API, GitHub, Heroku, CSS, Bootstrap, HTML, Java, C++ and strengths in meeting deadlines, creativity, and teamwork. Passionate about approaching programming challenges from different angles and collaborating with others to create meaningful web applications. Excited to develop responsive websites. Positioned to provide unique perspectives on how end users interact with websites and software platforms by leveraging background in digital marketing and finance. Known for perseverance and positivity.
                    </Box>
                    
                </Box>
            </Box>
        </Box>
    );
}