"use client";

import { user } from "@/data/general";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function SpotifyEmbed() {
  return (
    <div id="musik" className="container p-4 flex flex-col gap-10 my-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-6xl flex gap-2 items-end group">
          <span className="group-hover:underline">musik</span>
          <ArrowUp
            size={48}
            className="group-hover:rotate-45 transition-transform duration-300"
          />
        </h2>
      </motion.div>

      <iframe
        className="border-[12px]"
        src={`https://open.spotify.com/embed/playlist/${user.playlist}?utm_source=generator&theme=0`}
        width="100%"
        height={"500px"}
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}
