import React from "react";
import "./Footer.scss";
export default function footer() {
  return (
    <section className="footer">
      <div className="footer__wrapper">
        <div className="footer__logo"></div>
        <div className="footer__lists">
          <div className="footer__column">
            <p className="footer__list-item footer__list-item--heading">
              General
            </p>
            <ul className="footer__list">
              <li className="footer__list-item">
                <a className="footer__link">Sign Up</a>
              </li>
              <li className="footer__list-item">
                <a className="footer__link">Help Center</a>
              </li>
              <li className="footer__list-item">
                <a className="footer__link">About</a>
              </li>
              <li className="footer__list-item">
                <a className="footer__link">Press</a>
              </li>
              <li className="footer__list-item">
                <a className="footer__link">Blog</a>
              </li>
              <li className="footer__list-item">
                <a className="footer__link">Careers</a>
              </li>
              <li className="footer__list-item">
                <a className="footer__link">Developers</a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <p className="footer__list-item footer__list-item--heading">
              Browse LinkedIn
            </p>
            <ul className="footer__list">
              <li className="footer__list-item">
                <a className="footer__link">Learning</a>
              </li>
              <li className="footer__list-item">
                <a className="footer__link">Jobs</a>
              </li>
              <li className="footer__list-item">
                <a className="footer__link">Salary</a>
              </li>
              <li className="footer__list-item">
                <a className="footer__link">Mobile</a>
              </li>
              <li className="footer__list-item">
                <a className="footer__link">ProFinder</a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <p className="footer__list-item footer__list-item--heading">
              Business Solutions
            </p>
            <ul className="footer__list">
              <li className="footer__list-item">
                <a className="footer__link">Talent</a>
              </li>
              <li className="footer__list-item">
                <a className="footer__link">Marketing</a>
              </li>
              <li className="footer__list-item">
                <a className="footer__link">Sales</a>
              </li>
              <li className="footer__list-item">
                <a className="footer__link">Learning</a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <p className="footer__list-item footer__list-item--heading">
              Directories
            </p>
            <ul className="footer__list">
              <li className="footer__list-item">
                <a className="footer__link">Members</a>
              </li>
              <li className="footer__list-item">
                <a className="footer__link">Jobs</a>
              </li>
              <li className="footer__list-item">
                <a className="footer__link">Companies</a>
              </li>
              <li className="footer__list-item">
                <a className="footer__link">Salaries</a>
              </li>
              <li className="footer__list-item">
                <a className="footer__link">Universities</a>
              </li>
              <li className="footer__list-item">
                <a className="footer__link">Featured</a>
              </li>
              <li className="footer__list-item">
                <a className="footer__link">Learning</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
