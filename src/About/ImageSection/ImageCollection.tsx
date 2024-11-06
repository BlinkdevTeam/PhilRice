import React, { useState } from "react";
import Image1 from "../../Assets/1.jpg";
import Image2 from "../../Assets/2.jpg";
import Image3 from "../../Assets/3.jpg";

export default function ImageCollection() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openOverlay = (image: string) => {
    setSelectedImage(image);
    setIsOverlayOpen(true);
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
    setSelectedImage(null);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-1 p-4 w-full max-w-[984.95px] h-auto md:h-1/12 lg:h-[666.08px]">
      <div className="col-span-1 row-span-2 bg-gray-300 overflow-hidden">
        <img
          src={Image1}
          className="object-cover w-full h-full cursor-pointer transform transition-transform duration-300 hover:scale-105"
          alt="Ugnay Palay Banner"
          onClick={() => openOverlay(Image1)}
        />
      </div>

      <div className="bg-gray-500 overflow-hidden">
        <img
          src={Image2}
          className="object-cover w-full h-full cursor-pointer transform transition-transform duration-300 hover:scale-105"
          alt="Ugnay Palay Banner"
          onClick={() => openOverlay(Image2)}
        />
      </div>

      <div className="bg-gray-600 overflow-hidden">
        <img
          src={Image3}
          className="object-cover w-full h-full cursor-pointer transform transition-transform duration-300 hover:scale-105"
          alt="Ugnay Palay Banner"
          onClick={() => openOverlay(Image3)}
        />
      </div>
      {isOverlayOpen && selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeOverlay}
        >
          <button
            onClick={closeOverlay}
            className="absolute top-2 right-2 text-white text-2xl font-bold"
          >
            &times;
          </button>
          <img
            src={selectedImage}
            alt="Full-size Ugnay Palay Banner"
            className="w-[] md:w-[70%] lg:w-[50%] h-auto"
          />
        </div>
      )}
    </div>
  );
}
