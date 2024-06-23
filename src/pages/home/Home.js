import React from 'react'
import "./home.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
//import { Widgets } from '@mui/icons-material'
import Widgets from '../../components/widgets/Widgets';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import Table from '../../components/table/Table';
import {Link } from "react-router-dom";

const home = () => {
  return (
    <div className='home'>
    <Sidebar/>
    <div className='homecontainer'>
        <Navbar/>
        <div className='widgets'>
            <Widgets type = "user"/>
            <Widgets type = "order"/>
            <Widgets type = "earning"/>
            <Widgets type = "balance"/>
        </div>
        <div className='charts'>
            <Featured/>
            <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className='listContainer'>
            <div className='listTitle'>  Latest Transactions 
            <Link to="/products/new" style={{textDecoration:"none"}}
             className='link'>
        Add new
        </Link>
            </div>
<Table/>
        </div>
    </div>
    </div>
  )
}

export default home
