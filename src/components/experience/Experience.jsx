import React from 'react'
import './experience.css'
import FrontEnd from './data';
import BackEnd from './backend';
import Mobile from './mobile';
import Networking from './network';

const Experience = () => {
  return (
    <section id="experience">
      <h5>The skills I have</h5>
      <h2>My Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>

          <div className="experience__content">
            {FrontEnd.map((data) => (
              <article key={data.id} className="experience__details">
                {data.icon}
                <div>
                  <h4>{data.title}</h4>
                  <small className="text-light">{data.lebel}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        {/* End of frontend part */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {BackEnd.map((data) => (
              <article key={data.id} className="experience__details">
                {data.icon}
                <div>
                  <h4>{data.title}</h4>
                  <small className="text-light">{data.lebel}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="experience__backend">
          <h3>Mobile App Development</h3>
          <div className="experience__content">
            {Mobile.map((data) => (
              <article key={data.id} className="experience__details">
                {data.icon}
                <div>
                  <h4>{data.title}</h4>
                  <small className="text-light">{data.lebel}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="experience__backend">
          <h3>Computer Networks and System Analysis and Development</h3>
          <div className="experience__content">
            {Networking.map((data) => (
              <article key={data.id} className="experience__details">
                {data.icon}
                <div>
                  <h4>{data.title}</h4>
                  <small className="text-light">{data.lebel}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience