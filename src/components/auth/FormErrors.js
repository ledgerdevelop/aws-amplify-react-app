import React from "react";

function FormErrors(props) {
  if (
    props.formerrors &&
    (props.formerrors.blankfield || props.formerrors.passwordmatch)
  ) {
    return (
      <div className="box-inner">
        <div className = "text-md-orange">
          {props.formerrors.passwordmatch
            ? "Achtung: Die angegebenen Passwörter stimmen nicht überein"
            : ""}
        </div>
        <div className = "text-md-orange">
          {props.formerrors.blankfield ? "Achtung: Alle Felder müssen ausgefüllt sein" : ""}
        </div>
      </div>
    );
  } else if (props.apierrors) {
    return (
      <div className="box-inner">
        <div className = "text-md-orange">{props.apierrors}</div>
      </div>
    );
  } else if (props.formerrors && props.formerrors.cognito) {
    return (
      <div className="box-inner">
        <div className = "text-md-orange">
          {props.formerrors.cognito.message}
        </div>
      </div>
    );
  } else {
    return <div />;
  }
}

export default FormErrors;