import { Link } from "gatsby";
import React from "react";

const Footer = ({ siteTitle }) => (
  <footer className="bg-white">
    <div className="container mx-auto  px-8">
      <div className="w-full flex flex-col md:flex-row py-6">
        <div className="flex-1 mb-6">
          <p
            className="text-gray-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="#"
          >
            {" "}
            {siteTitle}
          </p>
        </div>

        <div className="flex-1">
          <p className="uppercase text-gray-500 md:mb-6">
            Inlead ApS
            Rentemestervej 56C
            2400 København NV
          </p>
            </li>
            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <p className="uppercase text-gray-500 md:mb-6">
            <a
              href="tel:+4570201220"
              className="no-underline hover:underline text-gray-800"
            >
              +45 70 20 12 20
            </a>
            <a
              href="mailto:info@inlead.dk"
              className="no-underline hover:underline text-gray-800"
            >
              info@inlead.dk
            </a>
          </p>
        </div>
        <div className="flex-1">
          <p className="uppercase text-gray-500 md:mb-6">
            Inlead leverer formidlingsløsninger, der virker på tværs af digitale platforme.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
