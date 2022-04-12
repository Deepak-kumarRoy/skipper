import React, {useEffect,useState} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [isOpened, setIsOpened] = useState(false);
  

  var Obj = window.localStorage.getItem("response");
  let menu = JSON.parse(Obj).data;
  var path; 
  var main;

  menu.map((item,index)=>{
    main = item.m_display_text;
    path = item.m_logical_path;
  })
 

  let navigate = useNavigate();
  
  useEffect(() => {
    var Obj = window.localStorage.getItem("response");
    setName(JSON.parse(Obj).userLogin.firstname);
  },[]);


  const handleSubmit = () => {
    localStorage.clear();
    navigate('/') 
  }

  const navigateTo = (index) =>{
    // console.log(path[index])
    navigate(path[index])
  }


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* <CssBaseline /> */}
      <AppBar position="fixed" open={open} style={{backgroundColor: "#293d3d"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Company Logo
          </Typography>
          <Button color="inherit"> {name}</Button>
          <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#2f4f6f',
          },
        }}
        variant="persistent"
        anchor="left"
        // className='colours'
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        {/* <Divider /> */}
        <ListItem  onClick={()=>{navigate('/dashboard')}}   button key="Dashboard" sx={{ marginY:1, color:"	#E8E8E8"}}>
            {/* <LogoutIcon /> &nbsp; */}
            Dashboard
            </ListItem>
          {/* <Divider  sx={{ marginBottom:1}} /> */}
        {main.map((list,index)=>{
            return(<div key={index}>
            <ListItem button key={list} sx={{ marginY:1,color:"	#E8E8E8"}} onClick={()=>{navigateTo(index)}}> 
            
            {list}
            </ListItem>
            {/* <Divider   /> */}
            </div>)
            
            })}
        <ListItem onClick={handleSubmit}   button key="Logout" sx={{ marginY:1, color:"	#E8E8E8"}}>
            {/* <LogoutIcon /> &nbsp; */}
            Logout
            </ListItem>
      </Drawer>
    </Box>
  );
}