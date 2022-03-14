// import React, {useEffect,useState} from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import AppBar from '@mui/material/AppBar';
// import CssBaseline from '@mui/material/CssBaseline';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import Divider from '@mui/material/Divider';
// import Button from '@mui/material/Button';
// import MenuIcon from '@mui/icons-material/Menu';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import ListItem from '@mui/material/ListItem';
// import List from '@mui/material/List';
// import ListItemText from '@mui/material/ListItemText';
// import Container from '@mui/material/Container';
// import { useNavigate } from 'react-router-dom';
// import FiberNewIcon from '@mui/icons-material/FiberNew';
// import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
// import WorkIcon from '@mui/icons-material/Work';
// import LogoutIcon from '@mui/icons-material/Logout';


// const drawerWidth = 240;

// export default function Navbar() {

//   const [name, setName] = useState("");
//   const [isOpened, setIsOpened] = useState(false);

//   var Obj = window.localStorage.getItem("response");
//   let menu = JSON.parse(Obj).data;
//   var path; 
//   var main;

//   menu.map((item,index)=>{
//     main = item.m_display_text;
//     path = item.m_logical_path;
//   })
 

//   let navigate = useNavigate();
  
//   useEffect(() => {
//     var Obj = window.localStorage.getItem("response");
//     setName(JSON.parse(Obj).userLogin.firstname);
//   },[]);


//   const handleSubmit = () => {
//     localStorage.clear();
//     navigate('/') 
//   }

//   const navigateTo = (index) =>{
//     // console.log(path[index])
//     navigate(path[index])
//   }

//   return (
    
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//             onClick={() => setIsOpened(!isOpened)}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml:5 }}>
//           Company Logo
//           </Typography>
//           <Button color="inherit">welcome {name}</Button>
//           <IconButton
//               size="large"
//               edge="end"
//               aria-label="account of current user"
//               aria-haspopup="true"
//               color="inherit"
//             >
//               <AccountCircle />
//             </IconButton>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         variant="permanent"
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
//         }}
//       >
//         <Toolbar />
//         <Box sx={{ overflow: 'auto', marginTop:-0.2 }}>
//           {/* <List > */}
//             {main.map((list,index)=>{
//             return(<div key={index}>
//             <ListItem button key={list} sx={{ marginY:1}} onClick={()=>{navigateTo(index)}}> 
            
//             {list}
//             </ListItem>
//             <Divider   />
//             </div>)
            
//             })}

//           <ListItem onClick={handleSubmit}  button key="Logout" sx={{ marginY:1}}>
//             {/* <LogoutIcon /> &nbsp; */}
//             Logout
//             </ListItem>
//           <Divider  sx={{ marginBottom:1}} />
//           {/* </List> */}
//             {/* <ListItem onClick={()=>navigate('/empsep')}  button key="IT Employee Seperation">
//             <PersonRemoveIcon /> &nbsp;
//              Employee Seperation 
//             </ListItem>
//             <Divider  sx={{ marginY:1}}/>
//             <ListItem onClick={()=>navigate('/form')} button key="IT Assets Requisition">
//             <WorkIcon /> &nbsp;
//             IT Assets Requisition 
//             </ListItem>
//             <Divider  sx={{ marginY:1}} /> */}

//         </Box>
//       </Drawer>
//     </Box>
//   );
// }
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
import Divider from '@mui/material/Divider';
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
      <AppBar position="fixed" open={open}>
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