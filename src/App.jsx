"use client"
import Lenis from "lenis";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import {SlideTabsExample} from '../src/components/SlideTabs'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works,} from "./components";



const App = () => {
  useEffect( () => {
    const lenis = new Lenis()
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

},[])
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-rose-950'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center mt-6'>
        <SlideTabsExample/>
          {/* <Navbar /> */}
          <Hero />
          
        </div>
        <About />
        <Experience />
        
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
      
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
