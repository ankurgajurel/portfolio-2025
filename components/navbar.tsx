"use client";

import Link from "next/link";
import Button from "./ui/button";
import { useConsoleVisibleStore } from "@/store/console";

export default function Navbar() {
  const { isVisible, setIsVisible } = useConsoleVisibleStore();
  const navItems = [
    { label: "home", link: "/" },
    { label: "gallery", link: "/gallery" },
    { label: "projects", link: "/#projects" },
    { label: "twitter", link: "https://x.com/ankurgajurel" },
    { label: "github", link: "https://github.com/ankurgajurel" },
    { label: "cal.com", link: "https://cal.com/gajurel" },
  ];

  return (
    <nav className="container mx-auto flex flex-col md:flex-row space-y-5 justify-between md:items-center p-4">
      <div className="flex items-center gap-3 md:gap-5 lg:gap-10">
        {navItems.map((item) =>
          item.link.startsWith("/") ? (
            <Link key={item.label} href={item.link} className="hover:underline">
              {item.label}
            </Link>
          ) : (
            <a
              key={item.label}
              href={item.link}
              className="hover:underline"
              target="_blank"
            >
              {item.label}
            </a>
          )
        )}
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
