import React, { Component } from 'react';
import FormErrors from "./FormErrors";
import Validate from "../utility/FormValidation";
import { Auth } from 'aws-amplify';

class ForgotPasswordVerification extends Component {
  state = {
    verificationcode: "",
    email: "",
    newpassword: "",
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

  passwordVerificationHandler = async event => {
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
      await Auth.forgotPasswordSubmit(
          this.state.email,
          this.state.verificationcode,
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
    document.getElementById(event.target.id).classList.remove("is-danger");
  };

  render() {
    return (
      <section className="box bg-primary text-center py-md">
        <div className="box-inner">
          <h1>Neues Passwort setzen</h1>
          <p className="text-md">
            Bitte nutze den Verifizierungscode aus der Dir zugesandten E-Mail ein.
          </p>
          <form onSubmit={this.passwordVerificationHandler}>
            <div className="field">
              <p className="">
                <input
                  type="text"
                  className="input"
                  id="verificationcode"
                  aria-describedby="verificationCodeHelp"
                  placeholder="Dein Verifizierungscode"
                  value={this.state.verificationcode}
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
                  placeholder="Deine E-Mailadresse"
                  value={this.state.email}
                  onChange={this.onInputChange}
                />
              </p>
            </div>
            <p className="text-sm">Mindestens 8 Zeichen, einen Klein- und Großbuchstaben und ein Sonderzeichen.</p>
            <div className="field">
              <p>
                <input
                  type="password"
                  className="input"
                  id="newpassword"
                  placeholder="Neues Passwort"
                  value={this.state.newpassword}
                  onChange={this.onInputChange}
                />
                <span className="">
                  <i className=""></i>
                </span>
              </p>
            </div>
            <FormErrors formerrors={this.state.errors} />
            <div>
                <button className="btn btn-light-outline">
                  Bestätigen
                </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default ForgotPasswordVerification;