import React, { useEffect, useState } from 'react';
import '../style/introduction.css';
import mainImage from '../assets/images/mainImg.webp';
import linkedIn from '../assets/images/linkedIn.webp'

const Introduction = () => {

  return (
    <>
      <section className="container main-section" id="main-section">

        <div className="main-section-inner">
          <div className="intro-section">
            <div className="content">
              <div className="inner">
                <span className="subtitle">Welcome to my world</span>
                <h1>
                  Hi, I’m <span> Jone Lee </span>
                  a Developer.
                </h1>
                <div className="description">
                  <p>I use animation as a third dimension by which to simplify
                    experiences and kuiding thro each and every interaction. I’m not adding
                    motion
                    just to spruce things up, but doing it in ways that.</p>
                </div>
                <div className="social-links">
                  <div className="contact-links">
                    <div className="social-share-inner-left">
                      <span>find with me</span>
                      <ul>
                        <li className="facebook">
                          <a href="#" aria-label="facebook">

                          </a>
                        </li>
                        <li className="instagram">
                          <a href="#" aria-label="Instagram">

                          </a>
                        </li>
                        <li className="linkedin">
                          <a href="#" aria-label="LinkedIn">
                          </a>
                        </li>
                        <li className="linkedin">
                          <a href="#" aria-label="whatapp">

                          </a>
                        </li>
                      </ul>
                    </div>

                  </div>
                  <div className="skills-links">
                    <div className="social-share-inner-right">
                      <span>best skill on</span>
                      <ul>
                        <li>
                          <figure>
                            <img src={linkedIn} alt="logo"
                              width="23" height="23" />
                          </figure>
                        </li>
                        <li>
                          <figure>
                            <img src={linkedIn} alt="" width="23"
                              height="23" />
                          </figure>
                        </li>
                        <li>
                          <figure>
                            <img src={linkedIn} alt='linkedIn' width="23"
                              height="23" />
                          </figure>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="intro-image">
            <div className="thumbnail">
              <div className="inner">
                <img src={mainImage} alt="Developer Image" width="509" className="lazy-load" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Introduction;
