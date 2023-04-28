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
import PsychologyIcon from '@mui/icons-material/Psychology';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { motion } from "framer-motion";
import Obj from './skill.json'

import Header from '../Component/Header'
export default function About() {
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
    const contactHandler =()=>{
      Navigate("/contact")
    }
  return (
    <>
    {/* <motion.div
      className="container text-center  bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    > */}
      <div class="  bg-zinc-800 w-full h-fit ">
          <div class="grid grid-cols-1">
          <Button onClick={toggleDrawer} class="fixed top-9 left-11 w-14 h-14 bg-zinc-700 border border-transparent rounded-full" >
            <MenuIcon fontSize="large" color="action" style={{ color: 'white',padding:'8px' }} />
          </Button> 
          <div class="mt-16  justify-self-center text-zinc-100 text-6xl font-sans font-extrabold ">
            <p>ABOUT <span class="text-yellow-400">ME</span></p>
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


            <div class="grid justify-center font-sans font-medium text-zinc-100 mt-6">I LOVE TO CODE</div>
            

            <div class="grid grid-cols-2 place-items-center mt-9">
                <div class="grid grid-cols-2 border border-transparent border-r-yellow-400 h-64 w-full text-zinc-100" style={{}}>
                  <div class="ml-10">
                      <div class="flex flex-row text-md space-x-5 mt-4 px-9"><FiberManualRecordIcon/><p>Full Name</p><p> Irfan Uddin</p></div>
                      <div class="flex flex-row text-md space-x-5 mt-4 px-9"><FiberManualRecordIcon/><p>Birthdate</p><p> 19 june 1995</p></div>
                      <div class="flex flex-row text-md space-x-5 mt-4 px-9"><FiberManualRecordIcon/><p>Nationality</p><p> Bangladeshi</p></div>
                      <div class="flex flex-row text-md space-x-5 mt-4 px-9"><FiberManualRecordIcon/><p>Experience</p><p> 7 years</p></div>
                      <div class="flex flex-row text-md space-x-5 mt-4 px-9"><FiberManualRecordIcon/><p>Country</p><p> Bangladesh</p></div>
                  </div>
                  <div class="">
                      <div class="flex flex-row text-md space-x-5 mt-4 px-9"><FiberManualRecordIcon/><p>Email </p><p> IrfanUddin@gmail.com</p></div>
                      <div class="flex flex-row text-md space-x-5 mt-4 px-9"><FiberManualRecordIcon/><p>Phone</p><p> +8001625166755</p></div>
                      <div class="flex flex-row text-md space-x-5 mt-4 px-9"><FiberManualRecordIcon/><p>LinkedIn</p><Link color="inherit" href="https://www.linkedin.com/in/irfan-sabbir/"> <LinkedInIcon/></Link></div>
                      <div class="flex flex-row text-md space-x-5 mt-4 px-9"><FiberManualRecordIcon/><p>Github</p><Link color="inherit"> <GitHubIcon style={{marginLeft:"9px"}}/></Link></div>
                    {/* <div class="flex flex-row text-md space-x-5 mt-4 px-9"><FiberManualRecordIcon/><p>Country</p><p> Bangladesh</p></div> */}
                  </div>
                </div>
                <img src={image} class="h-80 w-80 rounded-full shadow-md shadow-yellow-400 mr-40" />
                {/* <div></div> */}
                {/* <p class="border-4 border-yellow-400 h-10">hshash</p> */}
            </div>


            <div class="grid grid-cols-2 border border-transparent border-t-zinc-300 mt-24 ml-24 mr-24">
              <div class="ml-6 mb-8">
                <Typography variant='h6' style={{color:"white" ,marginTop:"20px"}}>
                  EXPERIENCE
                </Typography>
                <div class="flex flex-col-reverse  ml-6 mt-3">
                      <div><div class="flex flex-row space-x-2 text-gray-400 mt-10">
                        <CalendarMonthIcon/><p>Nov 2020 - Mar 2021</p>
                      </div>
                      <div class="flex flex-row space-x-4">
                      <p class="text-zinc-50">Full Stack Developer -</p>
                      <p class="text-zinc-50 font-mono font-bold">Initux Software Limited</p>
                      </div></div>

                      <div class="mt-10">
                      <div class="flex flex-row space-x-2 text-gray-400">
                        <CalendarMonthIcon/><p>Apr 2021 - Sep 2022</p>
                      </div>
                      <div class="flex flex-row space-x-4">
                      <p class="text-zinc-50">Software Developer (Mid Level) -</p>
                      <p class="text-zinc-50 font-mono font-bold">Renssoft Solutions Limited</p>
                      </div>
                      </div>

                      <div ><div class="flex flex-row space-x-2 text-gray-400">
                        <CalendarMonthIcon/><p>Sep 2022 - Present</p>
                      </div>
                      <div class="flex flex-row space-x-4">
                      <p class="text-zinc-50">Full Stack Developer -</p>
                      <p class="text-zinc-50 font-mono font-bold">Venturas Limited</p>
                      </div></div>

                </div>
              </div>

              <div>
                <Typography variant="h6" style={{color:"white", marginTop:"20px"}}>
                  EDUCATION
                </Typography>
                <div>
                    <div class="mt-3 ml-6">
                      <div class="flex flex-row space-x-2 text-gray-400">
                        <CalendarMonthIcon/><p>2017 - 2021</p>
                      </div>
                      <div class="flex flex-row space-x-4">
                      <p class="text-zinc-50">Bachelor's In Computer Science -</p>
                      <p class="text-zinc-50 font-mono font-bold">Premier University</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="border border-transparent border-t-zinc-300 ml-24 mr-24">
              <div class="ml-6 mb-48">
                <Typography variant="h6" style={{color:"white",marginTop:"20px"}}>
                  SKILLS
                </Typography>
                <div class="grid grid-cols-3 ml-10 text-zinc-50">
                {
                  Object.keys(Obj).map(key =>{
                    {/* console.log(key) */}
                    return(
                      <div>
                        {/* <p color='green'style={{ fontWeight: "bold", fontSize: "20px" }}>{key}</p> */}
                        <Typography variant="h6"class="border border-yellow-400  rounded-full w-44 flex justify-center py-2 px-1" style={{color:"white",marginTop:"20px"}}>
                          {key}
                        </Typography>
                        {
                          Obj[key].map(item => {
                            return(
                              <div class="flex flex-row text-md space-x-5 mt-4 px-9 "><PsychologyIcon style={{color:"yellow"}} /><p>{item}</p></div>
                              // <span>{item}{", "}</span>
                            )
                          })
                        }
                      </div>
                    )
                  })
                }
                </div>
                {/* <div class="grid grid-cols-2 ml-10 text-zinc-50">
                  <div>
                      <div class="flex flex-row text-md space-x-5 mt-4 px-9 "><PsychologyIcon style={{color:"yellow"}} /><p>Nest JS</p></div>
                      <div class="flex flex-row text-md space-x-5 mt-4 px-9"><PsychologyIcon/><p>TypeORM</p></div>
                      <div class="flex flex-row text-md space-x-5 mt-4 px-9"><PsychologyIcon style={{color:"yellow"}}/><p>MySQL</p></div>
                      <div class="flex flex-row text-md space-x-5 mt-4 px-9"><PsychologyIcon /><p>AWS COdeCommit</p></div>
                      <div class="flex flex-row text-md space-x-5 mt-4 px-9"><PsychologyIcon style={{color:"yellow"}}/><p>Amazon Cognito</p></div>
                      <div class="flex flex-row text-md space-x-5 mt-4 px-9"><PsychologyIcon/><p>AWS Cloud Formation</p></div>
                      <div class="flex flex-row text-md space-x-5 mt-4 px-9"><PsychologyIcon style={{color:"yellow"}}/><p>AWS CDK</p></div>
                      <div class="flex flex-row text-md space-x-5 mt-4 px-9"><PsychologyIcon/><p>Serverless Framework</p></div>
                      <div class="flex flex-row text-md space-x-5 mt-4 px-9"><PsychologyIcon style={{color:"yellow"}}/><p>Amazon WEB Services (AWS)</p></div>
                      <div class="flex flex-row text-md space-x-5 mt-4 px-9"><PsychologyIcon/><p>Node JS</p></div>
                  </div>
                  <div>
                      <div class="flex flex-row text-md space-x-5 mt-4 px-9 "><PsychologyIcon style={{color:"yellow"}} /><p>React JS</p></div>
                      <div class="flex flex-row text-md space-x-5 mt-4 px-9"><PsychologyIcon/><p>Apollo GraphQL</p></div>
                      <div class="flex flex-row text-md space-x-5 mt-4 px-9"><PsychologyIcon style={{color:"yellow"}}/><p>Wev Design</p></div>
                      <div class="flex flex-row text-md space-x-5 mt-4 px-9"><PsychologyIcon /><p>Web Development</p></div>
                      <div class="flex flex-row text-md space-x-5 mt-4 px-9"><PsychologyIcon style={{color:"yellow"}}/><p>Redux JS</p></div>
                      <div class="flex flex-row text-md space-x-5 mt-4 px-9"><PsychologyIcon/><p>MongoDB</p></div>
                      <div class="flex flex-row text-md space-x-5 mt-4 px-9"><PsychologyIcon style={{color:"yellow"}}/><p>Mongoose ODM</p></div>
                      <div class="flex flex-row text-md space-x-5 mt-4 px-9"><PsychologyIcon/><p>Next JS</p></div>
                      <div class="flex flex-row text-md space-x-5 mt-4 px-9"><PsychologyIcon style={{color:"yellow"}}/><p>Sequelize.js</p></div>
                      <div class="flex flex-row text-md space-x-5 mt-4 px-9"><PsychologyIcon/><p>Rest API</p></div>
                  </div>
                </div> */}
              </div>
            </div>

      </div>
      {/* </motion.div> */}
    </>
  );
}

