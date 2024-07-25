
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, SlideTabsExample} from "./components";



const App = () => {

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-rose-950'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center mt-[-54px]'>
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
