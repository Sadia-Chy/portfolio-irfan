import React from 'react';
import Button from '@mui/material/Button';
import { useState,useEffect,useCallback } from 'react';
import { CSSTransition, SwitchTransition } from "react-transition-group";
import image from './images.jpg'
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import HomeIcon from '@mui/icons-material/Home';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import PsychologyIcon from '@mui/icons-material/Psychology';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Typography, duration } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Portfolio1 from './portfolio.json'

export default function Portfolio() {
  
  const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const [isOpenModal, setIsOpenModal] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)

    const toggleDrawerModal = (item) => {
      setSelectedItem(item)
      setIsOpenModal((prevState2) => !prevState2)
    }
    
    const Navigate = useNavigate()
    const homeHandler=()=>{
      Navigate('/')
    }
    const aboutHandler=()=>{
      Navigate("/about")
    }
    const portfolioHandler =()=>{
      Navigate("/portfolio")
    }
    const contactHandler =()=>{
      Navigate("/contact")
    }

    const styles={

      // backgroundImage:{image}
    }

  return (
    <>
      <div class="  bg-zinc-800 w-full h-full pb-40">
          <div class="grid grid-cols-3">
          <Button onClick={toggleDrawer} class="relative top-9 left-11 w-14 h-14 bg-zinc-700 border border-transparent rounded-full" >
            <MenuIcon fontSize="large" color="action" style={{ color: 'white',padding:'8px' }} />
          </Button> 
          <div class="mt-16 justify-self-center text-zinc-100 text-lg lg:text-4xl md:text-3xl sm:text-2xl  font-sans font-extrabold ">
            <p>MY <span class="text-yellow-400">PORTFOLIO</span></p>
          </div>
          <Drawer open={isOpen} 
              onClose={toggleDrawer} 
              duration="600" 
              direction='left' 
              overlayColor="transparent"
              style={{backgroundColor:'rgb(63,63,70)'}}>
                <Button
                style={{color:"white",float:"right",marginTop:"10px",marginRight:"10px"}}
                onClick={toggleDrawer}
                ><CloseIcon /></Button>
                <div class="flex flex-col space-y-4 mt-20 ml-16">
                <Button disableRipple onClick={homeHandler} class="flex flex-row text-lg text-zinc-100 hover:text-yellow-400"><HomeIcon/> <p class="px-2">Home</p></Button>
                <Button disableRipple onClick={aboutHandler} class="flex flex-row text-lg text-zinc-100 hover:text-yellow-400"><PermIdentityOutlinedIcon/><p class="px-2">About</p></Button>
                <Button disableRipple onClick={portfolioHandler} class="flex flex-row text-lg text-zinc-100 hover:text-yellow-400"><BusinessCenterOutlinedIcon/><p class="px-2">Portfolio</p></Button>
                <Button disableRipple onClick={contactHandler} class="flex flex-row text-lg text-zinc-100 hover:text-yellow-400"><ConnectWithoutContactIcon/><p class="px-2">Contact</p></Button>
                
                </div>
            </Drawer>
            </div>


            <div class="grid justify-center ml-4 mr-4 sm:ml-0 sm:mr-0 sm:justify-center  font-sans font-medium text-zinc-100 mt-6">A FEW RECENT DESIGN AND CODING PROJECTS. WANT TO SEE MORE? EMAIL ME.</div>

            {/* <div class="grif grid-cols-3 mt-10"> */}
            <div Class="grid sm:grid-cols-1 lg:grid-cols-3 gap-y-12 gap-x-12 lg:gap-x-12 justify-items-center mt-11 xl:ml-56 xl:mr-56">
                {Portfolio1.portfolio.data.map((item)=>{
                  return(
                    <>
                  <div class="group h-44 w-80 rounded-md bg-yellow-400 flex justify-center items-center overflow-hidden">
                  {/* <div class=""> */}
                  <div class="absolute invisible text-zinc-100 font-serif font-bold text-2xl group-hover:visible">
                    {item.description}
                  </div>

                  {/* </div> */}
                  <Button class="w-80" disableRipple onClick={()=>{
                    toggleDrawerModal(item)
                    }}
                  ><img  class="h-44 w-80 transition-color group-hover:opacity-0 duration-500" src={item.image} />
                  </Button>
                  </div>
                    </>
                  )
                })}
                </div>


                <Drawer open={isOpenModal} 
                    onClose={toggleDrawerModal} 
                    duration="600"
                    direction='right' 
                    overlayOpacity="0.7"
                    overlayColor="black"
                    style={{backgroundColor:'rgb(63,63,70)',width:"450px"}}>
                      <Button
                      style={{color:"white",float:"right",marginTop:"10px",marginRight:"10px"}}
                      onClick={() => toggleDrawerModal(null)}
                      ><CloseIcon /></Button>
                      <div class="flex flex-col space-y-2 mt-12 ml-16">
                      <img style={{width:"700px",borderRadius:"8px"}} src={selectedItem?.image}/>
                      <div class="text-4xl text-yellow-500 font-semibold">{ selectedItem?.name }</div>
                      <div class="p-1 text-zinc-50 text-lg">{ selectedItem?.description }</div>
                      <div class="w-32 flex justify-center bg-yellow-500 rounded-3xl"><Button class="p-2 text-lg text-zinc-100">Preview</Button></div>
                      
                      </div>
                  </Drawer>
              </div>


              {/* <div Class="flex flex-row space-x-6 justify-center mt-12">
                <div>
                  <img  class="h-52 w-96" src={image} />
                </div>
                <div><img  class="h-52 w-96" src={image} /></div>
                <div><img  class="h-52 w-96" src={image} /></div>
              </div> */}
            
      {/* </div> */}
     
    </>
  );
}
