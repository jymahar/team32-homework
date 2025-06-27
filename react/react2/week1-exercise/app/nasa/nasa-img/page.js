"use client";
import React, { useState, useEffect } from "react";
import styles from "../../page.module.css";

export default function MarsPhotos() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=8gVFtKv2GSQiG7r2VZgH45renUs7W1DCycvK1kAg"
    )
      .then((res) => res.json())
      .then((data) => setPhotos(data.photos));
  }, []);

  return (
    <div className={styles.nasaContainer}>
      {photos?.slice(0, 10).map((photo) => (
        <img key={photo.id} src={photo.img_src} alt={photo.id} width="300" />
      ))}
    </div>
  );
}
