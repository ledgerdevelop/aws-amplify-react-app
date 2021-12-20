import React from 'react';

export default function Welcome() {
  return (
    <section className="box bg-primary text-center py-md">
      <div className="box-inner">
        <h1 class="text-lg">Herzlich Willkommen</h1>
        <div class="divider"></div>
        <p className = "text-sm">Du hast Dich erfolgreich registriert.</p>
        <p className = "text-sm">Um die Registrierung abzuschließen, bestätige bitte Deine Registrierung mit dem Link aus der E-Mail.</p>
        <p className = "text-sm">Wir freuen uns auf Dich!</p>
        <a href="/login">Jetzt einloggen</a>
      </div>
    </section>
  )
}
