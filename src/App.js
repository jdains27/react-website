import React, { Component } from 'react';
import axios from 'axios'
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
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

export default class App extends Component {

  state = {
    loggedInStatus: "NOT LOGGED IN", 
    user: {}
  }

  checkLoginStatus = () => {
    axios.get("http://localhost:3001/logged_in", { withCredentials: true })
    .then(response => {
      if(response.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN"){
        this.setState({
          loggedInStatus: "LOGGED IN", 
          user: response.data.user
        })
      } else if (!response.data.logged_in && this.state.loggedInStatus === "LOGGED_IN"){
        this.setState({
          loggedInStatus: "NOT LOGGED IN", 
          user: {}
        })
      }
    })
    .catch(err => {
      console.log("check login error", err)
    })
  }

  componentDidMount(){
    this.checkLoginStatus()
  }

  handleLogin = (data) => {
    this.setState({
      loggedInStatus: "LOGGED IN",
      user: data.user
    })
  }

  handleLogout = () => {
    this.setState({
      loggedInStatus: "NOT LOGGED IN", 
      user: {}
    })
  }

  render() {
  return ( 
    <div className='app'>
      <Router>
        <Navbar/>
        <Switch>
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
          <Route 
              exact path={"/"} 
              render={props => (
                <Home {...props} 
                  loggedInStatus={this.state.loggedInStatus} 
                  handleLogin={this.handleLogin} 
                  handleLogout={this.handleLogout} />
              )}
            />
            <Route 
              exact path={"/dashboard"} 
              render={props => (
                <Dashboard {...props} 
                  loggedInStatus={this.state.loggedInStatus} 
                  handleLogin={this.handleLogin} 
                  handleLogout={this.handleLogout} />
              )}
            />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
              }
            }

