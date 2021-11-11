import * as React from 'react';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';

export default function SideBar(props) {

    const { linkData } = props;

    return (
        <Stack
            spacing={2}
            position="fixed"
            sx={{
                transform: "scale3d(2, 2, 1)",
            }}>
            {linkData.map((link, i) => (
                <a key={`sidebar-link-${i}`} href={link.url} target="_blank" rel="noopener noreferrer">
                    <SvgIcon component={link.icon} className='icon' />
                </a>
            ))}
        </Stack>
    );
}