"use client";

import React from 'react';
import { Blog7 } from "@/components/blocks/blog7";

const Blog = () => {
  const posts = [
    {
      id: "post-1",
      title: "5 Reasons to Invest in a Professional Website",
      summary: "A professional website acts as your digital storefront. Learn how elite web architecture drives user trust and increases conversion rates by up to 200%.",
      label: "Web Development",
      author: "Jane Wanjiku",
      published: "Sep 10, 2023",
      url: "/blog/post-1",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "post-2",
      title: "How Mobile Apps Can Grow Your Business",
      summary: "Explore the impact of having a direct line to your customers via mobile apps. We break down the ROI of push notifications and offline accessibility.",
      label: "Mobile Apps",
      author: "Faith Njeri",
      published: "Sep 3, 2023",
      url: "/blog/post-2",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "post-3",
      title: "The Future of Digital Transformation",
      summary: "AI, cloud computing, and automated workflows are no longer optional. Stay ahead of the curve with our roadmap to corporate digital excellence.",
      label: "Tech Tips",
      author: "Kevin Mwangi",
      published: "Aug 28, 2023",
      url: "/blog/post-3",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    }
  ];

  return (
    <div id="blog">
      <Blog7
        tagline="LATEST NEWS & INSIGHTS"
        heading="Tips, updates and insights from the world of technology."
        description="Stay updated with our expert analysis on modern software engineering, mobile ecosystems, and enterprise digital strategy."
        buttonText="View All News"
        buttonUrl="/blog"
        posts={posts}
      />
    </div>
  );
};

export default Blog;
