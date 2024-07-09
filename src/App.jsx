import { About } from "./Components/About";
import { Contact } from "./Components/Contatos";
import { Features } from "./Components/Features";
import { Galleria } from "./Components/Galeria";
import { Header } from "./Components/Header";
import { Navigation } from "./Components/Navigation";
import { Services } from "./Components/Services";
import { Team } from "./Components/Team";
import { Testimonial } from "./Components/Testimonial";


function App() {
  return (
    <div>
      <Navigation/>
      <Header/>
      <Features/>
      <About/>
      <Services/>
      <Galleria/>
      <Testimonial/>
      <Team/>
      <Contact/>
    </div>
  )
}

export default App;
