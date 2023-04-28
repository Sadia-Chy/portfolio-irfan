import React from 'react';
import Button from '@mui/material/Button';
import { useState,useEffect,useCallback } from 'react';
import { CSSTransition, SwitchTransition } from "react-transition-group";
import image from './images.jpg'
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import HomeIcon from '@mui/icons-material/Home';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

export default function Home(){
  const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }


  const names = [
    'A Software Engineer', 'A Graphic Designer', 'A MERN Stack Developer'
]

    const [newName, setnewName] = useState("");
    const Navigate = useNavigate()

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * names.length);
        setnewName(names[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 1500);
        return () => clearInterval(intervalID);
        
    }, [shuffle])

    const aboutHandler=()=>{
      Navigate('/about')
    }
    const homeHandler=()=>{
      Navigate('/')
    }

    const portfolioHandler =()=>{
      Navigate("/portfolio")
    }
    const contactHandler =()=>{
      Navigate("/contact")
    }

    const [age, setAge] = React.useState('');

  
  return (
    <>
      <div class="grid grid-cols-2  bg-gradient-to-l from-black via-gray-900 to-gray-800 w-full h-screen">
        <div class="grid grid-cols-2  place-items-start">
           <Button onClick={toggleDrawer} class="relative top-9 left-11 w-14 h-14 bg-zinc-700 border border-transparent rounded-full" >
            <MenuIcon fontSize="large" color="action" style={{ color: 'white',padding:'8px' }} />
          </Button> 
          <img class="w-80 h-50 mr-20 mt-52 border rounded-full" src={image} />
        </div>
        <div class="grid grid-cols-1 content-center space-y-3">
              <div class="text-stone-50 text-xl">HI THERE !</div>
              <div class="text-stone-50 text-4xl flex flex-row"><p>I'AM </p> 
                
                {/* <p class="text-yellow-400 ml-2 transition-all"> {newName}</p> */}
                <p class="text-yellow-400 ml-2">SOFTWARE ENGINEER</p>
              </div>
              <p class='text-stone-50 line-clamp-3 w-6/12'>
                I'm a Freelance UI/UX Designer and Developer based in London, 
                England. I strives to build 
                immersive and beautiful web applications 
                through carefully crafted code and user-centric design
              </p>
              <div class="flex flex-row space-x-8 py-4">
                  <Button class="flex flex-row border rounded-3xl
                   bg-yellow-400 text-zinc-50 px-8 
                   py-2 font-sans text-lg  hover:bg-gray-500"
                  onClick={aboutHandler}
                  disableRipple>
                    <PermIdentityOutlinedIcon/><p class="px-2">MORE ABOUT ME</p>
                  </Button>

                  <Button class="bg-transparent 
                    border rounded-3xl flex flex-row
                  border-yellow-400 text-yellow-400 px-9 py-2 font-sans text-lg  hover:bg-yellow-500 duration-300s hover:text-zinc-50 duration-300s"
                  disableRipple
                  onClick={portfolioHandler}>
                    <BusinessCenterOutlinedIcon/><p class="px-2">PORTFOLIO</p>
                      
                  </Button>
                  
              </div>
        
            <Drawer open={isOpen} 
              onClose={toggleDrawer} 
              duration="600" 
              direction='left' 
              overlayColor="transparent"
              style={{backgroundImage:'linear-gradient(to left, var(--tw-gradient-stops))'}}>
                <CloseIcon style={{color:"white",float:"right",marginTop:"10px",marginRight:"10px"}} />
                <div class="flex flex-col space-y-4 mt-20 ml-16">
                <Button disableRipple onClick={homeHandler} class="flex flex-row text-lg text-zinc-100 hover:text-yellow-400"><HomeIcon/> <p class="px-2">Home</p></Button>
                <Button disableRipple onClick={aboutHandler}  class="flex flex-row text-lg text-zinc-100 hover:text-yellow-400"><PermIdentityOutlinedIcon/><p class="px-2">About</p></Button>
                <Button disableRipple onClick={portfolioHandler} class="flex flex-row text-lg text-zinc-100 hover:text-yellow-400"><BusinessCenterOutlinedIcon/><p class="px-2">Portfolio</p></Button>
                <Button disableRipple onClick={contactHandler} class="flex flex-row text-lg text-zinc-100 hover:text-yellow-400"><ConnectWithoutContactIcon/><p class="px-2">Contact</p></Button>
                
                </div>
            </Drawer>
           
        </div>
      </div>
    </>
  );
}
