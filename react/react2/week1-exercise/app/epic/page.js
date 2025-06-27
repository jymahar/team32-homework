"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function EpicImage() {
  const searchParams = useSearchParams();
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = "tInA89LfjuzJaUwTd9IyAatSAs3SbbF9GXShbknv";

  useEffect(() => {
    const date = searchParams.get("date");
    if (!date) {
      setError(
        "Please provide a date in the query string. Example: ?date=2024-06-01"
      );
      return;
    }

    const fetchImage = async () => {
      try {
        const response = await fetch(
          `https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=${apiKey}`
        );
        const data = await response.json();

        if (!data || data.length === 0) {
          setError(`No EPIC images found for ${date}`);
          return;
        }

        const imageName = data[2].image;
        const [year, month, day] = date.split("-");
        const url = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/jpg/${imageName}.jpg`;

        setImageUrl(url);
        setError(null);
      } catch (err) {
        setError("Failed to fetch image from NASA API.");
      }
    };

    fetchImage();
  }, [searchParams]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">NASA EPIC Earth Image</h1>
      {error && <p className="text-red-500">{error}</p>}
      {imageUrl && (
        <div>
          <img
            src={imageUrl}
            alt="NASA EPIC Earth"
            className="rounded shadow-lg w-full max-w-xl"
          />
        </div>
      )}
    </div>
  );
}
