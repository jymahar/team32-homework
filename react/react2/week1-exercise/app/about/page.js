"use client";
import { useRouter } from "next/navigation";

const about = () => {
  const router = useRouter();
  return (
    <div>
      <h1>About</h1>
      <p>We are a team of passionate developers</p>
      <button onClick={() => router.push("/")}>Go to home</button>
    </div>
  );
};

export default about;
