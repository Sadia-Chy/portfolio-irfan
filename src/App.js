import './index.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import About from './Pages/About'
import Portfolio from './Pages/Portfolio'
import Contact from './Pages/Contact'
import ImageModal from './Component/ImageModal'
// import  obj from './Pages/skill.json'
function App() {
  
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/imagemodal' element={<ImageModal/>}/>
        </Routes>
      </Router>
 

{/* {
  Object.keys(obj).map(key =>{
    console.log(key)
    return(
      <div>
        <p color='green'style={{ fontWeight: "bold", fontSize: "20px" }}>{key}</p>
        {
          obj[key].map(item => {
            return(
              <span>{item}{", "}</span>
            )
          })
        }
      </div>
    )
  })
} */}
{/* { Object.keys(obj).map(subKey => {
 const subSkilTitle =obj[subKey ]
 <p></p>
 console.log(subKey)
 obj[subKey].map(key => {
   console.log(key, "..,,")
 })
 }) */}
 {/* } */}
    </div>
  );
}

export default App;
