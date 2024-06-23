import React,{useContext} from 'react'
import "./navbar.scss"
import "../../App.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';
import Avtatar from "../../images/mine.jpg";
import { DarkModeContext } from '../../context/darkModeContext';
const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className='navbar'>
       <div className="wrapper">
       <div className="search">
        <input type="text" placeholder='Search' />
        <SearchOutlinedIcon/>
       </div>
       <div className="items">
        <div className="item">
<LanguageOutlinedIcon className='icon'/>
English
        </div>
        <div className='item'><DarkModeOutlinedIcon className='icon' onClick={()=>dispatch({type:"TOGGLE"})}/></div>
        <div className='item'><FullscreenExitOutlinedIcon className='icon'/></div>
        <div className='item'><NotificationsNoneOutlinedIcon className='icon'/></div>
        <div className='count'>1</div>
        <div className='item'><ChatBubbleOutlineOutlinedIcon className='icon'/></div>
        <div className='count'>2</div>
        <div className='item'><ChecklistOutlinedIcon className='icon'/></div>
       <div className='item'>
        <img src ={Avtatar} alt='Profile pic' className='avatar'/>
       </div>
       </div>
       </div>
    </div>
  )
}

export default Navbar
