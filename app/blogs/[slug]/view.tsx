"use client";

import { useEffect } from "react";

export const BlogView: React.FC<{ slug: string }> = ({ slug }) => {
  useEffect(() => {
    fetch("/api/incrBlog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ slug }),
    });
  }, [slug]);

  return null;
};
