
import 'bootstrap/dist/css/bootstrap.min.css';
// import "node_modules/video-react/dist/video-react.css"; 
import './App.css';
import Content from './Components/Content'
import {
  BrowserRouter as Router
  // Routes,
  // Route
} from "react-router-dom";
import Sidebar from './Components/Sidebar';

// import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <Router>
    <div className='AppContainer'>
      <Sidebar/>
      <Content/>
    </div>
    </Router>
    </>
  );
}

export default App;
