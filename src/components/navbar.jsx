"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./navLink";
import Image from 'next/image';
import {motion} from 'framer-motion'

const navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
        rotate:0,
    },
    opened: {
        rotate:45,
        backgroundColor: "rgb(255,255,255)",
    }
  }

  const centerVariant = {
    closed : {
        opacity: 1
    },

    opened : {
        opacity: 0
    }
  }

  const lastVariant = {
    closed: {
        rotate:0
    },
    opened : {
        rotate: -45,
        backgroundColor: "rgb(255,255,255)",
    }
  }

  const listVariants = {
    closed: {
        x: "100vw",
    },
    opened : {
        x:0
    }
  }

  const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
  ];

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-48 xl:px-48 items-center justify-center">
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      <div className="md:hidden lg:flex xl:justify-center w-1/3">
        <Link
          href="/"
          className="w-50 flex text-sm bg-black rounded-md p-1 font-semibold"
        >
          <span className="text-white mr-1">Lama</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            dev
          </span>
        </Link>
      </div>

      <div className="hidden md:flex gap-4 w-1/3">
        <Link href="">
          <Image src="/gihub" alt="" width={24} height={24} />
        </Link>
        <Link href="">
          <Image src="/gihub" alt="" width={24} height={24} />
        </Link>
        <Link href="">
          <Image src="/gihub" alt="" width={24} height={24} />
        </Link>
        <Link href="">
          <Image src="/gihub" alt="" width={24} height={24} />
        </Link>
        <Link href="">
          <Image src="/gihub" alt="" width={24} height={24} />
        </Link>
      </div>

      <div className="md:hidden">
        <button
          className="w-10 h-8 flex-col justify-between z-400"
          onClick={() => setOpen(!open)}
        >
          <motion.div animate={open ? "opened" : "closed"} variants={topVariants} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
          <motion.div animate={open ? "opened" : "closed"} variants={centerVariant} className="w-10 h-1 bg-black rounded"></motion.div>
          <motion.div animate={open ? "opened" : "closed"} variants={lastVariant} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
        </button>
        {open && (
          <motion.div variants={listVariants} animate="opened" className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4x z-40">
            {links.map((elem) => ( 
              <Link href={elem.url} key={elem.title}>
                {elem.title}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default navbar;
