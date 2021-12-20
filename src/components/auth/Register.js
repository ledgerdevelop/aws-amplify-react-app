import React, { Component } from 'react';
import FormErrors from "./FormErrors";
import Validate from "../utility/FormValidation";
import { Auth } from "aws-amplify";

class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    errors: {
      cognito: null,
      blankfield: false,
      passwordmatch: false
    }
  }

  clearErrorState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false,
        passwordmatch: false
      }
    });
  }

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
    const { username, email, password } = this.state;
    try{
      const signUpResponse = await Auth.signUp({
        username,
        password,
        attributes: {
          email: email
        }
      });
      console.log(signUpResponse);
      // redirect
      this.props.history.push("/welcome");
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
    document.getElementById(event.target.id).classList.remove("is-danger");
  }

  render() {
    return (
      <section className="box bg-primary text-center py-md">
        <div className="box-inner">
          <p className="text-md">Registrieren</p>

          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <p className="">
                <input 
                  className="input" 
                  type="text"
                  id="username"
                  aria-describedby="userNameHelp"
                  placeholder="Dein Username"
                  value={this.state.username}
                  onChange={this.onInputChange}
                />
              </p>
            </div>
            <div className="field">
              <p className="">
                <input 
                  className="input" 
                  type="email"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Deine E-Mail"
                  value={this.state.email}
                  onChange={this.onInputChange}
                />
                <span className="">
                  <i className=""></i>
                </span>
              </p>
            </div>
            <p className = "text-sm">Mindestens 8 Zeichen, einen Klein- und Großbuchstaben und ein Sonderzeichen.</p>
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
                <span className="">
                  <i className=""></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="">
                <input 
                  className="input" 
                  type="password"
                  id="confirmpassword"
                  placeholder="Passwort wiederholen"
                  value={this.state.confirmpassword}
                  onChange={this.onInputChange}
                />
                <span className="">
                  <i className=""></i>
                </span>
              </p>
            </div>
            <FormErrors formerrors={this.state.errors} />
            <div className="field">
              <p className="">
                <button class="btn btn-light-outline">
                  Bestätigen
                </button>
              </p>
            </div>
            <div class="divider"></div>
            <div>
              <p>Bereits registriert?</p>
              <a href="/login">Zum Login</a>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Register;