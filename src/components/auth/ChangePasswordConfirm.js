import React, { Component } from "react";

class ChangePasswordConfirmation extends Component {
  render() {
    return (
      <section className="box bg-primary text-center py-md">
        <div className="box-inner">
          <p>Dein Passwort wurde erfolgreich geändert.</p>
          <div>
              <a href="/home">Bring mich zurück zur Übersicht.</a>
          </div>
        </div>
      </section>
    );
  }
}

export default ChangePasswordConfirmation;