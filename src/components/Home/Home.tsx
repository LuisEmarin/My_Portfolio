import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {makeStyles} from '@material-ui/core'
import { classicNameResolver } from 'typescript';

const useStyles = makeStyles({
    navigation: {
        display: 'flex',
        listStyle: 'none'
    },
    nav_a:{
        display: 'block',
        padding: '1em',
        color: 'black'
    },
    logo_navigation: {
        listStyle: 'none',
        textTransform: 'uppercase',
        textDecoration: 'none'
    },
})

export const Home = () => {
    const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                    Luis Portfolio
                    </Typography>
                    <ul className={`${classes.navigation} ${classes.logo_navigation}`}>
                        <li>
                            <a href="/Portfolio" className= {classes.nav_a} >Portfolio</a>
                        </li>
                        <li>
                            <a href='/Resume' className= {classes.nav_a} >Resume</a>
                        </li>
                        <li>
                            <a href='/Contact'className= {classes.nav_a} >Contact</a>
                        </li>
                    </ul>
                </Toolbar>
            </AppBar>
    </Box>
    )
}