import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        background: '#ff742b',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        float: 'left',
        [theme.breakpoints.up('sm')]: {
        display: 'block',
        },
    },
    settings: {
        // flexGrow: 1,
        width: 'auto',
        marginLeft: theme.spacing(2),
        alignItems: 'center',
        display: 'flex',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 1),
        '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '90%',
        [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: '80%',
        },
    },
    inputRoot: {
      display: 'flex',
      color: 'inherit',
      '&:hover': {
        backgroundColor: 'white',
      },
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      color: '#000',
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        color: '#ff742b',
        justifyContent: 'center',
        '&:hover': {
          color: '#ff742b',
        }
    },
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#ff742b"}}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            {props.UserName}
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon style={{color: '#ff742b'}} />
            </div>
            <InputBase
              placeholder="Search stories by title, url or author"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              value={props.SearchInput}
              onChange={props.OnChange}
            />
          </div>
          <Typography className={classes.settings} variant="h6" noWrap>
            <SettingsIcon /> 
            Settings
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