// const obj = {
//   "language" : [
//     "JavaScript", "TypeScript", "GOLANG", "C++"
//   ],
//   "Server": [
//     "Node.js", "Nest.js", "Express.js", "GOLANG", "Serverless Lambda", "Lambda Layer & Proxy"
//   ],
//   "Database": [
//     "MySQL", "PostgresSQL", "MongoDB", "DynamoDB", "AWS RDS", "Redis", "ElasticSearch"
//   ],
//   "Frontend": [
//     "React.js", "Next.js", "MUI", "CSS"
//   ],
//   "Cloud": [
//     "AWS Amplify", "Serverless Lambda", "S3", "AWS code pipline", "AWS Code build", "AWS CDK", "AWS SDK", "Chat GPT"
//   ],
//   "Authentication": [
//     "JWT", "AWS Cognito", "OAUTH2", "Passportjs", "SSO"
//   ],
//   "API": [
//     "Rest API", "GraphQL", "Apollo GraphQL", "Amplify GraphQL"
//   ], 
//   "Vershion Control": [
//     "Git", "Github", "Docker", "Bitbucket", "AWS Code Commit"
//   ]
// }

// Object.keys(obj).map(subKey => {
// const subSkilTitle =obj[subKey ]
// console.log(subSkilTitle)
// obj[subKey].map(key => {
//   console.log(key, "..,,")
// })
// }) 