import React from "react";
import HTMLFlipBook from "react-pageflip";

const Book: React.FC = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-200">
      <HTMLFlipBook
        width={300}
        height={500}
        className="shadow-lg"
        style={{ position: "relative" }} // Required style prop
        startPage={0} // Optional: Change to your desired starting page index
        size="stretch" // Optional: Set to 'stretch', 'fixed', etc.
        minWidth={300} // Minimum width of the book
        minHeight={500} // Minimum height of the book
        maxWidth={800} // Maximum width of the book
        maxHeight={1200} // Maximum height of the book
        drawShadow={true} // Enable shadow drawing
        flippingTime={1000} // Time taken to flip a page in milliseconds
        usePortrait={false} // Set to true for portrait mode, false for landscape
        startZIndex={1} // Starting z-index for the pages
        autoSize={false} // Set to true to enable auto sizing
        maxShadowOpacity={0.5} // Maximum shadow opacity
        showCover={true} // Display cover page
        mobileScrollSupport={true} // Enable mobile scroll support
        clickEventForward={true} // Allow click events to be forwarded
        useMouseEvents={true} // Use mouse events
        onFlip={(e) => console.log("Flipped to page:", e.data)} // Callback on flip event
        // Added missing props
        swipeDistance={50} // Distance required to trigger a swipe action
        showPageCorners={true} // Display corners of the pages
        disableFlipByClick={false} // Set to true to disable flipping by clicking
      >
        <div className="page bg-white flex justify-center items-center">
          <h1 className="text-3xl font-bold">Page 1</h1>
        </div>
        <div className="page bg-white flex justify-center items-center">
          <h1 className="text-3xl font-bold">Page 2</h1>
        </div>
        <div className="page bg-white flex justify-center items-center">
          <h1 className="text-3xl font-bold">Page 3</h1>
        </div>
        <div className="page bg-white flex justify-center items-center">
          <h1 className="text-3xl font-bold">Page 4</h1>
        </div>
        <div className="page bg-white flex justify-center items-center">
          <h1 className="text-3xl font-bold">Page 5</h1>
        </div>
        <div className="page bg-white flex justify-center items-center">
          <h1 className="text-3xl font-bold">Page 6</h1>
        </div>
        <div className="page bg-white flex justify-center items-center">
          <h1 className="text-3xl font-bold">Page 7</h1>
        </div>
        <div className="page bg-white flex justify-center items-center">
          <h1 className="text-3xl font-bold">Page 8</h1>
        </div>
      </HTMLFlipBook>
    </div>
  );
};

export default Book;
