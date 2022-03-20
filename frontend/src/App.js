import React, { useState } from "react";

import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";
import UploadForm from "./firbaseComps/UploadForm/UploadForm";
import ImageGrid from "./firbaseComps/ImageGrid/ImageGrid";
import Modal from "./firbaseComps/Modal/Modal";

const App = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      <Footer />
    </div>
  );
};

export default App;
