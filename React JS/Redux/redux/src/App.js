import logo from './logo.svg';
// import Container from './components/container';
import HookContainer from"./components/hooksContainer"
import { Provider } from 'react-redux';
// import store from './redux/input/inputStore';
import store from './redux/fetching/fetchStore';
import './App.css';
import YourComponent from "./redux/input/componenet"
import Container from "./components/fetchContainer"

function App() {
  return (
    <Provider store={store}>
    <div className="App">
   {/* <YourComponent/> */}
   <Container/>
    </div>
    </Provider>

  );
}


export default App;
