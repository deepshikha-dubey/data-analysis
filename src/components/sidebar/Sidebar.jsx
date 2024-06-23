import React, { useContext } from 'react'
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import BorderOuterOutlinedIcon from '@mui/icons-material/BorderOuterOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import { Link } from "react-router-dom";
import {DarkModeContext} from '../../context/darkModeContext'
const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className='sidebar'>
       <div className='top'>
        <Link to="/" style={{textDecoration:"none"}} >
        <span className='logo'>Deepshikha</span>
        </Link>
    
        </div>
        <hr/>
       <div className='center'>
      <ul>
        <p className='title'>MAIN</p>
        <Link to="/" style={{textDecoration:"none"}} >
        <li> <span><DashboardIcon className='icon'/>Dashboard</span> </li>
        </Link>
        <p className='title'>LISTS</p>
        <Link to="/users" style={{textDecoration:"none"}}>
        <li> <span><PeopleAltOutlinedIcon className='icon'/>Users</span> </li>
        </Link>
        <Link to="/products" style={{textDecoration:"none"}}>
        <li> <span><Inventory2OutlinedIcon className='icon'/>Products</span> </li>
        </Link>
        
        <li> <span><BorderOuterOutlinedIcon className='icon'/>Orders</span> </li>
        <li> <span><LocalShippingOutlinedIcon className='icon'/>Delivery</span> </li>
        <p className='title'>USEFUL</p>
        <li> <span><QueryStatsOutlinedIcon className='icon'/>Stats</span> </li>
        <li> <span><NotificationsNoneOutlinedIcon className='icon'/>Notifications</span> </li>
        <p className='title'>SERVICE</p>
        <li> <span><SettingsSystemDaydreamOutlinedIcon className='icon'/>System Health</span> </li>
        <li> <span><PsychologyOutlinedIcon className='icon'/>Logs</span> </li>
        <li> <span><SettingsOutlinedIcon className='icon'/>Settings</span> </li>
        <p className='title'>USER</p>
        <li> <span><AccountCircleOutlinedIcon className='icon'/>Profile</span> </li>
        <li> <span><LoginOutlinedIcon className='icon'/>Logout</span> </li>
      </ul>
        </div>
       <div className='bottom'>
        <div className="colorOption " onClick={()=>dispatch({type:"LIGHT"})} ></div>
        <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
       
      
       </div>
    </div>
  )
}

export default Sidebar
