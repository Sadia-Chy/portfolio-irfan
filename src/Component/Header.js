import React from 'react';
import { Link } from 'react-router-dom';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import HomeIcon from '@mui/icons-material/Home';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
export default function Header() {
  return (
    <>
    <div class="flex flex-col space-y-4 mt-20 ml-16">
                <Link to="/" class="flex flex-row text-lg text-zinc-100"><HomeIcon/> <p class="px-2">Home</p></Link>
                <Link to="/about"  class="flex flex-row text-lg text-yellow-400"><PermIdentityOutlinedIcon/><p class="px-2">About</p></Link>
                <Link to="/portfolio"  class="flex flex-row text-lg text-zinc-100"><BusinessCenterOutlinedIcon/><p class="px-2">Portfolio</p></Link>
                </div>
    </>
  );
}
