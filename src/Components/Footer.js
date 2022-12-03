import React from "react";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-8 bg-gray-700 text-base-content rounded">
        <div>
          <div className="grid grid-flow-col gap-4 -mb-6">
            <a href="https://web.facebook.com/salma.lisa.14" target="_blank" rel="noreferrer">
              <FaFacebook className="text-3xl text-lime-200"></FaFacebook>
            </a>
            <a href="https://www.linkedin.com/in/salmaakter979987/" target="_blank" rel="noreferrer">
              <FaLinkedinIn className="text-3xl text-lime-200"></FaLinkedinIn>
            </a>
          </div>
        </div>
        <div>
          <p className="text-lime-200">Copyright © 2022 - All right reserved by Salma Akter</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
