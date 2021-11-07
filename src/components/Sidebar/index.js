import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import EmailIcon from '@mui/icons-material/Email';
import Stack from '@mui/material/Stack';

export default function SideBar() {
    return (
        <Stack spacing={2} position="fixed" sx={{
            transform: "scale3d(2, 2, 1)",
            
        }}>
            <a href='https://github.com/jfocha/' target="_blank" rel="noopener noreferrer">
                <GitHubIcon sx={{
                    color: 'white',
                    ":hover": {
                        transform: "scale3d(1.5, 1.5, 1)",
                    },
                }} />
            </a>
            <a href='https://www.linkedin.com/in/joseph-focha-24492a5b/' target="_blank" rel="noopener noreferrer"><LinkedInIcon sx={{
                    color: 'white',
                    ":hover": {
                        transform: "scale3d(1.5, 1.5, 1)",
                    },
                }} />
            </a>
            <a href='https://docs.google.com/document/d/1NDvAO4nB7eQvfsk27bsR7gYhgK29kH5k/edit' target="_blank" rel="noopener noreferrer"><ContactPageIcon sx={{
                    color: 'white',
                    ":hover": {
                        transform: "scale3d(1.5, 1.5, 1)",
                    },
                }} />
            </a>
            <a href='mailto:jfocha@gmail.com' target="_blank" rel="noopener noreferrer"><EmailIcon sx={{
                    color: 'white',
                    ":hover": {
                        transform: "scale3d(1.5, 1.5, 1)",
                    },
                }} />
            </a>
        </Stack>
    );
}