import React from 'react';

import "./css/NavBar.css"
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CreateIcon from '@material-ui/icons/Create';
import SearchIcon from '@material-ui/icons/Search';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: "rgba(45,99,127,1)",
    borderRight: "1px solid rgba(189, 195, 199, 0.5)", 
    marginRight: "3em",
    minHeight: "100vh",
    boxShadow: "5px 0 5px -2px #888",
    color: "#ffffff"
  },
  nested: {
    paddingLeft: theme.spacing(9),
  },
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
};

export const NavBar = ({ currentUser, onSignOut }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
      <div id="NavBar" 
        style={{
          marginRight: "2em", 
          minHeight: "100vh",
          position: "sticky",
          top: "0"
          }}>
        <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
            <ListSubheader component="div" id="nested-list-subheader">
                <ListItemLink button 
                    href="/"
                    style={{
                        fontFamily: "'Bungee Inline', cursive", 
                        color: "#ffffff",
                        fontSize: "1.75em",
                        marginLeft: "0.75em"
                    }}
                >
                    TECHR
                    <i className="fas fa-dice-d20 fa fa-spin-hover"></i>
                    LLMANCER
                </ListItemLink>         
            </ListSubheader>
        }
        className={classes.root}
        >
            <ListItemLink button href="/sign_in">
                    <ListItemIcon>
                        <AccountCircleIcon style={{color: "#ffffff"}} />
                    </ListItemIcon>
                    <ListItemText primary="Sign In / Sign Up" />
                </ListItemLink>
            <ListItemLink button href="/characters">
                    <ListItemIcon>
                        <CreateIcon style={{color: "#ffffff"}} />
                    </ListItemIcon>
                    <ListItemText primary="Characters" />
                </ListItemLink>
            <ListItemLink button href="/generator">
                <ListItemIcon>
                    <i className="fas fa-dice" style={{color: "#ffffff"}}></i>
                </ListItemIcon>
                <ListItemText primary="Generator" />
            </ListItemLink>
            <ListItemLink button href="/scheduler">
                <ListItemIcon>
                    <EventAvailableIcon style={{color: "#ffffff"}} />
                </ListItemIcon>
                <ListItemText primary="Scheduler" />
            </ListItemLink>
            <ListItem button onClick={handleClick}>
                    <ListItemIcon>
                        <SearchIcon style={{color: "#ffffff"}} />
                    </ListItemIcon>
                    <ListItemText primary="Library" />
                    {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Divider />
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemLink button className={classes.nested} href="/library/races">
                        <ListItemText primary="Races" />
                    </ListItemLink>
                    <ListItemLink button className={classes.nested} href="/library/classes">
                        <ListItemText primary="Classes" />
                    </ListItemLink>
                    <ListItemLink button className={classes.nested} href="/library/spells">
                        <ListItemText primary="Spells" />
                    </ListItemLink>
                    <ListItemLink button className={classes.nested} href="/library/weapons">
                        <ListItemText primary="Weapons" />
                    </ListItemLink>
                    <ListItemLink button className={classes.nested} href="/library/magic-items">
                        <ListItemText primary="Magic Items" />
                    </ListItemLink>
                </List>
            </Collapse>
        </List>
        
    </div>
  );
}
