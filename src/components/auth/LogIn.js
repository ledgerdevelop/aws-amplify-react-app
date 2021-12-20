import React, { Component } from 'react';
import FormErrors from "./FormErrors";
import Validate from "../utility/FormValidation";
import { Auth } from "aws-amplify";

class LogIn extends Component {
  state = {
    username: "",
    password: "",
    errors: {
      cognito: null,
      blankfield: false
    }
  };

  clearErrorState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false
      }
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    // Form validation
    this.clearErrorState();
    const error = Validate(event, this.state);
    if (error) {
      this.setState({
        errors: { ...this.state.errors, ...error }
      });
    }

    // AWS Cognito integration here
    try{
      const user = await Auth.signIn(this.state.username, this.state.password);
      console.log(user);
      // after login set Auth & User
      this.props.auth.setAuthStatus(true);
      this.props.auth.setUser(user);
      // go to start-page
      this.props.history.push("/home");
    } catch (error) {
      let err = null;
      !error.message ? err = { "message": error } : err = error;
      this.setState({
        errors: {
          ...this.state.errors,
          cognito: err,
        }
      });
    }
  };

  onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    document.getElementById(event.target.id);
  };

  render() {
    return (
      <section className="box bg-primary text-center py-md">
        <div className="box-inner">
        <p className="text-md">Login-Bereich</p>
          <FormErrors formerrors={this.state.errors} />
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <p className="">
                <input 
                  className="input" 
                  type="text"
                  id="username"
                  aria-describedby="usernameHelp"
                  placeholder="Deine E-Mail oder Dein Username"
                  value={this.state.username}
                  onChange={this.onInputChange}
                />
              </p>
            </div>
            <div className="field">
              <p className="">
                <input 
                  className="input" 
                  type="password"
                  id="password"
                  placeholder="Dein Passwort"
                  value={this.state.password}
                  onChange={this.onInputChange}
                />
              </p>
            </div>
            <div>
                <button class="btn btn-light-outline">
                  Login
                </button>
            </div>
            <div class="divider"></div>
            <div>
                <a href="/forgotpassword">Passwort vergessen?</a>
            </div>
            <div class="divider"></div>
            <div>
              <p>Noch nicht registriert?</p>
              <a href="/register">Jetzt registrieren</a>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default LogIn;