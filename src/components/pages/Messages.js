import React, { Fragment } from 'react';

const Message = (props) => {
  return (
    <Fragment>
      <section className="box bg-primary text-center py-md">
        <div className="box-inner">
          <h2 className="text-lg">Deine Fragen</h2>
          <p className="text-md">
            Du hast Fragen zum Kurs? Stell sie hier*
          </p>
        </div>
      </section>

      {!props?.auth?.isAuthenticated && ( 
      <section className="box bg-secondary text-center py-md">
      <div className="box-text">
        <p className="text-md">
          Dieser Bereich ist nur für registrierte bzw. eingeloggte Nutzer verfügbar, die einen krankenkassenzertifizierten Kurs gebucht haben.
        </p>
      </div>
      <div className="divider"></div>
            <div className="field">
              <p>Noch nicht registriert?</p>
              <a href="/register">Jetzt registrieren</a>
            </div>
    </section>
      )}

    </Fragment>
  );
};

export default Message;
