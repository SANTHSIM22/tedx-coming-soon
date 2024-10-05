"use client";

import React from "react";
import Link from "next/link";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { IconType } from "react-icons/lib";

type SocialUrl = `https://www.${string}`;

interface Social {
  name: string;
  url: SocialUrl;
  icon: IconType;
}

const socials: Social[] = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/tedxsjec/",
    icon: FaInstagram,
  },
  {
    name: "YouTube",
    url: "https://www.instagram.com/tedxsjec/",
    icon: FaYoutube,
  },
  {
    name: "LinkedIn",
    url: "https://www.instagram.com/tedxsjec/",
    icon: FaLinkedin,
  },
];

export const Footer = () => {
  return (
    <footer className="text-white relative bottom-0 left-0 right-0 z-20 mb-3">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center py-4">
        <p className="text-center sm:text-left mb-4 sm:mb-0 px-4">
          &copy; {new Date().getFullYear()} Tedx SJEC. All rights reserved.
        </p>
        <ul className="flex space-x-6">
          {socials.map((social, index) => (
            <li key={index}>
              <Link href={social.url}>
                  <social.icon size={24} className="text-white" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
