
import 'bootstrap/dist/css/bootstrap.min.css';
// import "node_modules/video-react/dist/video-react.css"; 
import './App.css';
import {
  BrowserRouter as Router
  // Routes,
  // Route
} from "react-router-dom";

import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
    </Router>
    </>
  );
}

export default App;
