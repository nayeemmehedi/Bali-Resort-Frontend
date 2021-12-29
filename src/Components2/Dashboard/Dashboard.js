
import React,{useState,useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Footer from '../../Components/Footer/Footer';
import Box from '@mui/material/Box';
import HomeIcon from '@material-ui/icons/Home';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import EvStationIcon from '@material-ui/icons/EvStation';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {useHistory} from "react-router-dom"

const drawerWidth = 280;





const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    
  },
  

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
page:{
      width: "100%",
      marginTop:"65px",
     
      
  }
  



}));



function Dashboard({children}) {

  let user = JSON.parse(localStorage.getItem("user"));


  const history= useHistory()



  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch(`https://shielded-basin-10438.herokuapp.com/ResortAdmin1`)
      .then((response) => response.json())
      .then((json) => setdata(json));
  }, []);


  const [data1, setdata1] = useState("");
  
   
     
   useEffect(() => {

   const newdata = data.filter(v=> v.email == user.email);
   setdata1(newdata[0]?.email)
 
}, [data]);






  const drawer = (
    <div  className={classes.root} style={{backgroundColor:'black' ,height:'100vh' ,}}>
      <div className={classes.toolbar} />
      
      <List style={{marginTop:"60px"}}>

       <ListItem button  onClick={()=>history.push("/")}>

           


           <ListItemIcon><HomeIcon className="text-danger"/></ListItemIcon>

          
          
           <ListItemText className="text-danger "><span class="star">Home</span></ListItemText>
          
          </ListItem>
        


         

          {(user &&  user.email == data1 ) ? <div>
          
          


            

           <ListItem button  onClick={()=>history.push("/makeAdmin")}>

           


           <ListItemIcon><SupervisorAccountIcon className="text-danger "/></ListItemIcon>

          
          
           <ListItemText className="text-danger "><span className="star">Make Admin</span></ListItemText>
          
          </ListItem>


           <ListItem button  onClick={()=>history.push("/addProduct")}>

           


           <ListItemIcon><InboxIcon className="text-danger "/></ListItemIcon>

          
          
           <ListItemText className="text-danger "><span className="star">Add Resort</span></ListItemText>
          
          </ListItem>


           <ListItem button  onClick={()=>history.push("/ManageProducts")}>

           


           <ListItemIcon>< NoteAddIcon className="text-danger "/></ListItemIcon>

          
          
           <ListItemText className="text-danger "><span className="star">Manage Resort</span></ListItemText>
          
          </ListItem>


           <ListItem button  onClick={()=>history.push("/ManageAllOrders")}>

           


           <ListItemIcon><EvStationIcon className="text-danger "/></ListItemIcon>

          
          
           <ListItemText className="text-danger "><span className="star">Manage Booking</span></ListItemText>
          
          </ListItem>

           </div>  : <div> <ListItem button  onClick={()=>history.push("/review")}>

           


           <ListItemIcon><InboxIcon className="text-danger "/></ListItemIcon>

          
          
           <ListItemText className="text-danger "><span className="star">Review Us</span></ListItemText>
          
          </ListItem>

          


           <ListItem   onClick={()=>history.push("/myOrder")}>

           


           <ListItemIcon><MailIcon  className="text-danger "/></ListItemIcon>

          
          
           <ListItemText className="text-danger "><span className="star">My Resort</span></ListItemText>
          
          </ListItem>



           <ListItem button  onClick={()=>history.push("/pay")}>

           


           <ListItemIcon><ShoppingCartIcon className="text-danger "/></ListItemIcon>

          
          
           <ListItemText className="text-danger "> <span className="star">Payment History</span> </ListItemText>
          
          </ListItem>
 </div>}


            <ListItem button  onClick={()=> 

     {
    localStorage.clear();
    history.push("/");
    window.location.reload()} }>

           


           <ListItemIcon>< BubbleChartIcon className="text-danger " /></ListItemIcon>

          
          
           <ListItemText className="text-danger star"> <span class="star">Log Out</span> </ListItemText>
          
          </ListItem>
         



      
       
    

      </List>
    </div>
  );




  

  return (
    <div className={classes.root}>

    

      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>

       
       <Toolbar style={{backgroundColor:'#413b63'}}>
         
         <MenuIcon />
       
      
     </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>

      <div className={classes.page}>
      {children}
       <Footer></Footer>

      </div>




    </div>
  );
}


export default Dashboard