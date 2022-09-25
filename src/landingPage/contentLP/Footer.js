import React from "react";
import "./Footer.css";
import { GrFacebook } from "react-icons/gr";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

// import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="f-left">
        <h3 className="h3-footer">MINI APP</h3>
        <ul className="ul-footer">
          <li>Landing Page</li>
          <li>Admin</li>
          <li>CRUD</li>
          <li>Calculator</li>
          <li>React Movie APP</li>
          <li>© 2022 CakeResume</li>
        </ul>
      </div>
      <div className="f-center">
        <h3 className="h3-footer">SOLUTIONS</h3>
        <p>Resume Builder</p>
        <p>Portfolio Maker</p>
        <p>Job Posting - Get Started for Free</p>
        <p>Talent Search</p>
        <p>Recruitment Services</p>
        <p>Employer Branding</p>
      </div>
      <div className="f-center1">
        <h3 className="h3-footer">SOURCE</h3>
        <ul className="ul-footer">
          <li>Articles</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Java Script</li>
          <li>React JS</li>
          <li>Help Center</li>
        </ul>
      </div>
      <div className="f-right">
        <h3 className="h3-footer">FOLLOW US</h3>
        <p>Follow us on social media to get</p>
        the latest information about resume
        <p>writing, job hunting, and recruitment!</p>
        <br />
        <ul className="ul-footer">
          <li>
            <a
              href="https://www.facebook.com/algisskuy/"
              target="_blank"
              rel="noreferrer"
            >
              <GrFacebook />
              <span> Facebook</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/algisskar_/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagramSquare />
              <span> Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/Algis_Alskar"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
              <span> Twitter</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Algiskuy"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              <span> GitHub</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
