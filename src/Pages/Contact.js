import React from 'react';
import Button from '@mui/material/Button';
import { useState} from 'react';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import HomeIcon from '@mui/icons-material/Home';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
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

  return (
    <>
    <div class="  bg-zinc-800 w-full h-screen pb-16">
          <div class="grid grid-cols-3">
          <Button onClick={toggleDrawer} class="relative xxs:top-5 xxs:left-5 xs:top-5 xs:left-5 sm:top-9 sm:left-11 w-14 h-14 bg-zinc-700 border border-transparent rounded-full" >
            <MenuIcon fontSize="large" color="action" style={{ color: 'white',padding:'8px' }} />
          </Button> 
          <div class="mt-16 justify-self-center text-zinc-100 xxs:text-base xs:text-lg sm:text-3xl lg:text-5xl font-sans font-extrabold ">
            <p>GET <span class="text-yellow-400">IN TOUCH</span></p>
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
                <Button disableRipple onClick={portfolioHandler} class="flex flex-row text-lg text-zinc-100 hover:text-yellow-400"><ConnectWithoutContactIcon/><p class="px-2">Contact</p></Button>
                
                </div>
            </Drawer>
            </div>


            <div class="grid justify-center font-sans font-medium text-zinc-100 xxs:ml-3 xs:ml-3 mt-6">I’M ALWAYS OPEN TO DISCUSSING PRODUCT DESIGN WORK OR PARTNERSHIPS.</div>
            
            <div class="grid sm:grid-cols-3 lg:grid-cols-3 mt-6 p-16">
              <div class=" ">
                <p class="text-gray-100 mt-2 ">Phone</p>
                <div class="flex flex-row space-x-2 mt-1 ">
                  <PhoneIphoneIcon style={{color:"rgb(250,204,21)"}} />
                  <p class="text-gray-100 ">01625793437</p>
                </div>
              </div>
              <div class="">
                <p class="text-gray-100 mt-4">Email</p>
                <div class="flex flex-row space-x-2 mt-1">
                  <MailIcon style={{color:"rgb(250,204,21)"}} />
                  <p class="text-gray-100">avoidirfan@gmail.com</p>
                </div>
              </div>
              <div class="">
                <p class="text-gray-100 mt-4 sm:ml-5 lg:ml-0">WhatsApp</p>
                <div class="flex flex-row space-x-2 mt-1 sm:ml-5 lg:ml-0">
                  <WhatsAppIcon style={{color:"rgb(250,204,21)"}} />
                  <p class="text-gray-100">01625793437</p>
                </div>
              </div>
              <div class="">
                <p class="text-gray-100 mt-7">Facebook</p>
                <div class="flex flex-row space-x-2 mt-1">
                  <FacebookIcon style={{color:"rgb(250,204,21)"}} />
                  <p class="text-gray-100">01625793437</p>
                </div>
              </div>
              <div class="">
                <p class="text-gray-100 mt-7">Twitter</p>
                <div class="flex flex-row space-x-2 mt-1">
                  <TwitterIcon style={{color:"rgb(250,204,21)"}} />
                  <p class="text-gray-100">01625793437</p>
                </div>
              </div>
              
            </div>

            </div>
    
    </>
  );
}

