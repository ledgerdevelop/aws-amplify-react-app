import React, { Component } from 'react';
import FormErrors from "./FormErrors";
import Validate from "../utility/FormValidation";
import { Auth } from 'aws-amplify';
// import book from '../../images/book_password.png';

class ForgotPassword extends Component {
  state = {
    email: "",
    errors: {
      cognito: null,
      blankfield: false
    }
  }

  clearErrorState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false
      }
    });
  }

  forgotPasswordHandler = async event => {
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
      await Auth.forgotPassword(this.state.email);
      // redirect
      this.props.history.push('/forgotpasswordverification');
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
  }

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
          <h1>Passwort vergessen?</h1>
          <p className="text-md">
            Wir schicken Dir einen Code per E-Mail, damit Du ein neues Passwort vergeben kannst.
          </p>
          <form onSubmit={this.forgotPasswordHandler}>
            <div className="field">
              <p>
                <input
                  type="email"
                  className="input"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Gib deine E-Mailadresse ein"
                  value={this.state.email}
                  onChange={this.onInputChange}
                />
              </p>
            </div>
            <FormErrors formerrors={this.state.errors} />
            <div className="field">
                <button className="btn btn-light-outline">
                  Bestätigen
                </button>
            </div>
          </form>
          {/* <img src={book} alt="Relax" /> */}
        </div>
      </section>
    );
  }
}

export default ForgotPassword;