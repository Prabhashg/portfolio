import { BrowserRouter as Router, } from "react-router-dom";
import AnimatedPages from "./components/AnimatedPages";
import Navbar from "./components/Navbar"
import Background from "./components/Background"
import Cursor from "./components/Cursor"
import Modal from "./components/Modal";


function App() {
 
  return (
    <>
     
      <div className="bg-bg-black text-white min-h-screen ">
        <Router>
          {/* <Navbar /> */}
          <AnimatedPages/>
          <Background />
        </Router>
      </div>
    </>
  );
}

export default App;
