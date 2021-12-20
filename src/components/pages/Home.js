import React, { Fragment } from 'react';
import relax_meditation from '../../images/relax_meditation.png';
import meditation_woman from '../../images/meditation_woman.png';
import meditation_man from '../../images/meditation_man.png';
import graduation from '../../images/graduation.png';
import social_instagram from '../../images/social_instagram.svg';
import social_spotify from '../../images/social_spotify.svg';
import social_youtube from '../../images/social_youtube.svg';

export const Home = (props) => {
  return (
    <Fragment>
    <section className="box bg-primary text-center py-md">
      <div className="box-inner">
        <h2 className="text-lg">Autogenes Training Online</h2>
        {!props?.auth?.isAuthenticated && (  
          <div> 
            <p className="text-md">
            Dein Kurs schon ab 29 Euro oder krankenkassenzertifiert
          </p>
          <a href="/courses">Mehr erfahren</a>
          </div>
          )}
        {props?.auth?.isAuthenticated && props?.auth?.user && (
        <div>  
          <h1>Willkommen zurück, {props.auth?.user?.username}!</h1>
        </div>
        )}
      </div>
    </section>

    <section className="box bg-primary grid-col-2">
      <img src={relax_meditation} alt="Relax" />
      {!props?.auth?.isAuthenticated && (  
      <div className="box-text">
        <h2 className="text-lg">Erste Einheit Kostenlos</h2>
        <p className="text-md">
          Registriere dich jetzt kostenlos und schau dir den Kursinhalt der ersten Einheit an, um Dich sicher zu entscheiden
        </p>
        <a href="/register" className="btn btn-light-outline">Jetz registrieren</a>
      </div>
      )}
      {props?.auth?.isAuthenticated && props?.auth?.user && (  
        <div className="box">
        <p className="text-md">Mache jetzt da weiter, wo Du aufgehört hast.</p>
        <a href="/courses">Zu meinem Kurs</a>
        <div className="divider"></div>
        <p className="text-sm">Möchtest Du Dein Passwort ändern?</p>
          <div>
              <a href="/changepassword">Passwort ändern?</a>
          </div>
        </div>
      )}
    </section>

    <section className="box box-b bg-secondary grid-col-2">
      <img src={meditation_woman} alt="Beautiful Shop" />
      <div className="box-text">
        <h2 className="text-lg">Deshalb Autogenes Training</h2>
        <p className="text-md">
          Autogenes Training ist eine bewährte und beliebte Entspannungsmethode. Da sie wissenschaftlich gut untersucht ist wird sie von den Krankenkassen anerkannt und bezuschusst.
        </p>
        <a href="/courses">Mehr erfahren</a>
      </div>
    </section>

    {!props?.auth?.isAuthenticated && (    
    <section className="box box-c bg-secondary grid-col-2 grid-reversed">
      <img src={graduation} alt="Graduation" />
      <div className="box-text">
        <h2 className="text-lg">Kurse zum verlieben</h2>
        <p className="text-md">
          Ein Kurs umfasst 8 Einheiten à 30 Minuten mit anschließendem Feedback.
        </p>
        <a href="/courses">Mehr erfahren</a>
      </div>
    </section>
    )}

    {!props?.auth?.isAuthenticated && (
    <section className="box grid-col-2">
      <div>
        <img src={meditation_man} alt="Order" />
        <div className="bg-extra py-lg">
          <div className="box-text">
            <h2 className="text-md">Basis-Kurs buchen</h2>
            <p className="text-sm">
              Du möchtest den Basis-Kurs für 29 Euro buchen? Gute Entscheidung, denn die Qualität unterscheidet sich nur in wenigen Punkten zu der krankenkassenzertifizierten Version.
            </p>
            <a href="/shop" className="btn btn-dark-outline">Jetzt buchen</a>
          </div>
        </div>
      </div>
      <div>
        <img src={meditation_woman} alt="Order" />
        <div className="bg-primary py-lg">
          <div className="box-text">
            <h2 className="text-md">Zertifizierten Kurs buchen</h2>
            <p className="text-sm">
              Du möchtest den krankenkassenzertifizierten Kurs für 69 Euro buchen? Super, denn hier wird dein Kurs bei sehr vielen Kassen bis zu 100% erstattet und du hast die Möglichkeit nachfragen zu den Inhalten zu stellen.
            </p>
            <a href="/shop" className="btn btn-light-outline">Jetzt buchen</a>
          </div>
        </div>
      </div>
    </section>
    )}
    <div className="divider"></div>

    <footer className="footer">
      <div className="footer-container">
        <div className="social">
          <a href="https://spotify.com">
            <img src={social_spotify} alt="Spotify" />
          </a>
          <a href="https://instagram.com">
            <img src={social_instagram} alt="Instagram" />
          </a>
          <a href="https://youtube.com">
            <img src={social_youtube} alt="YouTube" />
          </a>
        </div>
        <p>2021 by David L.</p>
        <div className="box-inner">
          <div className="box-text">
            <p>Die auf dieser Seite eingebundenen Bilder sind von verschiedenen Grafik-DesignerInnen publiziert auf pngtree</p>
            <ul>
              <li><a href="https://pngtree.com/peterin_10846350" alt="Pngtree">meditation clipart PNG Designed By peterIN</a></li>
              <li><a href="https://de.pngtree.com/baiqi_30516117" alt="Pngtree">cartoon stil PNG Designed By Baiqi</a></li>
              <li><a href="https://de.pngtree.com/baiqi_30516117" alt="Pngtree">meditation PNG Designed By Baiqi</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </Fragment>
  );
};

// export const HomeOverview = () => {
//   return (
//     <div className='home'>
//       <h1 className='h1'>Deine Übersicht</h1>
//     </div>
//   );
// };

// export const HomeFAQ = () => {
//   return (
//     <div className='home'>
//       <h1 className='h1'>FAQ - Frequently Asked Questions</h1>
//     </div>
//   );
// };

// export const HomeAbout = () => {
//   return (
//     <div className='home'>
//       <h1 className='h1'>Über uns</h1>
//     </div>
//   );
// };