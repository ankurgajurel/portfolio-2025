import { Metadata } from "next";
import { siteMetadata, siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  ...siteMetadata,
  title: `gallery | ${siteConfig.name}`,
  description:
    "a collection of my personal photos and videos from various adventures.",
  openGraph: {
    ...siteMetadata.openGraph,
    type: "website",
    title: `gallery | ${siteConfig.name}`,
    description:
      "a collection of my personal photos and videos from various adventures.",
    url: `${siteConfig.url}/gallery`,
    images: [
      {
        url: "/gallery/sailung-view.jpeg",
        width: 1200,
        height: 630,
        alt: "A beautiful view from Sailung - Gallery Preview",
      },
    ],
  },
  twitter: {
    ...siteMetadata.twitter,
    title: `gallery | ${siteConfig.name}`,
    description: "a collection of my personal photos and videos from various adventures.",
    images: ["/gallery/sailung-view.jpeg"],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
