import React, { Component }from 'react';
import axios from 'axios'
import Login from '../components/auth/Login';
import Registration from '../components/auth/Registration'

class Dashboard extends Component {

  handleSuccessfulAuth = (data) => {
      this.props.handleLogin(data)
      this.props.history.push("/")
  }
  handleLogoutClick = () => {
      axios.delete("http://localhost:3001/logout", { withCredentials: true })
      .then(response => {
          this.props.handleLogout()
      })
      .catch(err => {
          console.log("logout error: ", err)
      })
  }

  render() {
  return (
    <>
      <div>
        <h1> Dashboard </h1>
        <small><h3> Status: {this.props.loggedInStatus} </h3></small>
        <button onClick={()=>this.handleLogoutClick()} >
          Logout
        </button>
        <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
      </div>
    </>
  );
}
}

export default Dashboard;