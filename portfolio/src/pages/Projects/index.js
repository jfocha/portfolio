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
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const Projects = props => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openedPopoverId, setOpenedPopoverId] = React.useState(null);
    const [expanded, setExpanded] = React.useState(false);

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

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

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
                    overflow: 'auto',
                }}>
                {itemData.map((item, i) => (
                    <Box
                        key={i}
                        sx={{
                            m: 3,
                            boxShadow: 12,
                            borderRadius: '12px',
                            bgcolor: 'background.paper',
                        }}>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <div
                                aria-owns={open ? `mouse-over-popover-${i}` : undefined}
                                aria-haspopup="true"
                                onMouseEnter={(e) => handlePopoverOpen(e, i)}
                                onMouseLeave={handlePopoverClose}
                            >
                                <ImageListItem
                                    sx={{
                                        transition: "opacity .3s",
                                        ":hover": {
                                            opacity: 0.5,
                                        },
                                    }}>
                                    <CardHeader title={item.title} />
                                    <img
                                        src={require(`../../assets/${item.img}.jpg`).default}
                                        alt={item.title}
                                    />
                                    <ImageListItemBar
                                        // title={item.title}
                                        actionIcon={
                                            <Box sx={{ m: 1 }}>
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
                                                    <Typography sx={{ pl: 2 }}>GitHub</Typography>
                                                </IconButton>
                                            </Box>
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
                                    vertical: 'center',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'center',
                                    horizontal: 'center',
                                }}
                                onClose={handlePopoverClose}
                                disableRestoreFocus
                            >
                                <Typography sx={{ p: 1 }}>{item.description}</Typography>
                            </Popover>
                        </a>
                        <CardActions disableSpacing sx={{ mx: 2 }}>
                            <ExpandMore
                                expand={expanded}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleExpandClick();
                                }}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                            <Typography color="text.secondary">
                                Technologies Used
                            </Typography>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent sx={{ mx: 1, }} >{item.built.map((item, i) => (
                                <Typography
                                    key={`built-${i}`}
                                    color="text.secondary"
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                        mx: 2,
                                    }}>
                                    {item}
                                </Typography>
                            ))}
                            </CardContent>
                        </Collapse>
                        <Typography sx={{ mx: 3, }} color="text.secondary">
                            {item.summary}
                        </Typography>
                    </Box>
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
        summary: 'This is an online library management app where users can rent books for a specific time .',
        built: ['Apollo Server', 'Mongoose', 'bcrypt', 'Express', 'GraphQL', 'JSON Web Token', 'Apollo Client', 'React', 'Material UI', 'Stripe']
    },
    {
        img: 'pizza-hunt',
        title: 'Pizza Hunt',
        link: 'https://arcane-sea-80541.herokuapp.com/',
        description: 'Pizza discussion board.',
        summary: 'Pizza Hunt—a self-aware riff on social-media applications that already exist for other topics—lets users connect with each other based on their love of pizza. In Pizza Hunt, users can share and discuss their dream pizza-topping combinations. Pizza is ubiquitous in everyday life all over the world, and no application has ever been created with the sole purpose of facilitating discussions about it.',
        built: ['Mongoose', 'Express', 'JavaScript', 'HTML', 'CSS']
    },
    {
        img: 'deep-thoughts',
        title: 'Deep Thoughts',
        link: 'https://infinite-dusk-32225.herokuapp.com/',
        description: 'Social media site.',
        summary: 'A social media application where users can create an account, post their thoughts for others to see, and interact with other users through these thoughts.',
        built: ['Apollo Server', 'Mongoose', 'bcrypt', 'Express', 'GraphQL', 'JSON Web Token', 'Apollo Client', 'React', 'React Router']
    },
    {
        img: 'movie-buddy',
        title: 'Movie Buddy',
        link: 'https://jfocha.github.io/movie-buddy/index.html',
        description: 'A companion for the movies.',
        summary: "The landing page shows new releases with their corresponding poster art, plot summaries, and links to more info. The search function on the homepage makes an API call based on user input to display the searched movie's art, plot, and link. Next, there's a Favorites page that allows users to search for their favorite movies and then drag and drop said movies to a top ten ranking system. The ranks are persistent by localStorage. Also, there's a Movie Time! page that allows users to search for theaters prioritizing proximity.",
        built: ['JavaScript', 'HTML', 'CSS']
    },
    {
        img: 'note-taker',
        title: 'Note Taker',
        link: 'https://shrouded-gorge-91193.herokuapp.com/',
        description: 'Persistent note taker and keeper.',
        summary: 'An app used to write and save notes.',
        built: ['Express', 'JavaScript', 'HTML', 'CSS']
    },
    {
        img: 'budget-tracker',
        title: 'Budget Tracker',
        link: 'https://fierce-mountain-31398.herokuapp.com/',
        description: 'Learn to save your money.',
        summary: 'A handy app to track your budget that works online as well as offline.',
        built: ['Mongoose', 'Express', 'JavaScript', 'HTML', 'CSS']
    },
];

export default withWidth()(Projects);