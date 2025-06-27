"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function BlogPostTitle() {
  const pathname = usePathname();
  const [title, setTitle] = useState("");

  useEffect(() => {
    // Get the last part of the path (after /blogs/)
    const parts = pathname.split("/");
    const lastSegment = parts[parts.length - 1];

    const formattedTitle = lastSegment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    setTitle(formattedTitle);
  }, [pathname]);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p> The content of my blog post is {title}</p>
    </div>
  );
}
