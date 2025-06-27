"use client";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Blog</h1>
      <button onClick={() => router.push("/blogs/my-new-post")}>
        My new post
      </button>
    </div>
  );
};
export default Page;
