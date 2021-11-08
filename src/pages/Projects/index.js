import * as React from 'react';
// import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

export default function Projects() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openedPopoverId, setOpenedPopoverId] = React.useState(null);

    const handlePopoverOpen = (event, popoverId) => {
        setAnchorEl(event.currentTarget);
        setOpenedPopoverId(popoverId);
    }

    const handlePopoverClose = () => {
        setOpenedPopoverId(null);
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);


    return (
        <ImageList
            sx={{
                width: '100%', height: '100%', overflow: 'auto'
            }}>
            <ImageListItem
                key="Subheader"
                cols={2}>
                <ListSubheader
                    component="div"
                    sx={{
                        fontFamily: 'default',
                        fontStyle: 'oblique',
                        letterSpacing: 10,
                        // fontWeight: 'bold',
                        fontSize: '3rem',
                        textAlign: 'center',
                        pt: '4rem',
                        color: 'white',
                        backgroundColor: 'inherit'
                    }}>
                    Projects
                </ListSubheader>
            </ImageListItem>
            {itemData.map((item, i) => (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <Typography
                        aria-owns={open ? `mouse-over-popover-${i}` : undefined}
                        aria-haspopup="true"
                        // onMouseEnter={handlePopoverOpen}
                        onMouseEnter={(e) => handlePopoverOpen(e, i)}
                        onMouseLeave={handlePopoverClose}
                    >
                        <ImageListItem
                            key={item.img}

                            sx={{
                                m: 3,
                                // borderRadius: '12px',
                                // boxShadow: 3,
                                // ":hover": {
                                //     boxShadow: 12,
                                // },
                            }}>
                            <img
                                src={require(`../../assets/${item.img}.jpg`).default}
                                alt={item.title}
                                loading="lazy"

                            />
                            <ImageListItemBar
                                title={item.title}
                                // subtitle={item.description}
                                actionIcon={
                                    <IconButton
                                        sx={{
                                            pr: 2,
                                            color: 'rgba(255, 255, 255, 0.54)',
                                            ":hover": {
                                                transform: "scale3d(1.4, 1.4, 1)",
                                            },
                                        }}
                                        aria-label={`info about ${item.title}`}
                                    >
                                        <a href={`https://github.com/jfocha/${item.img}`} target="_blank" rel="noopener noreferrer">
                                            <GitHubIcon
                                                sx={{
                                                    transform: "scale3d(1.5, 1.5, 1)",
                                                    color: 'white',
                                                }} />
                                        </a>
                                    </IconButton>
                                }
                            />

                        </ImageListItem>
                    </Typography>
                    <Popover
                        id={`mouse-over-popover-${i}`}
                        sx={{
                            pointerEvents: 'none',
                        }}
                        open={openedPopoverId === i}
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'center',
                            horizontal: 'left',
                        }}
                        onClose={handlePopoverClose}
                        disableRestoreFocus
                    >
                        <Typography sx={{ p: 1 }}>{item.description}</Typography>
                    </Popover>
                </a>
            ))}
        </ImageList>
    );
}

const itemData = [
    {
        img: 'book-scouts',
        title: 'Book Scouts',
        author: '@bkristastucchio',
        link: 'https://obscure-dusk-46095.herokuapp.com/',
        description: 'Online library management.',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'pizza-hunt',
        title: 'Pizza Hunt',
        author: '@helloimnik',
        link: 'https://arcane-sea-80541.herokuapp.com/',
        description: 'Pizza discussion board.',
    },
    {
        img: 'deep-thoughts',
        title: 'Deep Thoughts',
        author: '@nolanissac',
        link: 'https://infinite-dusk-32225.herokuapp.com/',
        description: 'Social media site.',
        cols: 2,
    },
    {
        img: 'movie-buddy',
        title: 'Movie Buddy',
        author: '@rollelflex_graphy726',
        link: 'https://jfocha.github.io/movie-buddy/index.html',
        description: 'A companion for the movies.',
    },
    {
        img: 'note-taker',
        title: 'Note Taker',
        author: '@arwinneil',
        link: 'https://shrouded-gorge-91193.herokuapp.com/',
        description: 'Persistent note taker and keeper.',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'budget-tracker',
        title: 'Budget Tracker',
        author: '@hjrc33',
        link: 'https://fierce-mountain-31398.herokuapp.com/',
        description: 'Learn to save your money.',
        cols: 2,
    },
];