
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Footer from './components/footer'
import Header from './components/header'
import Home from './components/home' 
import Research from './components/research'
import ResearchArea from './components/researchArea'
import People from './components/people'
import About from './components/about' 
import Publications from './components/publications'
import './scss/App.scss';
function App() {
  return (
    <HashRouter>
    <div className="App">
    <Header/>
  
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/research" component={Research}/>
        <Route path="/research/area1" component={ResearchArea}/>
        <Route path="/about" component={About}/>
        <Route path="/people" component={People} />
        <Route path="/publications" component={Publications} />
      </Switch>
    <Footer/>
    </div>
    
    </HashRouter>
  );
}

export default App;
