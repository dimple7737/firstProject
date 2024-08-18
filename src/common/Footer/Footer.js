import React from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import GoTop from "../../components/GoTop/GoTop";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="section-title text-left">
            <h2>Do you want to know more?</h2>
            <p>
              A lot of exciting things are happening, subscribe to our
              newsletter to find out more.
            </p>
          </div>
          <form className="suscribe-form">
            <input type="email" placeholder="Email" className="form-control" />
            <Button>
              SUSCRIBE
              <svg
                width="212"
                height="80"
                viewBox="0 0 212 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1H197.349L211 20.3177V79H14.6512L1 59.6823V1Z"
                  fill="#000030"
                  stroke="#0075FF"
                  strokeWidth="2"
                />
              </svg>
            </Button>
          </form>

          <div className="footer-section">
            <div className="footer-col">
              <div className="footer-logo">
                <Link to="/">
                  <Image src="/images/logo.png" alt="IShivax" />
                </Link>
              </div>
              <p>
                We talk destination, we shine a spotlight across your
                organization to fully understand its people, processes, and
                technology.
              </p>
              <ul className="">
                <li>
                  <div className="icon">
                    <svg
                      width="14"
                      height="17"
                      viewBox="0 0 14 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.773 12.023L7 16.7959L2.22703 12.023C-0.40901 9.3869 -0.40901 5.11307 2.22703 2.47703C4.86307 -0.15901 9.1369 -0.15901 11.773 2.47703C14.409 5.11307 14.409 9.3869 11.773 12.023ZM7 8.75C7.82845 8.75 8.5 8.07845 8.5 7.25C8.5 6.42157 7.82845 5.75 7 5.75C6.17155 5.75 5.5 6.42157 5.5 7.25C5.5 8.07845 6.17155 8.75 7 8.75Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <a>
                    Plot 17,Shree Rampura colony, Civil Lines , Opp CM
                    house,Jaipur RJ
                  </a>
                </li>
                <li>
                  <div className="icon">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.75 10.315V12.9671C13.75 13.3608 13.4456 13.6875 13.0529 13.7153C12.7248 13.7384 12.4572 13.75 12.25 13.75C5.62255 13.75 0.25 8.37745 0.25 1.75C0.25 1.54278 0.261588 1.27515 0.284763 0.947125C0.312528 0.55441 0.639205 0.25 1.03289 0.25H3.68508C3.87758 0.25 4.03882 0.395815 4.05815 0.58735C4.0755 0.759302 4.09163 0.897355 4.10655 1.00151C4.25826 2.06104 4.56815 3.06952 5.01152 4.00227C5.08269 4.15199 5.03628 4.33119 4.90139 4.42754L3.28266 5.58385C4.26814 7.88583 6.11417 9.73187 8.41615 10.7174L9.57032 9.10143C9.6679 8.96492 9.84925 8.91798 10.0007 8.9899C10.9334 9.43293 11.9418 9.74245 13.0012 9.8938C13.1047 9.90865 13.2419 9.92462 13.4126 9.94187C13.6042 9.96122 13.75 10.1225 13.75 10.315Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <a href="tel:+91 978 234 5795 / +1 801 701 1806">
                    +91 978 234 5795 / +1 801 701 1806
                  </a>
                </li>
                <li>
                  <div className="icon">
                    <svg
                      width="16"
                      height="14"
                      viewBox="0 0 16 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.25 0.25H14.75C15.1642 0.25 15.5 0.58579 15.5 1V13C15.5 13.4142 15.1642 13.75 14.75 13.75H1.25C0.83579 13.75 0.5 13.4142 0.5 13V1C0.5 0.58579 0.83579 0.25 1.25 0.25ZM8.04545 6.76218L3.23541 2.67828L2.26458 3.82172L8.05482 8.73782L13.7408 3.81712L12.7592 2.68288L8.04545 6.76218Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <a href="mailto:support@ishivax.com">support@ishivax.com</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>
                FUTURE <br /> TECHNOLOGIES
              </h3>
              <ul>
                <li>
                  <Link to="/microsoft-technologies">
                    Microsoft Technologies
                  </Link>
                </li>
                <li>
                  <Link to="/">Digital Marketing</Link>
                </li>
                <li>
                  <Link to="/">IOT Internet of Things</Link>
                </li>
                <li>
                  <Link to="/">App Development</Link>
                </li>
                <li>
                  <Link to="/">Web Designing</Link>
                </li>
                <li>
                  <Link to="/">Automation</Link>
                </li>
                <li>
                  <Link to="/">CRM Services</Link>
                </li>
                <li>
                  <Link to="/">Consulting</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>
                LEGAL AND <br /> POLICIES
              </h3>
              <ul>
                <li>
                  <Link to="/refund-policy">Refund Policy</Link>
                </li>
                <li>
                  <Link to="/">Terms and Condition</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="copyright">
            Copyright © 2023 <span>iShivax®</span>
          </div>
        </div>
      </footer>
      <GoTop scrollStepInPx="100" delayInMs="10.50" />
    </>
  );
};

export default Footer;
