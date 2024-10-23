import React, { useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import FrontCover from "../Assets/BookletContent/FrontCover.jpg";
import BackCover from "../Assets/BookletContent/BackCover.jpg";
import Page2 from "../Assets/BookletContent/Pg2.jpg";
import Page3 from "../Assets/BookletContent/Pg3.jpg";
import Page4 from "../Assets/BookletContent/Pg4.jpg";
import Page5 from "../Assets/BookletContent/Pg5.jpg";
import Page6 from "../Assets/BookletContent/Pg6.jpg";
import Page7 from "../Assets/BookletContent/Pg7.jpg";

const Book: React.FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <div className="mb-12 xl:mb-0 flex flex-row justify-center items-center gap-36 xl:absolute xl:top-40 order-2">
        <div className="text-[#0E9046] text-[40px] md:text-[50px] lg:text-[60px] font-bold px-8 xl:px-0 xl:max-w-[514px]">
          Strategic <span className="text-[#F3B71C]">Planning</span>
          <div className="text-[#878787] font-bold text-[18px] md:text-[20px] lg:text-[25px] justify-start items-start">
            by: Jayson San Agustin & Lander Guevarra
          </div>
          <div className="w-full max-w-[1005px] order-last sm:order-none mt-4 sm:mt-0">
            <div className="text-[18px] md:text-[20px] lg:text-[25px] my-4 leading-relaxed font-bold text-[#0E9046]">
              About the Book
            </div>
            <div className="text-[13px] font-normal text-black md:text-[18px] lg:text-[22px] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Ultrices nibh rhoncus
              viverra diam adipiscing. Dui in pharetra sed porttitor justo
              fermentum sapien mattis consequat. Dolor tellus nunc commodo
              lectus neque. Scelerisque tempus tristique phasellus pretium
              pulvinar magna risus pretium feugiat. Sed amet sit morbi
              suspendisse id felis. Senectus egestas cursus curabitur netus.{" "}
              <br /> <br />
              At ullamcorper in interdum dignissim ut eros erat sed maecenas. In
              maecenas nullam tellus tellus. Ullamcorper risus tellus et euismod
              massa. Consectetur massa tristique eget est orci dui aliquet
              porttitor. Cursus eget mauris in praesent ....
            </div>
          </div>
        </div>
        <div className="text-[#0E9046] text-[40px] md:text-[50px] lg:text-[60px] font-bold px-8 xl:px-0 xl:w-[35%] hidden xl:inline">
          Strategic <span className="text-[#F3B71C]">Planning</span>
          <div className="text-[#878787] font-bold text-[18px] md:text-[20px] lg:text-[25px] justify-start items-start">
            by: Jayson San Agustin & Lander Guevarra
          </div>
          <div className="w-full max-w-[1005px] order-last sm:order-none mt-4 sm:mt-0">
            <div className="text-[18px] md:text-[20px] lg:text-[25px] my-4 leading-relaxed font-bold text-[#0E9046]">
              About the Book
            </div>
            <div className="text-[13px] font-normal text-black md:text-[18px] lg:text-[22px] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Ultrices nibh rhoncus
              viverra diam adipiscing. Dui in pharetra sed porttitor justo
              fermentum sapien mattis consequat. Dolor tellus nunc commodo
              lectus neque. Scelerisque tempus tristique phasellus pretium
              pulvinar magna risus pretium feugiat. Sed amet sit morbi
              suspendisse id felis. Senectus egestas cursus curabitur netus.{" "}
              <br /> <br />
              At ullamcorper in interdum dignissim ut eros erat sed maecenas. In
              maecenas nullam tellus tellus. Ullamcorper risus tellus et euismod
              massa. Consectetur massa tristique eget est orci dui aliquet
              porttitor. Cursus eget mauris in praesent ....
            </div>
          </div>
        </div>
      </div>
      <div className="py-12 px-20 w-full h-full flex items-center justify-center order-1">
        <HTMLFlipBook
          className="flex justify-center items-center absolute top-0 left-0"
          style={{ position: "relative" }} // Required style prop
          startPage={0} // Optional: Change to your desired starting page index
          size="stretch" // Optional: Set to 'stretch', 'fixed', etc.
          drawShadow={true} // Enable shadow drawing
          flippingTime={500} // Time taken to flip a page in milliseconds
          usePortrait={false} // Set to true for portrait mode, false for landscape
          startZIndex={1} // Starting z-index for the pages
          autoSize={true} // Set to true to enable auto sizing
          maxShadowOpacity={0.5} // Maximum shadow opacity
          showCover={true} // Display cover page
          mobileScrollSupport={true} // Enable mobile scroll support
          clickEventForward={true} // Allow click events to be forwarded
          useMouseEvents={true} // Use mouse events
          onFlip={(e) => console.log("Flipped to page:", e.data)} // Callback on flip event
          swipeDistance={50} // Distance required to trigger a swipe action
          showPageCorners={true} // Display corners of the pages
          disableFlipByClick={false} // Set to true to disable flipping by clicking
          // Tailwind CSS breakpoints for desktop, tablet, and mobile
          width={500}
          height={800}
          minWidth={200} // Minimum width of the book
          minHeight={300} // Minimum height of the book
          maxWidth={800} // Maximum width of the book
          maxHeight={1200} // Maximum height of the book
        >
          <div className="bg-white flex justify-center items-center shadow-lg">
            <h1 className="text-3xl font-bold">
              <img src={FrontCover} alt="Front Cover" />
            </h1>
          </div>
          <div className="bg-white flex justify-center items-center shadow-lg">
            <h1 className="text-3xl font-bold">
              <img src={Page2} alt="Page 2" />
            </h1>
          </div>
          <div className="bg-white flex justify-center items-center shadow-lg">
            <h1 className="text-3xl font-bold">
              <img src={Page3} alt="Page 3" />
            </h1>
          </div>
          <div className="bg-white flex justify-center items-center shadow-lg">
            <h1 className="text-3xl font-bold">
              <img src={Page4} alt="Page 4" />
            </h1>
          </div>
          <div className="bg-white flex justify-center items-center shadow-lg">
            <h1 className="text-3xl font-bold">
              <img src={Page5} alt="Page 5" />
            </h1>
          </div>
          <div className="bg-white flex justify-center items-center shadow-lg">
            <h1 className="text-3xl font-bold">
              <img src={Page6} alt="Page 6" />
            </h1>
          </div>
          <div className="bg-white flex justify-center items-center shadow-lg">
            <h1 className="text-3xl font-bold">
              <img src={Page7} alt="Page 7" />
            </h1>
          </div>
          <div className="bg-white flex justify-center items-center shadow-lg">
            <h1 className="text-3xl font-bold">
              <img src={BackCover} alt="Back Cover" />
            </h1>
          </div>
        </HTMLFlipBook>
      </div>
    </>
  );
};

export default Book;
