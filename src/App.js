//import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import { userInputs, productInput} from './formSource.js';
import "./style/darkMode.scss";
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext.js';

function App() {

  const {darkMode} = useContext(DarkModeContext);
  return (
    <div className= { darkMode ? " app dark " : "app"}>
     <BrowserRouter>
      <Routes>
        <Route path="/">
         <Route index element = {<Home/>} />
         <Route path ="login" element={<Login/>}/>
       <Route path ="users">
         <Route index element={<List/>} />
         <Route path=":userId" element={<Single/>} />
         <Route path="new" element={<New inputs={userInputs} title="Add new User"/>} />
       </Route>
       <Route path ="products">
         <Route index element={<List/>} />
         <Route path=":productId" element={<Single/>} />
         <Route path="new" element={<New inputs={productInput} title="Add new Product"/>} />
       </Route>
        </Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
