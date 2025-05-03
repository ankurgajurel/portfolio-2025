"use client";

import { useState, useRef } from "react";

interface Media {
  id: number;
  type: "image" | "video";
  src: string;
  caption: string;
}

const media: Media[] = [
  {
    id: 1,
    type: "image",
    src: "/gallery/first-hike.png",
    caption: "first hike with the gng",
  },
  {
    id: 2,
    type: "image",
    src: "/gallery/manali.jpg",
    caption: "manali - quite the beauty",
  },
  {
    id: 3,
    type: "image",
    src: "/gallery/bhaktapur-hike.jpg",
    caption: "random hike in bhaktapur",
  },
  {
    id: 5,
    type: "image",
    src: "/gallery/nepali-kshetra.jpg",
    caption: "where my father studied sanskrit (he was 15)",
  },
  {
    id: 6,
    type: "image",
    src: "/gallery/cutest-dog.png",
    caption: "cutest dog in kakani",
  },
  {
    id: 7,
    type: "video",
    src: "/gallery/sailung-ghoda.mp4",
    caption: "cutest ghoda in sailung.",
  },
  {
    id: 8,
    type: "image",
    src: "/gallery/sailung-view.jpeg",
    caption: "sailung - one of the best hikes of my life.",
  },
  {
    id: 9,
    type: "image",
    src: "/gallery/jhapa.png",
    caption: "jhapa",
  },
  {
    id: 4,
    type: "image",
    src: "/gallery/intl-flight.jpg",
    caption: "first international flight",
  },
];

export default function Gallery() {
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
    <section className="container p-4 my-10 md:my-16 lg:my-20">
      <h2 className="text-6xl mb-8">gallery</h2>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {media.map((item) => (
          <div
            key={item.id}
            className="mb-4 break-inside-avoid rounded-lg overflow-hidden bg-gray-100 group cursor-pointer relative"
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.caption}
                width={800}
                height={600}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
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
            )}
            <div className="relative">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-sm font-medium">{item.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
