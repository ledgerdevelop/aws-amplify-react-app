import React, { Component } from 'react';
import FormErrors from "./FormErrors";
import Validate from "../utility/FormValidation";
import {Auth} from "aws-amplify";

class ChangePassword extends Component {
  state = {
    oldpassword: "",
    newpassword: "",
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
    try {
      const user = await Auth.currentAuthenticatedUser();
      await Auth.changePassword(
          user,
          this.state.oldpassword,
          this.state.newpassword
      );
      // redirect
      this.props.history.push('/changepasswordconfirmation');
    } catch ( error ) {
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
  }

  render() {
    return (
      <section className="box bg-primary text-center py-md">
        <div className="box-inner">
          <h1 className="auth-headline">Passwort ändern</h1>
          <p className = "text-sm">Mindestens 8 Zeichen, einen Klein- und Großbuchstaben und ein Sonderzeichen.</p>
          <FormErrors formerrors={this.state.errors} />
          <form onSubmit={this.handleSubmit}>
            <div>
              <p>
                <input 
                  className="input" 
                  type="password"
                  id="oldpassword"
                  placeholder="Altes Passwort"
                  value={this.state.oldpassword}
                  onChange={this.onInputChange}
                />
              </p>
            </div>
            <div>
              <p>
                <input
                  className="input"
                  type="password"
                  id="newpassword"
                  placeholder="Neues Passwort"
                  value={this.state.newpassword}
                  onChange={this.onInputChange}
                />
                <span className="">
                  <i className="k"></i>
                </span>
              </p>
            </div>
            <div>
              <p>
                <input
                  className="input"
                  type="password"
                  id="confirmpassword"
                  placeholder="Passwort bestätigen"
                  value={this.state.confirmpassword}
                  onChange={this.onInputChange}
                />
                <span className="">
                  <i className=""></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="">
                <button className="btn btn-light-outline">
                  Bestätigen
                </button>
              </p>
            </div>
            <div class="divider"></div>
            <div>
                <a href="/forgotpassword">Passwort vergessen?</a>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default ChangePassword;