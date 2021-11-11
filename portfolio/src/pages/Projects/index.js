import * as React from 'react';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

const Projects = props => {

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

    const getGridListCols = () => {
        if (isWidthUp('md', props.width)) {
            return 2;
        }
        return 1;
    }

    return (
        <>
            <ImageListItem
                key="Subheader"
                sx={{ display: 'flex' }}>
                <ListSubheader
                    component="div"
                    sx={{
                        fontFamily: 'default',
                        fontStyle: 'oblique',
                        letterSpacing: 10,
                        fontSize: '3rem',
                        textAlign: 'center',
                        pt: '4rem',
                        color: 'white',
                        backgroundColor: 'inherit',
                        width: '100%',
                    }}>
                    Projects
                </ListSubheader>
            </ImageListItem>
            <ImageList
                cols={getGridListCols()}
                sx={{
                    width: '100%',
                    height: '100%',
                    overflow: 'auto'
                }}>
                {itemData.map((item, i) => (
                    <a key={item.img} href={item.link} target="_blank" rel="noopener noreferrer">
                        <div
                            aria-owns={open ? `mouse-over-popover-${i}` : undefined}
                            aria-haspopup="true"
                            onMouseEnter={(e) => handlePopoverOpen(e, i)}
                            onMouseLeave={handlePopoverClose}
                        >
                            <ImageListItem sx={{ m: 3 }}>
                                <img
                                    src={require(`../../assets/${item.img}.jpg`).default}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title={item.title}
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
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.open(`https://github.com/jfocha/${item.img}`, "_blank");
                                            }}>
                                            <GitHubIcon
                                                sx={{
                                                    transform: "scale3d(1.5, 1.5, 1)",
                                                    color: 'white',
                                                }} />
                                        </IconButton>
                                    }
                                />
                            </ImageListItem>
                        </div>
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
        </>
    );
}

const itemData = [
    {
        img: 'book-scouts',
        title: 'Book Scouts',
        link: 'https://obscure-dusk-46095.herokuapp.com/',
        description: 'Online library management.',
    },
    {
        img: 'pizza-hunt',
        title: 'Pizza Hunt',
        link: 'https://arcane-sea-80541.herokuapp.com/',
        description: 'Pizza discussion board.',
    },
    {
        img: 'deep-thoughts',
        title: 'Deep Thoughts',
        link: 'https://infinite-dusk-32225.herokuapp.com/',
        description: 'Social media site.',
    },
    {
        img: 'movie-buddy',
        title: 'Movie Buddy',
        link: 'https://jfocha.github.io/movie-buddy/index.html',
        description: 'A companion for the movies.',
    },
    {
        img: 'note-taker',
        title: 'Note Taker',
        link: 'https://shrouded-gorge-91193.herokuapp.com/',
        description: 'Persistent note taker and keeper.',
    },
    {
        img: 'budget-tracker',
        title: 'Budget Tracker',
        link: 'https://fierce-mountain-31398.herokuapp.com/',
        description: 'Learn to save your money.',
    },
];

export default withWidth()(Projects);