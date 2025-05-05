import { Metadata } from "next";
import { siteMetadata, siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  ...siteMetadata,
  title: `gallery | ${siteConfig.name}`,
  description:
    "a collection of my personal photos and videos from various adventures.",
  openGraph: {
    ...siteMetadata.openGraph,
    title: `gallery | ${siteConfig.name}`,
    description:
      "a collection of my personal photos and videos from various adventures.",
    images: [
      {
        url: "/gallery/sailung-view.jpeg",
        width: 1200,
        height: 630,
        alt: "Gallery Preview - Sailung View",
      },
    ],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
