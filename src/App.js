import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Stretch from './components/pages/Stretch';
import Updates from './components/pages/Updates';
import Terms from './components/pages/Terms';
import AboutUs from './components/pages/AboutUs';
import Contact from './components/pages/Contact';
import Feedback from './components/pages/Feedback';
import Support from './components/pages/Support';
import OtherProjects from './components/pages/OtherProjects';
import AboutChess from './components/pages/AboutChess';
import PlayerChess from './components/pages/PlayerChess';
import Learn from './components/pages/Learn';
import MyTeaching from './components/pages/MyTeaching';
import TraditionalTeaching from './components/pages/TraditionalTeaching';
import CoolChess from './components/pages/CoolChess';
import Dashboard from './components/Dashboard';


function App() {
  return ( 
    <>
      <Router>
        <Navbar  />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/stretch' component={Stretch} />
          <Route path='/updates' component={Updates} />
          <Route path='/terms' component={Terms} />
          <Route path='/aboutus' component={AboutUs} />
          <Route path='/contact' component={Contact} />
          <Route path='/feedback' component={Feedback} />
          <Route path='/support' component={Support} />
          <Route path='/otherprojects' component={OtherProjects} />
          <Route path='/aboutchess' component={AboutChess} />
          <Route path='/playerchess' component={PlayerChess} />
          <Route path='/learn' component={Learn} />
          <Route path='/myteaching' component={MyTeaching} />
          <Route path='/traditionalteaching' component={TraditionalTeaching} />
          <Route path='/coolchess' component={CoolChess} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
