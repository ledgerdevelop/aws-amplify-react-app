import './App.css';
import React, { Component } from 'react';
import Sidebar from './components/navbar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { Courses, CourseProgress, CourseOverview } from './components/pages/Course';
import Faq from './components/pages/Faq';
import { Shop } from './components/pages/Shop';
import Message from './components/pages/Messages';
import { Auth } from 'aws-amplify';
import LogIn from './components/auth/LogIn';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';
import ForgotPasswordVerification from './components/auth/ForgotPasswordVerification';
import ChangePassword from './components/auth/ChangePassword';
import ChangePasswordConfirm from './components/auth/ChangePasswordConfirm';
import Welcome from './components/auth/Welcome';
import Review from './components/pages/Reviews';

// Class Component
// The class component, a stateful/container component, is a regular ES6 class that extends the component class of the React library.
// It is called a stateful component because it controls how the state changes
// and the implementation of the component logic.
// Aside from that, they have access to all the different phases of a React lifecycle method.
// Before the advent of React Hooks, the class component was the only option to create
// a dynamic and reusable component because it gave us access to lifecycle methods
// and all React functionalities.
// https://www.telerik.com/blogs/react-class-component-vs-functional-component-how-choose-whats-difference

class App extends Component {
  // state of User
  state = {
    isAuthenticated: false,
    // processing
    isAuthenticating: true,
    user: null
  }

  // set Auth of User
  setAuthStatus = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  // set User
  setUser = user => {
    this.setState({ user: user });
  };

  // Session Persistence
  async componentDidMount() {
    try {
      // automatically refreshes token when necessary
      const session = await Auth.currentSession();

      this.setAuthStatus(true);
      console.log(session);

      // set current User
      const user = await Auth.currentAuthenticatedUser();
      this.setUser(user);

    } catch (error) {
      console.log(error);
    }
    this.setState({ isAuthenticating: false });
  }

  render() {
    // Auth Props
    const authProps = {
      isAuthenticated: this.state.isAuthenticated,
      user: this.state.user,
      setAuthStatus: this.setAuthStatus,
      setUser: this.setUser,
    };

    return (
      !this.state.isAuthenticating &&
      <Router>
        <Sidebar auth={ authProps }/>
        <Switch>
          <Route exact path='/home' render={(props) => <Home {...props} auth={authProps} />} />
          <Route exact path='/courses' render={(props) => <Courses {...props} auth={authProps} />} />
          <Route exact path='/courses/overview' render={(props) => <CourseOverview {...props} auth={authProps} />} />
          <Route exact path='/courses/courseprogress' render={(props) => <CourseProgress {...props} auth={authProps} />} />
          <Route exact path='/shop' render={(props) => <Shop {...props} auth={authProps} />} />
          <Route exact path='/messages' render={(props) => <Message {...props} auth={authProps} />} />
          <Route exact path='/faq' render={(props) => <Faq {...props} auth={authProps} />} />
          <Route exact path='/reviews' render={(props) => <Review {...props} auth={authProps} />} />
          <Route exact path="/login" render={(props) => <LogIn {...props} auth={authProps} />} />
          <Route exact path="/register" render={(props) => <Register {...props} auth={authProps} />} />
          <Route exact path="/forgotpassword" render={(props) => <ForgotPassword {...props} auth={authProps} />} />
          <Route exact path="/forgotpasswordverification" render={(props) => <ForgotPasswordVerification {...props} auth={authProps} />} />
          <Route exact path="/changepassword" render={(props) => <ChangePassword {...props} auth={authProps} />} />
          <Route exact path="/changepasswordconfirmation" render={(props) => <ChangePasswordConfirm {...props} auth={authProps} />} />
          <Route exact path="/welcome" render={(props) => <Welcome {...props} auth={authProps} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
