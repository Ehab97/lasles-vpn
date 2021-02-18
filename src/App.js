import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Testmonials from './components/pages/Testmonials';
import Pricing from './components/pages/Pricing';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Navbar from './components/layouts/Navbar';
import Network from './components/pages/Network';
import SignIn from './components/register/Sign-in';
import SignUp from './components/register/Sign-up';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header/> */}
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={Network}/>
          <Route exact path="/testmonials" component={Testmonials}/>
          <Route exact path="/features" component={About}/>
          <Route exact path="/pricing" component={Pricing}/>
          <Route exact path="/sign-in" component={SignIn}/>
          <Route exact path="/sign-up" component={SignUp}/>
          <Route  path="*" component={NotFound}/>
        </Switch>
        <Footer/>
     </div>
    </Router>
  );
}

export default App;
