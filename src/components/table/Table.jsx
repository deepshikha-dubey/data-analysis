import React from 'react'
import "./table.scss";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const List = () => {

    const rows = [
{
    id:1143155,
    product: "Acer Nitro 5",
    img:"https://www.notebookcheck.info/uploads/tx_nbc2/4zu3_Acer_Nitro_5_AN517_52.jpg",
    customer:"Shikha Tripathi",
    date: "1 March",
    amount: 785,
    method:"Cash on Delivery",
    status: "Approved",
},
{
    id:2235235,
    product: "Playstation 5",
    img: "https://www.indiewire.com/wp-content/uploads/2020/11/125ee2affa9fb164.88094318-PS5_RENDER_WITHNOTICE_03-e1604429647116.jpg",
    customer:"Priya Mishra",
    date: "1 March",
    amount: 900,
    method:"Online Payment",
    status: "Pending",
},
{
    id:2342353,
    product: "Redragon S101",
    img:"https://m.media-amazon.com/images/I/71AkwwxF01L.jpg",
    customer:"Minakshi",
    date: "1 March",
    amount: 35,
    method:"Cash on Delivery",
    status: "Pending",
},
{
    id:2357741,
    product: "Razor Blade 15",
    img:"https://th.bing.com/th/id/OIP.zOiENVAbk-PsduI5q7qaDQHaFd?rs=1&pid=ImgDetMain",
    customer:"Jhon Smith",
    date: "1 March",
    amount: 920,
    method:"Online",
    status: "Approved",
},

{
    id:2342355,
    product: "ASUS ROG Strix",
    img:"https://www.notebookcheck.net/uploads/tx_nbc2/csm_GL504_Hero_Cam05Lighting_v1_740f45a0ab_03.jpg",
    customer:"Vinay Dubey",
    date: "1 March",
    amount: 2000,
    method:"Online",
    status: "Pending",
},

      ];

      
  return (

        <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Tracking ID</TableCell>
            <TableCell className='tableCell'>Product</TableCell>

            <TableCell className='tableCell'>Customer</TableCell>
       
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'> Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} >
              <TableCell> {row.id}  </TableCell>
              <TableCell className='tableCell'>
             <div className='cellWrapper'>
                <img src ={row.img} alt="" className='image' />
            {row.product}
             </div>
             </TableCell>
             <TableCell className='tableCell'>{row.customer}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
              <TableCell className='tableCell'>{row.method}</TableCell>
              <TableCell className='tableCell'>
                <span className={`status ${row.status}`}>
                {row.status}
                </span>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
  )
}

export default List;
