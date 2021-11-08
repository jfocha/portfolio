import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import EmailIcon from '@mui/icons-material/Email';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';

export default function SideBar() {

    return (
        <Stack
            spacing={2}
            position="fixed"
            sx={{
                transform: "scale3d(2, 2, 1)",
            }}>
            {linkData.map((link, i) => (
                <a key={`sidebar-link-${i}`} href={link.name} target="_blank" rel="noopener noreferrer">
                    <SvgIcon component={link.icon} className='icon' />
                </a>
            ))}
        </Stack>
    );
}

const linkData = [
    { name: 'https://github.com/jfocha/', icon: GitHubIcon },
    { name: 'https://www.linkedin.com/in/joseph-focha-24492a5b/', icon: LinkedInIcon },
    { name: 'https://docs.google.com/document/d/1NDvAO4nB7eQvfsk27bsR7gYhgK29kH5k/edit', icon: ContactPageIcon },
    { name: 'mailto:jfocha@gmail.com', icon: EmailIcon },
];