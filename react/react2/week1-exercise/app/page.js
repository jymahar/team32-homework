"use client";
import React from "react";
import NavBar from "./NavBar";

import SignUpForm from "./form/page";
import NasaPage from "./nasa/page";
import EpicImage from "./epic/page";
import Page from "./blogs/page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/form" element={<SignUpForm />} />
          <Route path="/nasa" element={<NasaPage />} />
          <Route path="/epic" element={<EpicImage />} />
          <Route path="/blogs" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
