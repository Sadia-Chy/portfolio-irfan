import React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
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

import Obj from './skill.json'

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
    
      <div class="  bg-zinc-800 w-full h-fit ">
          <div class="grid grid-cols-1">
          <Button onClick={toggleDrawer} class="fixed xxs:top-5 xxs:left-5  sm:top-9 sm:left-11 w-14 h-14 bg-zinc-700 border border-transparent rounded-full" >
            <MenuIcon fontSize="large" color="action" style={{ color: 'white',padding:'8px' }} />
          </Button> 
          <div class="mt-16  justify-self-center text-zinc-100 xxs:text-2xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold ">
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
            

            <div class="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 place-items-center xxs:mt-6 xs:mt-9">
                <div class="grid sm:grid-cols-1 lg:grid-cols-2 border border-transparent sm:border-r-yellow-400 sm:h-64 w-full text-zinc-100" style={{}}>
                  <div class="ml-10 xxs:ml-2 xs:ml-5 sm:ml-10">
                      <div class="flex flex-row text-md space-x-5 mt-4 px-9"><FiberManualRecordIcon/><p>Full Name</p><p> Irfan Uddin</p></div>
                      <div class="flex flex-row text-md space-x-5 mt-4 px-9"><FiberManualRecordIcon/><p>Birthdate</p><p> 19 june 1995</p></div>
                      <div class="flex flex-row text-md space-x-5 mt-4 px-9"><FiberManualRecordIcon/><p>Nationality</p><p> Bangladeshi</p></div>
                      <div class="flex flex-row text-md space-x-5 mt-4 px-9"><FiberManualRecordIcon/><p>Experience</p><p> 7 years</p></div>
                      <div class="flex flex-row text-md space-x-5 mt-4 px-9"><FiberManualRecordIcon/><p>Country</p><p> Bangladesh</p></div>
                  </div>
                  <div class="xxs:ml-2 xs:ml-5 sm:ml-10 lg:ml-0">
                      <div class="flex flex-row text-md space-x-5 mt-4 px-9"><FiberManualRecordIcon/><p>Email </p><p> IrfanUddin@gmail.com</p></div>
                      <div class="flex flex-row text-md space-x-5 mt-4 px-9"><FiberManualRecordIcon/><p>Phone</p><p> +8001625166755</p></div>
                      <div class="flex flex-row text-md space-x-5 mt-4 px-9"><FiberManualRecordIcon/><p>LinkedIn</p><Link color="inherit" href="https://www.linkedin.com/in/irfan-sabbir/"> <LinkedInIcon/></Link></div>
                      <div class="flex flex-row text-md space-x-5 mt-4 px-9"><FiberManualRecordIcon/><p>Github</p><Link color="inherit"> <GitHubIcon style={{marginLeft:"9px"}}/></Link></div>
                    {/* <div class="flex flex-row text-md space-x-5 mt-4 px-9"><FiberManualRecordIcon/><p>Country</p><p> Bangladesh</p></div> */}
                  </div>
                </div>
                <img src={image} alt={"img"} class="xxs:h-0 xxs:w-0 xs:h-0 xs:w-0 sm:h-40 sm:w-40 lg:h-80 lg:w-80 rounded-full shadow-md shadow-yellow-400 sm:mr-5 lg:mr-40" />
                {/* <div></div> */}
                {/* <p class="border-4 border-yellow-400 h-10">hshash</p> */}
            </div>


            <div class="grid xs:grid-cols-1 sm:grid-cols-2 border border-transparent border-t-zinc-300 xxs:mt-5 xs:mt-14 sm:mt-60 lg:mt-24 xxs:ml-6 xs:ml-12 sm:ml-24 mr-24">
              <div class="lg:ml-6 mb-8">
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
                      <div class="flex  flex-row xxs:space-x-10 xs:space-x-10 sm:space-x-4">
                      <p class="text-zinc-50">Bachelor's In Computer Science -</p>
                      <p class="text-zinc-50 font-mono font-bold">Premier University</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="border border-transparent border-t-zinc-300 xxs:mt-4 xs:mt-8 xxs:ml-6 xs:ml-10 sm:ml-24 mr-24">
              <div class="xxs:ml-3 xs:ml-3 sm:ml-6 xxs:mb-16 sm:mb-48">
                <Typography variant="h6" style={{color:"white",marginTop:"20px"}}>
                  SKILLS
                </Typography>
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 xxs:ml-7 sm:ml-10 lg:ml-10 text-zinc-50">
                {
                  Object.keys(Obj).map(key =>{
                    // eslint-disable-next-line
                    {/* console.log(key) */}
                    return(
                      <div>
                        {/* <p color='green'style={{ fontWeight: "bold", fontSize: "20px" }}>{key}</p> */}
                        <Typography variant="h6"class="border border-yellow-400  rounded-full sm:w-36 sm:text-base lg:w-44 flex justify-center sm:py-3 sm:px-2 lg:py-2 lg:px-1" style={{color:"white",marginTop:"20px"}}>
                          {key}
                        </Typography>
                        {
                          Obj[key].map((item, index) => {
                            return(
                              <div key={index} class="flex flex-row text-md space-x-5 mt-4 px-9 ">
                                <PsychologyIcon style={{color:"yellow"}} />
                                <p>{item}</p>
                              </div>
                            )
                          })
                        }
                      </div>
                    )
                  })
                }
                </div>
              
              </div>
            </div>

      </div>
      
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