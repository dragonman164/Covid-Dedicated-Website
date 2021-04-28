import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/NavBar';
import Footer from './Components/Footer';
import {Switch,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Resources from './Pages/Resources';
import Testing from './Pages/Testing';
import Tracker from './Pages/Tracker';


function App() {
  return (
   <>
   <Navbar/>
   <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/testing" component={Testing}/>
    <Route exact path="/track" component={Tracker}/>
    <Route exact path="/resources" component={Resources}/>
   </Switch>
   <Footer/>
   </>
  );
}

export default App;
