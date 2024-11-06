import React from "react";
import Book from "../Assets/BookletContent/FrontCover.jpg";
import { useNavigate } from "react-router-dom";
import "./Flipbook.css";

export default function StratPlan() {
  const pdfUrl =
    "https://raw.githubusercontent.com/BlinkdevTeam/PhilRice/refs/heads/main/src/Assets/BookletContent/StratPlan.pdf";
  const fileName = "downloaded-file.pdf"; // Name for the downloaded file

  const downloadPDF = async () => {
    try {
      const response = await fetch(pdfUrl);

      // Check if response is ok (status 200-299)
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("PDF download failed:", error);
    }
  };

  const navigate = useNavigate();
  const handleSeeMore = () => {
    navigate("/strat-planning", { state: { section: "" } }); // Adjust the section name as needed
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-auto mt-20 md:mt-32 lg:mt-48">
      <div className="flex flex-col gap-10 md:flex-row justify-center items-center md:justify-center md:items-start overflow-visible w-full p-4">
        <div className="text-[#0E9046] text-[40px] md:text-[50px] lg:text-[60px] font-bold inline sm:hidden">
          Strategic <span className="text-[#F3B71C]">Planning</span>
        </div>
        <div className="text-[#878787] font-bold text-[18px] md:text-[20px] lg:text-[25px] justify-start items-start inline sm:hidden">
          by: Jayson San Agustin & Lander Guevarra
        </div>
        <div
          className={`book-container shadow-left perspective cursor-pointer`}
          onClick={handleSeeMore}
        >
          <div
            className={`frontpage transition-transform duration-700 transform origin-left`}
          >
            <img src={Book} alt="book front" className="max-w-[400px] h-auto" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="w-full max-w-[1005px]">
            <div className="text-[#0E9046] text-[40px] md:text-[50px] lg:text-[60px] font-bold hidden sm:inline">
              Strategic <span className="text-[#F3B71C]">Planning</span>
            </div>
            <div className="text-[#878787] font-bold text-[18px] md:text-[20px] lg:text-[25px] hidden sm:flex">
              by: Jayson San Agustin & Lander Guevarra
            </div>
          </div>
          <div className="w-full max-w-[1005px] px-6 order-last sm:order-none mt-4 sm:mt-0">
            <div className="text-[18px] md:text-[20px] lg:text-[25px] my-4 leading-relaxed font-bold text-[#0E9046]">
              About the Book
            </div>
            <div className="text-[13px] md:text-[18px] lg:text-[22px] leading-relaxed">
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
          <div className="flex flex-col mt-2 sm:mt-16 sm:flex-row justify-center sm:justify-start gap-4 px-6">
            <button
              type="button"
              className="hover:bg-[#0E9046] hover:text-white hover:transition-all ease-in-out duration-300 bg-white w-full h-[47px] lg:w-[265px] lg:h-[73.4px] rounded-[10px] border-[#0E9046] border-2 font-bold text-[20px] lg:text-[30px] text-[#0E9046]"
              onClick={handleSeeMore}
            >
              READ NOW
            </button>
            <button
              type="button"
              className="group hover:bg-[#0E9046] hover:text-white hover:transition-all ease-in-out duration-300 flex justify-center items-center gap-2 bg-white w-full h-[47px] lg:w-[365px] lg:h-[73.4px] rounded-[10px] border-[#0E9046] border-2 font-bold text-[20px] lg:text-[30px] text-[#0E9046]"
              onClick={downloadPDF}
            >
              <div className="flex items-center justify-center">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.8333 0H1.16667C0.525 0 0 0.525 0 1.16667V33.8333C0 34.475 0.525 35 1.16667 35H33.8333C34.475 35 35 34.475 35 33.8333V1.16667C35 0.525 34.475 0 33.8333 0ZM10.7567 16.7358C11.1592 16.2342 11.8942 16.1525 12.3958 16.555L16.3333 19.705V7.54833C16.3333 6.90667 16.8583 6.38167 17.5 6.38167C18.1417 6.38167 18.6667 6.90667 18.6667 7.54833V19.705L22.6042 16.555C23.1175 16.17 23.8525 16.2692 24.2375 16.7883C24.605 17.2783 24.5292 17.9783 24.0625 18.375L18.2875 22.995L18.2292 23.0417C18.1883 23.0767 18.1417 23.1058 18.095 23.135C18.0308 23.1758 17.9608 23.2108 17.885 23.2342L17.6925 23.2808C17.5642 23.3042 17.4358 23.3042 17.3075 23.2808L17.115 23.2342L16.9925 23.1817L16.9167 23.135C16.87 23.1058 16.8233 23.0767 16.7825 23.0417L16.7242 22.995L10.9492 18.375C10.4417 17.9783 10.3542 17.2433 10.7567 16.7358ZM25.6667 28.6183H9.33333C8.69167 28.6183 8.16667 28.0933 8.16667 27.4517C8.16667 26.81 8.69167 26.285 9.33333 26.285H25.6667C26.3083 26.285 26.8333 26.81 26.8333 27.4517C26.8333 28.0933 26.3083 28.6183 25.6667 28.6183Z"
                    className="group-hover:fill-white"
                    fill="#0E9046"
                  />
                </svg>
              </div>
              DOWNLOAD FILE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
