import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../../Images/Footer/facebook.png";
import twitter from "../../../Images/Footer/twitter.png";
import instagram from "../../../Images/Footer/instagram.png";
import Ad from "../../../Images/Footer/Footer Ad group 2.png";
import M from "../../../Images/Footer/M.png";
import logo from "../../../Images/Footer/logo.png";
import elipse21 from "../../../Images/Footer/Ellipse 21.png";
import elipse22 from "../../../Images/Footer/Ellipse 22.png";
import elipse23 from "../../../Images/Footer/Ellipse 23.png";
import elipse24 from "../../../Images/Footer/Ellipse 24.png";
const Footer = () => {
  return (
    <footer className="py-16 bg-[#F9F7FF] relative">
      <img className="absolute right-0" src={elipse22} alt="" />
      <section className="container px-36">
        <div className="grid grid-cols-4 gap-x-14">
          <div className="">
            <div className="space-y-10">
              <h1 className=" font-semibold text-2xl font-sans text-[#162A43] flex items-center">
                {" "}
                <img className="mr-2 w-7 h-7" src={logo} alt="Nuova App" />{" "}
                Nuova
              </h1>
              <div className="space-y-3">
                {/* <p className="font-medium text-lg text-[#162A43]">
                  Office Headquaters{" "}
                </p> */}
                <p>
                  <span className=" font-normal text-lg text-[#000000]">
                    Suite 2/3, 2nd Floor, 48 West George Street, Glasgow G2 1BP
                  </span>
                </p>
                <p>
                  <span className=" font-normal text-lg text-[#000000]">
                    info@nuovapm.co.uk
                  </span>
                </p>
                <p>
                  <span className=" font-normal text-lg text-[#000000]">
                    0141-266-0597
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="space-y-10">
              <h1 className=" font-medium text-xl font-sans text-[#162A43]">
                Company
              </h1>

              <ul className=" space-y-2">
                <li>
                  <Link
                    to="/page4"
                    className=" font-normal text-lg text-[#000000]"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <a
                    href="https://goo.gl/maps/rSz7dTys7zE12S3V9"
                    className=" font-normal text-lg text-[#000000]"
                  >
                    Map
                  </a>
                  
                </li>
                {/* <li>
                  <Link
                    to="/home"
                    className=" font-normal text-lg text-[#000000]"
                  >
                    Support Center
                  </Link>
                </li> */}
                <li>
                  <a
                    href="./Nuova Terms and Conditions.pdf" download="Nuova Terms and Condition.pdf"
                    className=" font-normal text-lg text-[#000000]"
                  >
                    Terms & Conditions
                  </a>
                </li>
                {/* <li>
                  <Link
                    to="/home"
                    className=" font-normal text-lg text-[#000000]"
                  >
                    Submit Listing
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="">
            <div className="space-y-10">
              <h1 className=" font-medium text-xl font-sans text-[#162A43]">
                Quick Links
              </h1>

              <ul className=" space-y-2">
                <li>
                  <Link
                    to="/property-fact-find"
                    className=" font-normal text-lg text-[#000000]"
                  >
                    Property Fact Find
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tenancy-form"
                    className=" font-normal text-lg text-[#000000]"
                  >
                    Tenancy Form
                  </Link>
                </li>
                {/* <li>
                  <Link
                    to="/home"
                    className=" font-normal text-lg text-[#000000]"
                  >
                    Contact
                  </Link>
                </li> */}
                {/* <li>
                  <Link
                    to="/home"
                    className=" font-normal text-lg text-[#000000]"
                  >
                    Terms Conditions
                  </Link>
                </li> */}
                {/* <li>
                  <Link
                    to="/home"
                    className=" font-normal text-lg text-[#000000]"
                  >
                    Our blog
                  </Link>
                </li> */}
              </ul>
              <div className="flex space-x-4">
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={instagram} alt="" />
                <img src={M} alt="" />
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="space-y-10">
              {/* <h1 className=" font-medium text-xl font-sans text-[#162A43]">
                About us
              </h1> */}

              {/* <p className=" font-normal text-lg text-[#000000]">
                We are the real estate agency in Sydney, with agents available
                to answer any question 24/7.
              </p> */}
              <img className="w-5/6" src={Ad} alt="" />
              <img className="absolute top-0 right-0 " src={elipse24} alt="" />
              {/* <div className="flex space-x-4 justify-between">
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={instagram} alt="" />
                <img src={M} alt="" />
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="container flex justify-evenly mt-16 relative">
        <p className=" font-normal text-sm text-[#000000]">
          Company Number : SC717696
        </p>
        <p className=" font-normal text-sm text-[#000000]">
          Scottish Letting Agent Registration Number : LARN 2209001
        </p>
        <div className="flex space-x-5">
          <p className=" font-normal text-sm text-[#000000]">
            Terms and conditions
          </p>
          <p className=" font-normal text-sm text-[#000000]">
            Client Money Protection Certificate{" "}
          </p>
        </div>
        <img
          className="mix-blend-multiply absolute right-0 -top-28"
          src={elipse21}
          alt=""
        />
        <img
          className="mix-blend-multiply absolute right-36"
          src={elipse23}
          alt=""
        />
      </section>
    </footer>
  );
};

export default Footer;
