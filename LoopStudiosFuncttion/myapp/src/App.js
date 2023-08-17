
import LandingPage from './LoopstudiosLandingPage';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Action from './quickActions';
import About from './About';
function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path='/'  exact element={<LandingPage/>}/>
        <Route path='/Action' element={<Action/>} />
        <Route path='/About' element={<About/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
