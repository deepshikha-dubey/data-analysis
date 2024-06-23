import React from 'react'
import "./single.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import List  from  '../../components/table/Table'

const Single = () => {
  return (
    <div className='single'>
    <Sidebar/>
    <div className='singleContainer'>
      <Navbar/>
      <div className='top'>
        <div className='left'>
          <div className='editButton'>Edit</div>
          <h1 className='title'>Information</h1>
          <div className='item'>
            <img src = "https://i.pinimg.com/originals/5c/9a/5d/5c9a5d2dc7b242555bbe986cb5e4809c.jpg" alt="" className='itemImg' />
          <div className='detals'><h2 className='itemTitle'>Deepshikha Dubey</h2>
          <div className='detalItem'>
            <span className='itemKey' >Email: </span>
            <span className='itemValue' >dubeydeepshikha1707@gmail.com</span>
          </div>
          <div className='detalItem'>
            <span className='itemKey' >Phone: </span>
            <span className='itemValue' >+91 231231231 </span>
          </div>
          <div className='detalItem'>
            <span className='itemKey' >Address: </span>
            <span className='itemValue' >Motera, Ahmedabad, Gujarat </span>
          </div>
          <div className='detalItem'>
            <span className='itemKey' >Country: </span>
            <span className='itemValue' >INDIA </span>
          </div>
          </div>
          </div>
        
          </div>
        <div className='right'>
          <Chart aspect={3 / 1} title = "User Spending ( Last 6 months)"/>
        </div>
      </div>
      <div className='bottom'>
      <h1 className='title'>Last Transaction</h1>
        <List/>
      </div>
    </div>
    </div>
  )
}

export default Single
