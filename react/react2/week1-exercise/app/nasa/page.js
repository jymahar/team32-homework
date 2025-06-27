"use client";

import React, { useState, useEffect } from "react";
import styles from "./../page.module.css";
import { useRouter } from "next/navigation";

// Read "/app/nasa_collaboration/README.md" for more info about the API_KEY
// You need a proper API_KEY for the requests to work
const API_KEY = "8gVFtKv2GSQiG7r2VZgH45renUs7W1DCycvK1kAg";

const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
};

export default function NasaPage() {
  const router = useRouter();
  return (
    <div>
      <NasaContent />
      <button onClick={() => router.push("/nasa/nasa-img")}>
        Click here for Mars images
      </button>
    </div>
  );
}

function NasaContent() {
  const [dailyImg, setDailyImg] = useState({});

  const fetchNasaPhotos = async () => {
    const picOfTheday = await fetch(NASA_URLs.astronomyPicOfTheDay).then(
      (response) => response.json()
    );

    setDailyImg(picOfTheday);
  };

  useEffect(() => {
    fetchNasaPhotos();
  }, []);

  return (
    <div>
      <h1>Collaboration with NASA</h1>
      <h2>Astronomy Picture of the day</h2>
      <h4>{dailyImg.title}</h4>
      <div>
        <img src={dailyImg.url} alt={dailyImg.title} />
        <p>{dailyImg.explanation}</p>
      </div>
      <br></br>
    </div>
  );
}
