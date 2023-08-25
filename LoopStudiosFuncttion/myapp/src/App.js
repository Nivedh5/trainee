// import {Div} from "./divelement"
// import {FaStar} from "react-icons/fa";
import {styled} from "styled-components"
import { useState } from "react";
// import Project from "./project";
import MainProfile from "./landingPageSection1"
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Action from './quickActions';
import About from './About';
import PrivateRoutes from "./ProtectedRoute";


function App() {
  const [Render,SetRender]=useState(false)
  const[auth,setAuth] = useState(false);
  return (
    <div>
    <Router>
      <Routes>
      <Route path='/'  exact element={<MainProfile Render={Render} SetRender={SetRender}auth={auth} setAuth={setAuth}/>}/>
        <Route element={<PrivateRoutes auth={auth}/>}>
        <Route path='/profile' element={<Action Render={Render} SetRender={SetRender} auth={auth} setAuth={setAuth}/>} />
        </Route>
        <Route path='/About' element={<About Render={Render} SetRender={SetRender} auth={auth} setAuth={setAuth}/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;