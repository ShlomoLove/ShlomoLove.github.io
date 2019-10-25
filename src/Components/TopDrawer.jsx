import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InfoIcon from '@material-ui/icons/Info';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import CodeSharpIcon from '@material-ui/icons/CodeSharp';
import DeveloperBoardSharpIcon from '@material-ui/icons/DeveloperBoardSharp';
import ImportantDevicesSharpIcon from '@material-ui/icons/ImportantDevicesSharp';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import WebIcon from '@material-ui/icons/Web';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import HomeIcon from '@material-ui/icons/Home';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 0),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 0,
    padding: theme.spacing(0),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

export default function PersistentDrawerRight(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className='toolbar'>
          <Typography variant="h6" noWrap className={classes.title}>
            Scott P. Nassau
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Typography paragraph>
          
        </Typography>
        <Typography paragraph>
          
        </Typography>
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem button key='Home' onClick={(e)=>{props.drawerClick('home'); handleDrawerClose();}}>
              <ListItemIcon> <AppsSharpIcon /> </ListItemIcon>
              <ListItemText primary='Home' />
            </ListItem>
            <ListItem button key='About' onClick={(e)=>{props.drawerClick('about'); handleDrawerClose();}}>
              <ListItemIcon> <AccountCircleIcon /> </ListItemIcon>
              <ListItemText primary='About' />
            </ListItem>
            <ListItem button key='Resume' onClick={(e)=>{props.drawerClick('resume'); handleDrawerClose();}}>
              <ListItemIcon> <BusinessCenterIcon /> </ListItemIcon> <ListItemText primary='Resume' />
            </ListItem>
            <ListItem button key='Articles'onClick={(e)=>{props.drawerClick('articles'); handleDrawerClose();}}>
              <ListItemIcon> <CreateOutlinedIcon /> </ListItemIcon> <ListItemText primary='Articles' />
            </ListItem>
            <ListItem button key='Projects' onClick={(e)=>{props.drawerClick('apps'); handleDrawerClose();}}>
              <ListItemIcon> <CodeSharpIcon /> </ListItemIcon> <ListItemText primary='Projects' />
            </ListItem>
            <ListItem button key='Contact' onClick={(e)=>{props.drawerClick('contact'); handleDrawerClose();}}>
              <ListItemIcon> <ContactPhoneIcon /> </ListItemIcon> <ListItemText primary='Contact' />
            </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

