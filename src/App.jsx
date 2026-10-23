import React, { useState } from 'react'
import "./App.css";
import { LoadingScreen } from './component/LoadingScreen';
import "./index.css";
import { Navbar } from './component/Navbar';
import { MobileMenu } from './component/MobileMenu';
import { Home } from './component/section/Home';
import { About } from './component/section/About';
import {Project} from './component/section/Project'
import { Contact } from './component/section/Contact';

export default function App() {
 const [isLoaded,setIsloaded]=useState(false);
  const [menuOpen,setMenuOpen]=useState(false);

  return (
    <div>
     <> {!isLoaded && <LoadingScreen onComplete={()=>setIsloaded(true)}/> }
      <div className={`min-h-screen transition-opacity duration-700 
        ${isLoaded ? "opacity-100":"opacity-0"}
        bg-black text-gray-100`}>

          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
           <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
           <Home/>
           <About/>
           <Project />
           <Contact/>

      </div>
      
      </>
     
    </div>
  )
}
