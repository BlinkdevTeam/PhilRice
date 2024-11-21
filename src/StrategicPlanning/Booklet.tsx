import React, { useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import FrontCover from "../Assets/BookletContent/FrontCover.jpg";
import BackCover from "../Assets/BookletContent/BackCover.jpg";
import Page2 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_2.jpg";
import Page3 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_3.jpg";
import Page4 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_4.jpg";
import Page5 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_5.jpg";
import Page6 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_6.jpg";
import Page7 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_7.jpg";
import Page8 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_8.jpg";
import Page9 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_9.jpg";
import Page10 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_10.jpg";
import Page11 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_11.jpg";
import Page12 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_12.jpg";
import Page13 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_13.jpg";
import Page14 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_14.jpg";
import Page15 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_15.jpg";
import Page16 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_16.jpg";
import Page17 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_17.jpg";
import Page18 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_18.jpg";
import Page19 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_19.jpg";
import Page20 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_20.jpg";
import Page21 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_21.jpg";
import Page22 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_22.jpg";
import Page23 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_23.jpg";
import Page24 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_24.jpg";
import Page25 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_25.jpg";
import Page26 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_26.jpg";
import Page27 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_27.jpg";
import Page28 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_28.jpg";
import Page29 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_29.jpg";
import Page30 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_30.jpg";
import Page31 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_31.jpg";
import Page32 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_32.jpg";
import Page33 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_33.jpg";
import Page34 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_34.jpg";
import Page35 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_35.jpg";
import Page36 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_36.jpg";
import Page37 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_37.jpg";
import Page38 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_38.jpg";
import Page39 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_39.jpg";
import Page40 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_40.jpg";
import Page41 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_41.jpg";
import Page42 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_42.jpg";
import Page43 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_43.jpg";
import Page44 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_44.jpg";
import Page45 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_45.jpg";
import Page46 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_46.jpg";
import Page47 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_47.jpg";
import Page48 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_48.jpg";
import Page49 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_49.jpg";
import Page50 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_50.jpg";
import Page51 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_51.jpg";
import Page52 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_52.jpg";
import Page53 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_53.jpg";
import Page54 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_54.jpg";
import Page55 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_55.jpg";
import Page56 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_56.jpg";
import Page57 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_57.jpg";
import Page58 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_58.jpg";
import Page59 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_59.jpg";
import Page60 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_60.jpg";
import Page61 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_61.jpg";
import Page62 from "../Assets/BookletContent/BookPages/1730864272465-b10c43c9-b56c-43ff-9bdc-a8e82c39dcef_62.jpg";

const Book: React.FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const pages = [
    { src: FrontCover, alt: "Front Cover" },
    { src: Page2, alt: "Page 2" },
    { src: Page3, alt: "Page 3" },
    { src: Page4, alt: "Page 4" },
    { src: Page5, alt: "Page 5" },
    { src: Page6, alt: "Page 6" },
    { src: Page7, alt: "Page 7" },
    { src: Page8, alt: "Page 8" },
    { src: Page9, alt: "Page 9" },
    { src: Page10, alt: "Page 10" },
    { src: Page11, alt: "Page 11" },
    { src: Page12, alt: "Page 12" },
    { src: Page13, alt: "Page 13" },
    { src: Page14, alt: "Page 14" },
    { src: Page15, alt: "Page 15" },
    { src: Page16, alt: "Page 16" },
    { src: Page17, alt: "Page 17" },
    { src: Page18, alt: "Page 18" },
    { src: Page19, alt: "Page 19" },
    { src: Page20, alt: "Page 20" },
    { src: Page21, alt: "Page 21" },
    { src: Page22, alt: "Page 22" },
    { src: Page23, alt: "Page 23" },
    { src: Page24, alt: "Page 24" },
    { src: Page25, alt: "Page 25" },
    { src: Page26, alt: "Page 26" },
    { src: Page27, alt: "Page 27" },
    { src: Page28, alt: "Page 28" },
    { src: Page29, alt: "Page 29" },
    { src: Page30, alt: "Page 30" },
    { src: Page31, alt: "Page 31" },
    { src: Page32, alt: "Page 32" },
    { src: Page33, alt: "Page 33" },
    { src: Page34, alt: "Page 34" },
    { src: Page35, alt: "Page 35" },
    { src: Page36, alt: "Page 36" },
    { src: Page37, alt: "Page 37" },
    { src: Page38, alt: "Page 38" },
    { src: Page39, alt: "Page 39" },
    { src: Page40, alt: "Page 40" },
    { src: Page41, alt: "Page 41" },
    { src: Page42, alt: "Page 42" },
    { src: Page43, alt: "Page 43" },
    { src: Page44, alt: "Page 44" },
    { src: Page45, alt: "Page 45" },
    { src: Page46, alt: "Page 46" },
    { src: Page47, alt: "Page 47" },
    { src: Page48, alt: "Page 48" },
    { src: Page49, alt: "Page 49" },
    { src: Page50, alt: "Page 50" },
    { src: Page51, alt: "Page 51" },
    { src: Page52, alt: "Page 52" },
    { src: Page53, alt: "Page 53" },
    { src: Page54, alt: "Page 54" },
    { src: Page55, alt: "Page 55" },
    { src: Page56, alt: "Page 56" },
    { src: Page57, alt: "Page 57" },
    { src: Page58, alt: "Page 58" },
    { src: Page59, alt: "Page 59" },
    { src: Page60, alt: "Page 60" },
    { src: Page61, alt: "Page 61" },
    { src: Page62, alt: "Page 62" },
    { src: Page2, alt: "Page 2" },
    { src: BackCover, alt: "Back Cover" },
  ];

  return (
    <>
      <div className="mb-12 xl:mb-0 flex flex-row justify-center items-center gap-36 xl:absolute xl:top-40 order-2 overflow-hidden">
        <div className="text-[#0E9046] text-[40px] md:text-[50px] lg:text-[60px] font-bold px-8 xl:px-0 xl:max-w-[514px]">
          The DA - PhiliRice Plan{" "}
          <span className="text-[#F3B71C]">2023 - 2024</span>
          {/* <div className="text-[#878787] font-bold text-[18px] md:text-[20px] lg:text-[25px] justify-start items-start">
            by: Jayson San Agustin & Lander Guevarra
          </div> */}
          <div className="w-full max-w-[1005px] order-last sm:order-none mt-4 sm:mt-0">
            <div className="text-[18px] md:text-[20px] lg:text-[25px] my-4 leading-relaxed font-bold text-black">
              Better Rice Communities
            </div>
            <div className="text-[13px] font-normal text-black md:text-[18px] lg:text-[22px] leading-relaxed">
              The Strategic Plan 2023-2028 outlines DA-PhilRice's vision to
              uplift the wellbeing of farming communities, foster a resilient
              and sustainable rice industry, and achieve a nutrition-secure
              Philippines. Rooted in the President's eight-point socioeconomic
              agenda, the Plan marks a strategic shift from a commodity-centric
              framework to a people-focused approach. By emphasizing the
              prosperity of farmers and their communities, it underscores their
              pivotal role in ensuring the availability of sufficient,
              affordable, and accessible rice for all Filipinos.
              <br /> <br />
            </div>
          </div>
        </div>
        <div className="text-[#0E9046] text-[40px] md:text-[50px] lg:text-[60px] font-bold px-8 xl:px-0 xl:max-w-[514px] hidden xl:inline">
          The DA - PhiliRice Plan{" "}
          <span className="text-[#F3B71C]">2023 - 2024</span>
          {/* <div className="text-[#878787] font-bold text-[18px] md:text-[20px] lg:text-[25px] justify-start items-start">
            by: Jayson San Agustin & Lander Guevarra
          </div> */}
          <div className="w-full max-w-[1005px] order-last sm:order-none mt-4 sm:mt-0">
            <div className="text-[18px] md:text-[20px] lg:text-[25px] my-4 leading-relaxed font-bold text-black">
              Better Rice Communities
            </div>
            <div className="text-[13px] font-normal text-black md:text-[18px] lg:text-[22px] leading-relaxed">
              The Strategic Plan 2023-2028 outlines DA-PhilRice's vision to
              uplift the wellbeing of farming communities, foster a resilient
              and sustainable rice industry, and achieve a nutrition-secure
              Philippines. Rooted in the President's eight-point socioeconomic
              agenda, the Plan marks a strategic shift from a commodity-centric
              framework to a people-focused approach. By emphasizing the
              prosperity of farmers and their communities, it underscores their
              pivotal role in ensuring the availability of sufficient,
              affordable, and accessible rice for all Filipinos.
              <br /> <br />
            </div>
          </div>
        </div>
      </div>
      <div className="py-12 px-20 w-full h-full flex items-center justify-center order-1 overflow-hidden">
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
          // onFlip={(e) => console.log("Flipped to page:", e.data)}
          swipeDistance={50} // Distance required to trigger a swipe action
          showPageCorners={true} // Display corners of the pages
          disableFlipByClick={false} // Set to true to disable flipping by clicking
          // Tailwind CSS breakpoints for desktop, tablet, and mobile
          width={500}
          height={700}
          minWidth={200} // Minimum width of the book
          minHeight={300} // Minimum height of the book
          maxWidth={700} // Maximum width of the book
          maxHeight={800} // Maximum height of the book
        >
          {pages.map((page, index) => (
            <div
              key={index}
              className="bg-white flex justify-center items-center shadow-lg">
              <img src={page.src} alt={page.alt} className="w-full h-auto" />
            </div>
          ))}
        </HTMLFlipBook>
      </div>
    </>
  );
};

export default Book;
