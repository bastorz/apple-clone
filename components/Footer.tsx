import React from "react";
import Image from "next/legacy/image";
import Button from "./CustomButton";
import { signIn } from "next-auth/react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="md:flex md:justify-around md:items-center sm:px-12 px-10 bg-[#ffffff19] py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-4/5 flex gap-2 flex-col md:flex-row md:text-2xl"
        >
          <span className="block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            Be Part
          </span>
          of the greatest community
        </h1>
        <div>
          <Button title="Get Started" onClick={() => signIn()}></Button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center md:justify-evenly py-10 md:py-20 space-y-4">
        <div className="flex space-y-2 flex-col items-center justify-center lg:items-start">
          <ul>
            <p className="font-semibold text-base">PRODUCTS</p>
          </ul>
          <ul>
            <p className="footerLink">Web Apps And Tools</p>
          </ul>
          <ul>
            <p className="footerLink">E-Commerce</p>
          </ul>
          <ul>
            <p className="footerLink">Drop Service</p>
          </ul>
          <ul>
            <p></p>
          </ul>
        </div>
        <div className="flex space-y-2 flex-col items-center justify-center lg:items-start">
          <ul>
            <p className="font-semibold text-base">RESOURCES</p>
          </ul>
          <ul>
            <p className="footerLink">Industries And Tools</p>
          </ul>
          <ul>
            <p className="footerLink">Use Cases</p>
          </ul>
          <ul>
            <p className="footerLink">Blog</p>
          </ul>
          <ul>
            <p></p>
          </ul>
        </div>
        <div className="flex space-y-2 flex-col items-center justify-center lg:items-start">
          <ul>
            <p className="font-semibold text-base">COMPANY</p>
          </ul>
          <ul>
            <p className="footerLink">Diversity & Inclusion</p>
          </ul>
          <ul>
            <p className="footerLink">About Us</p>
          </ul>
          <ul>
            <p className="footerLink">Customer Stories</p>
          </ul>
          <ul>
            <p></p>
          </ul>
        </div>
        <div className="flex items-center justify-center space-y-2 flex-col lg:items-start">
          <ul>
            <p className="font-semibold text-base">SUPPORT</p>
          </ul>
          <ul>
            <p className="footerLink">Documentation</p>
          </ul>
          <ul>
            <p className="footerLink">About Us</p>
          </ul>
          <ul>
            <p className="footerLink">Customer Stories</p>
          </ul>
          <ul>
            <p></p>
          </ul>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row pb-4 justify-center lg:gap-x-40 lg:mr-[12rem] space-y-4 items-center">
        <p className="text-xs text-gray-300">
          Copyright © Damian Alcalay Lopez - 2023
        </p>
        <div className="flex gap-1">
          <p className="footerLink">Terms </p>
          <p className="text-[15px] text-gray-500"> - </p>
          <p className="footerLink">Privacy</p>
        </div>
        <div className="flex gap-2">
          <div className="pt-[3px]">
            <Link
              href="https://www.linkedin.com/in/dami%C3%A1n-alcalay/"
              target="_blank"
            >
              <Image
                src="/linkedin.svg"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </Link>
          </div>
          <Link href="https://github.com/bastorz" target="_blank">
            <Image
              src="/githubtest.svg"
              width={32}
              height={32}
              className="cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
