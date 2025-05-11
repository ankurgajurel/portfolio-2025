"use client";

import { useRef, useState } from "react";
import { Media } from "./page";

export default function Video({ item }: { item: Media }) {
  const [iconState, setIconState] = useState<{
    [id: number]: "play" | "pause" | null;
  }>({});
  const videoRefs = useRef<{ [id: number]: HTMLVideoElement | null }>({});

  const handleVideoClick = (id: number) => {
    const video = videoRefs.current[id];
    if (!video) return;
    if (video.paused) {
      video.play();
      setIconState((prev) => ({ ...prev, [id]: "pause" }));
    } else {
      video.pause();
      setIconState((prev) => ({ ...prev, [id]: "play" }));
    }
    setTimeout(() => setIconState((prev) => ({ ...prev, [id]: null })), 700);
  };
  return (
    <div className="relative w-full">
      <video
        ref={(el) => {
          videoRefs.current[item.id] = el;
        }}
        src={item.src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto object-cover"
        style={{ display: "block" }}
        onClick={() => handleVideoClick(item.id)}
      />

      {iconState[item.id] && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {iconState[item.id] === "play" ? (
            <svg
              className="w-16 h-16 text-white opacity-90"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <polygon points="5,3 19,12 5,21" fill="white" />
            </svg>
          ) : (
            <svg
              className="w-16 h-16 text-white opacity-90"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <rect x="6" y="4" width="4" height="16" fill="white" />
              <rect x="14" y="4" width="4" height="16" fill="white" />
            </svg>
          )}
        </div>
      )}
    </div>
  );
}
