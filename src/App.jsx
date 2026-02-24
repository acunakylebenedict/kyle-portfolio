import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { Education } from "@/sections/Education";
function App() {
  return (
 <div className="min-h-screen overflow-x-hidden" >
  <Navbar />
  <main>
    <Hero/>
    <About/>
      <Education/>
    <Experience/>
     <Projects/>
    <Contact/>
  </main>
 </div>
  );
}

export default App;