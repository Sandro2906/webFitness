import './index.css'
import Hello from "./componentss/Hello";
import Navbar from "./componentss/Navbar";
import Food from './componentss/Food';
import Proteini from './componentss/Proteini'
import Masti from './componentss/Masti'
import Hidrati from "./componentss/Hidrati";
import Exercise from './componentss/Exercise';
import Contact from './componentss/Contact';
import Footer from './componentss/Footer';


function App() {
  return (
    <div>
        <Navbar />
        <Hello />
        <Food />
        <Proteini />
        <Masti />
        <Hidrati />
        <Exercise />
        <Contact/>
        <Footer />
    </div>
  );
}

export default App;
