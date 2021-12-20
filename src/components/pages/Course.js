import React, { Fragment } from 'react';

export const Courses = () => {
  return (
    <Fragment>
      <section className="box bg-primary text-center py-md">
        <div className="box-inner">
          <h2 className="text-lg">Dein Kurs</h2>
          <p className="text-md">
            Dein Überblick
          </p>
        </div>
      </section>
  </Fragment>
  );
};

export const CourseOverview = () => {
  return (
    <div className='courses'>
      <h1 className='h1'>Deine Kursübersicht</h1>
    </div>
  );
};

export const CourseProgress = () => {
  return (
    <div className='courses'>
      <h1 className='h1'>Dein Fortschritt</h1>
    </div>
  );
};
