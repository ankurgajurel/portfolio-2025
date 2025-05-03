"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/ankurgajurel",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/ankurgajurel",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/ankurgajurel",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:ankur@gajurel.dev",
    },
  ];

  return (
    <footer className="container p-4 border-t-[0.5px] border-black mt-20">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2"
        >
          <Link href="/" className="text-2xl font-medium hover:underline">
            ankur gajurel
          </Link>
          <p className="text-sm text-gray-600">software engineer</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-4"
        >
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                className="text-gray-600 hover:text-black transition-colors duration-200"
                aria-label={link.name}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} ankur gajurel. all rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
