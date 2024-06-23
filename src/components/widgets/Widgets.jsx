import React from 'react';
import "./widgets.scss";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';

const Widgets = ({type}) => {
    let data;

    // temporary
    const amount = 100;
    const diff = 20;

    switch(type){
        case "user":
           data={
             title:"USERS",
             isMoney: false,
             link: "See all users",
             icon: <PersonOutlineOutlinedIcon className='icon'
              style={{color:"crimson",
                backgroundColor:"rgba(255, 0, 0, 0.2)",
             }}/>
           };
             break;
             case "order":
           data={
             title:"ORDERS",
             isMoney: false,
             link: "View all orders",
             icon: <AddShoppingCartOutlinedIcon
              className='icon'
              style={{color:"gold",
                backgroundColor:"rgba(255, 247, 204)",
             }}
             />
              };
             break;
             case "earning":
           data={
             title:"EARNINGS",
             isMoney: true,
             link: "View net earning",
             icon: <MonetizationOnOutlinedIcon 
             className='icon'
             style={{color:"green",
                backgroundColor:"rgb(229, 255, 204)",
             }}
             />
           };
             break;
             case "balance":
           data={
             title:"BALANCE",
             isMoney: true,
             link: "See details",
             icon: <AccountBalanceOutlinedIcon 
             className='icon'
             style={{color:"purple",
            backgroundColor:"rgba(128, 0, 128, 0.2)",
             }}
             />
           };
             break;
             default:
                break;
           }

    


  return (
    <div className='widget'>
     <div className='left'>
        <span className='title'>{data.title}</span>
        <span className='counter'>{data.isMoney && "$"} {amount}</span>
        <span className='link'>{data.link}</span>
     </div>
     <div className='right'>
        <div className='percentage positive'>
        <KeyboardArrowUpOutlinedIcon/>
        {diff} %
        </div>
        {data.icon}
       
        </div>
    </div>
  )
}

export default Widgets
