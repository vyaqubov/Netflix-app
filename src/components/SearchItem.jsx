import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { BsPlusCircle } from 'react-icons/bs';
import photo from '../assets/img/no-photo.png'
import { db } from '../firebase';
import { arrayUnion, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { UserAuth } from '../context/AuthContext';

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

    export default function SearchItem({ obj }) {
        const [expanded, setExpanded] = React.useState(false);
        const [id, setId] = React.useState(0);
        const {user} = UserAuth();
        const [like, setLike] = React.useState(false);
        const movieId = doc(db, 'users', `${user?.email}`)

        const handleExpandClick = () => {
            setExpanded(!expanded);
        };

    React.useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            if (doc.data()) {
                doc.data().savedMovies.map(obje => obj.id === obje.id ? setId(obje.id) : '')
            }
        });
    }, [user?.email]);

    async function savedShows() {
        if (user?.email) {
            setLike(!like)
            await updateDoc(movieId, {
                savedMovies: arrayUnion({
                    id: obj.id,
                    title: obj.title || obj.name,
                    img: obj.backdrop_path || obj.poster_path
                })
            });
        } else {
            alert('Please log in to saved a movie')
        }
    }
    
    return (
        <Card className='w-[200px] md:w-[350px] relative' >
            <CardHeader
                className='whitespace-nowrap'
                title={obj.title}
                subheader={obj.release_date}
            />
            {
                obj.backdrop_path || obj.poster_path ? <img className={`w-full h-52 object-cover md:${obj.poster_path ? "h-[150px]" : "h-full"}`} src={`https://image.tmdb.org/t/p/w500/${obj.backdrop_path || obj.poster_path}`} alt="" />
                    : <img className='w-full h-52' src={photo} alt='No_photo' />
            }
            <CardActions disableSpacing>
                <IconButton onClick={savedShows} aria-label="add to favorites">
                    {
                        obj.id === id ? <FaHeart className='text-2xl text-red-600' /> : like ? <FaHeart className='text-2xl text-red-600' /> : <FaRegHeart className='text-gray-300 text-2xl' />
                    }
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <BsPlusCircle />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit className=''>
                <CardContent>
                    <Typography paragraph>
                        Original title: <strong>{obj.original_title}</strong><br />
                        Popularity: <strong>{obj.popularity}</strong><br />
                        Vote: <strong>{obj.vote_average}</strong>
                    </Typography>
                    <Typography paragraph>Overview:</Typography>
                    <Typography paragraph>
                        {
                            obj.overview
                        }
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
