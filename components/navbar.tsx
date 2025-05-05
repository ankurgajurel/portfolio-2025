"use client";

import Link from "next/link";
import Button from "./ui/button";
import { useConsoleVisibleStore } from "@/store/console";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { user } from "@/data/general";

const NavItem = ({ label, link }: { label: string; link: string }) => {
  const isExternal = !link.startsWith("/");
  const Component = isExternal ? "a" : Link;
  const props = isExternal ? { href: link, target: "_blank" } : { href: link };
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Component
      {...props}
      className="block relative w-fit overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={isHovered ? "hover" : "default"}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="block absolute top-0 left-0"
        >
          {isHovered ? "→" : label}
        </motion.span>
      </AnimatePresence>
      <span className="block opacity-0">{label}</span>
    </Component>
  );
};

export default function Navbar() {
  const { isVisible, setIsVisible } = useConsoleVisibleStore();

  const navItems = [
    { label: "home", link: "/" },
    { label: "gallery", link: "/gallery" },
    { label: "twitter", link: user.socials.twitter },
    { label: "github", link: user.socials.github },
    { label: "cal.com", link: user.socials.calcom },
    { label: "resume", link: "/resume/resume.pdf" },
  ];

  return (
    <nav className="container mx-auto flex flex-col md:flex-row space-y-5 justify-between md:items-center p-4">
      <div className="flex items-center gap-3 md:gap-5 lg:gap-10">
        {navItems.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </div>
      <div className="flex items-center gap-4">
        <Button
          variant="default"
          className="uppercase text-xs cursor-pointer"
          onClick={() => setIsVisible(!isVisible)}
        >
          console
        </Button>
      </div>
    </nav>
  );
}
