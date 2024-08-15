
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, SlideTabsExample} from "./components";



const App = () => {

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-rose-950'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <SlideTabsExample/>
          <Hero />
        </div>
        <div className="mt-[540px]">
        <About />
        </div>
        
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
