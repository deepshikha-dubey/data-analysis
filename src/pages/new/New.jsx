import React, { useState } from 'react'
import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

const New = ({inputs, title}) => {
const [file, setFile] = useState("");

console.log(file);
  return (
    <div className='new'>
      <Sidebar/>
      <div className='newContainer'>
        <Navbar/>
      <div className='top'>
        <h1>{title}</h1>
      </div>
      <div className='bottom'>
        <div className='left'>
<img src={file ? URL.createObjectURL(file)
  :"https://th.bing.com/th/id/OIP.7O4_GREtLbxqPdJCTmfatQHaHa?rs=1&pid=ImgDetMain"} alt=' ' className='' />
        </div>
        <div className='right'>
          <form>
             
          <div className='formInput'>
              <label htmlFor='file'>Image: <DriveFolderUploadOutlinedIcon className='icon'/></label>
              <input type='file' id="file" onChange={e=> setFile(e.target.files[0])} style={{display:"none"}}/>
            </div>

            {/* <div className='formInput'>
              <label>UserName</label>
              <input type='text' placeholder='johndoe'/>
            </div>
            <div className='formInput'>
              <label>Name and surname</label>
              <input type='text' placeholder='John Doe'/>
            </div>
            <div className='formInput'>
              <label>Email</label>
              <input type='email' placeholder='john@gmail.com'/>
            </div>
            <div className='formInput'>
              <label>Phone number</label>
              <input type='number' placeholder='1234567890'/>
            </div>
            <div className='formInput'>
              <label>Password</label>
              <input type='password' placeholder='********'/>
            </div>
            <div className='formInput'>
              <label>Address</label>
              <input type='text' placeholder='Your Address'/>
            </div>
            <div className='formInput'>
              <label>Country</label>
              <input type='text' placeholder='USA'/>
            </div> */}
            {inputs.map((input) =>(
              <div className='formInput' key={input.id}>
                <label>{input.label}</label>
                <input type ={input.type} placeholder={input.placeholder}/>
              </div>
            ))}
            <button>Send</button>
          </form>
        </div>
      </div>
      </div>
    </div>
  )
}

export default New
