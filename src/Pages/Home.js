import React from 'react';
import Button from '@mui/material/Button';
import { useState,useEffect,useCallback } from 'react';
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

    // eslint-disable-next-line
    const [newName, setnewName] = useState("");
    const Navigate = useNavigate()

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * names.length);
        setnewName(names[index]);
         // eslint-disable-next-line
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

  return (
    <>
      <div class="grid sm:grid-cols-1 md:grid-cols-2  bg-gradient-to-l from-black via-gray-900 to-gray-800 w-full h-fit sm:h-fit xs:h-fit md:h-screen">
        <div class="grid xs:place-items-baseline sm:place-items-baseline md:grid-cols-2  md:place-items-start">
           <Button onClick={toggleDrawer} class="relative xs:top-3 xs:left-4 sm:top-3 sm:left-8 md:top-9 md:left-11 w-14 h-14 bg-zinc-700 border border-transparent rounded-full" >
            <MenuIcon fontSize="large" color="action" style={{ color: 'white',padding:'8px' }} />
          </Button> 
          <img class="w-80 h-50 ml-6 mb-5 sm:relative sm:w-80 sm:h-50 xs:ml-10 xs:items-center sm:mr-20 sm:top-3 sm:left-44 md:ml-0 sm:mt-0 md:top-9 md:left-0  lg:top-0 lg:left-0  md:mt-52  border rounded-full" src={image} alt="img"/>
        </div>
        <div class="grid grid-cols-1 space-y-3 ml-7 sm:grid-cols-1 content-center sm:space-y-3 lg:space-y-3 md:space-y-1 sm:ml-7 lg:ml-3">
              <div class="text-stone-50 sm:text-xl lg:text-xl md:text-lg flex flex-row"><p>HI THERE !</p> <p class="text-yellow-400 ml-2">I'AM MOHAMMAD IRFAN UDDIN</p></div>
              <div class="text-stone-50 xs:text-2xl sm:text-4xl lg:text-4xl md:text-2xl flex flex-row"> 
                
                {/* <p class="text-yellow-400 ml-2 transition-all"> {newName}</p> */}
                <p class="">SOFTWARE ENGINEER</p>
              </div>
              <p class='text-stone-50  w-80'>
              I am a JavaScript, Typescript and MERN STACK Developer with 3 years of developing experience. So over time, I focused on MERN Stack which refers to MongoDB, Express React.js, Node.js.
I have completed the Shop app, Chat app, E-Commerce website for Mobile and laptop, Manufacturing controlling website based on this mentioned Js framework.
              </p>
              <div class="flex flex-row space-x-8 py-4">
                  <Button class="flex flex-row border rounded-3xl
                   bg-yellow-400 text-zinc-50 xs:px-5 xs:py-1 sm:px-8 sm:py-2 lg:px-8 lg:py-2 md:px-4 md:py-2 font-sans xs:text-sm sm:text-lg lg:text-lg md:text-xs hover:bg-gray-500"
                  onClick={aboutHandler}
                  disableRipple>
                    <PermIdentityOutlinedIcon/><p class=" sm:px-2 lg:px-2 md:px-1 md:mt-1 lg:mt-0">MORE ABOUT ME</p>
                  </Button>

                  <Button class="bg-transparent 
                    border rounded-3xl flex flex-row
                  border-yellow-400 text-yellow-400 xs:px-5 xs:py-1 sm:px-8 sm:py-2 lg:px-8 lg:py-2 md:px-4 md:py-2 font-sans xs:text-sm sm:text-lg lg:text-lg md:text-xs  hover:bg-yellow-500 duration-300s hover:text-zinc-50 duration-300s"
                  disableRipple
                  onClick={portfolioHandler}>
                    <BusinessCenterOutlinedIcon/><p class="sm:px-2 lg:px-2 md:px-1 md:mt-1 lg:mt-0">PORTFOLIO</p>
                      
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
