
import LandingPage from './LoopstudiosLandingPage';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Action from './quickActions';
import About from './About';
import { useState } from 'react';
import PrivateRoutes from './ProtectedRoute';
function App() {
  const [Render,SetRender]=useState(false)
  const[auth,setAuth] = useState(false);
  return (
    <div>
    <Router>
      <Routes>
      <Route path='/'  exact element={<LandingPage Render={Render} SetRender={SetRender}auth={auth} setAuth={setAuth}/>}/>
        <Route element={<PrivateRoutes auth={auth}/>}>
        <Route path='/Action' element={<Action Render={Render} SetRender={SetRender} auth={auth} setAuth={setAuth}/>} />
        <Route path='/About' element={<About Render={Render} SetRender={SetRender} auth={auth} setAuth={setAuth}/>}/>
        </Route>
        <Route path='/About' element={<About Render={Render} SetRender={SetRender} auth={auth} setAuth={setAuth}/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
