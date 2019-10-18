import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from "axios"

// import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash, faSignOutAlt, faEdit, faSpinner, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import PortfolioContainer from './portfolio-container';
import NavigationContainer from './navigation-container'
import Home from "./Pages/home"
import About from "./Pages/about"
import Contact from "./Pages/contact"
import Blog from "./Pages/blog"
import PortfolioDetail from "./pages/portfolio-detail"
import Auth from "./pages/auth"
import NoMatch from "./Pages/no-match"
import PortfolioManager from "./pages/portfolio-manager";
import BlogDetail from "../components/Pages/blog-detail"

// library.add(faTrash, faSignOutAlt, faEdit, faSpinner, faPlusCircle)
import Icons from "../helpers/helpers"


export default class App extends Component {
  constructor(props){
    super(props);

    Icons();

    this.state ={
      loggedInStatus: "NOT_LOGGED_IN"
    }
    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this)
    this.handleUnSuccessfulLogin = this.handleUnSuccessfulLogin.bind(this)
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);

  }

  handleSuccessfulLogin(){
    this.setState({
      loggedInStatus: "LOGGED_IN"
    })
  }

  handleUnSuccessfulLogin(){
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  handleSuccessfulLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }

  checkLoginStatus() {
    return axios
      .get("https://api.devcamp.space/logged_in", {
        withCredentials: true
      })
      .then(response => {
        const loggedIn = response.data.logged_in;
        const loggedInStatus = this.state.loggedInStatus;

        // If loggedIn and status LOGGED_IN => return data
        // If loggedIn status NOT_LOGGED_IN => update state
        // If not loggedIn and status LOGGED_IN => update state

        if (loggedIn && loggedInStatus === "LOGGED_IN") {
          return loggedIn;
        } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({
            loggedInStatus: "LOGGED_IN"
          });
        } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN"
          });
        }
      })
      .catch(error => {
        console.log("Error", error);
      });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  authorizedPages() {
    return [
      <Route path="/portfolio-manager" component={PortfolioManager} />
    ];
  }

  render() {
    return (
      
      <div className='container'>
        <Router>
            <div>
              <NavigationContainer 
                loggedInStatus={this.state.loggedInStatus}
                handleSuccessfulLogout={this.handleSuccessfulLogout}
              />
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route
                  path="/auth"
                  render={props => (
                    <Auth
                      {...props}
                      handleSuccessfulLogin={this.handleSuccessfulLogin}
                      handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                    />
                  )}
                />
                <Route path="/about-me" component={About}></Route>
                <Route path="/contact" component={Contact}></Route>
                {this.state.loggedInStatus === "LOGGED_IN" ? (this.authorizedPages()) : null}
                <Route path="/portfolio/:slug" component={PortfolioDetail} />
                <Route 
                    path="/blog" 
                    render={props => 
                    <Blog {...props} loggedInStatus={this.state.loggedInStatus} />
                    }
                    
                />
                <Route 
                    path="/b/:slug" 
                    render={props =>(
                      <BlogDetail {...props} loggedInStatus={this.state.loggedInStatus} />
                    )}
                />
                <Route path="/portfolio-manager" component={PortfolioManager} />
                <Route component={NoMatch}></Route>
              </Switch>
            </div>

        </Router>

        

        

      </div>
    );
  }
}
