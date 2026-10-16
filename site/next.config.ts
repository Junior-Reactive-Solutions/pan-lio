import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Addresses from the old Squarespace site, so bookmarks and search results still land somewhere useful.
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/coachdk-services", destination: "/coaching", permanent: true },
      { source: "/pan-lio-services", destination: "/services", permanent: true },
      { source: "/contact-1", destination: "/contact", permanent: true },
      { source: "/book-course-:period", destination: "/courses", permanent: true },
    ];
  },
};

export default nextConfig;
