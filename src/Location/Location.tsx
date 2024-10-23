import React from "react";
import Map from "../Assets/Mapfade.jpg";

export default function Location() {
  const pdfUrl =
    "https://raw.githubusercontent.com/BlinkdevTeam/PhilRice/refs/heads/main/src/Assets/Map.jpg"; // GitHub raw URL
  const fileName = "downloaded-file.jpg"; // Name for the downloaded file

  const downloadImage = async () => {
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
  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen h-auto relative">
        <img src={Map} className="w-screen h-auto" alt="Map" />
        <div
          className="flex justify-end absolute bottom-4 right-4 md:bottom-4 md:right-20 cursor-pointer"
          onClick={downloadImage}
        >
          <div className="bg-transparent hover:bg-[#0E9046] rounded-lg absolute text-opacity-0 hover:text-opacity-100 text-white hover:text-white flex justify-start items-center transition-all ease-in-out duration-500 w-[33px] h-[33px] md:w-[53px] md:h-[53px] lg:w-[73px] lg:h-[73px] hover:w-[200px] md:hover:w-[260px] lg:hover:w-[390px]">
            {/* <img
              src={MyIcon2}
              alt="button"
              className="w-[33px] h-[33px] md:w-[53px] md:h-[53px] lg:w-[73px] lg:h-[73px] rounded-lg"
            /> */}
            <div className="bg-[#0E9046] w-[33px] h-[33px] md:w-[53px] md:h-[53px] lg:w-[73px] lg:h-[73px] p-2 md:p-4 rounded-lg flex justify-center items-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.8334 0.946289H2.21826C1.51868 0.946289 0.946289 1.51868 0.946289 2.21826V37.8334C0.946289 38.533 1.51868 39.1054 2.21826 39.1054H37.8334C38.533 39.1054 39.1054 38.533 39.1054 37.8334V2.21826C39.1054 1.51868 38.533 0.946289 37.8334 0.946289ZM12.6739 19.1927C13.1127 18.6457 13.914 18.5567 14.461 18.9955L18.7539 22.4299V9.17593C18.7539 8.47635 19.3263 7.90396 20.0258 7.90396C20.7254 7.90396 21.2978 8.47635 21.2978 9.17593V22.4299L25.5907 18.9955C26.1504 18.5758 26.9517 18.6839 27.3715 19.2499C27.7721 19.7842 27.6895 20.5473 27.1807 20.9798L20.8844 26.0168L20.8208 26.0677C20.7763 26.1059 20.7254 26.1376 20.6745 26.1694C20.6046 26.214 20.5283 26.2521 20.4456 26.2776L20.2357 26.3284C20.0958 26.3539 19.9559 26.3539 19.816 26.3284L19.6061 26.2776L19.4725 26.2203L19.3899 26.1694C19.339 26.1376 19.2881 26.1059 19.2436 26.0677L19.18 26.0168L12.8837 20.9798C12.3304 20.5473 12.235 19.746 12.6739 19.1927ZM28.9296 32.1477H11.122C10.4225 32.1477 9.85008 31.5753 9.85008 30.8757C9.85008 30.1762 10.4225 29.6038 11.122 29.6038H28.9296C29.6292 29.6038 30.2016 30.1762 30.2016 30.8757C30.2016 31.5753 29.6292 32.1477 28.9296 32.1477Z"
                  fill="white"
                />
              </svg>
            </div>
            <span className="ml-5 text-[18px] md:text-[22px] lg:text-[35px]">
              Download Map
            </span>
          </div>
        </div>
        <div
          className="w-[33px] h-[33px] md:w-[53px] md:h-[53px] lg:w-[73px] lg:h-[73px] p-2 bg-white rounded-full border-2 border-[#878787] flex justify-center items-center absolute bottom-8 right-4 md:bottom-16 md:right-20 cursor-pointer"
          onClick={() =>
            window.open(
              "https://github.com/blinkcreativestudio/PhilRice/blob/main/src/Assets/Map.jpg?raw=true",
              "_blank"
            )
          }
        >
          <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.94"
              d="M0.264355 10.4669V10.6669H0.464355H2.3458H2.5458V10.4669V3.03521C2.5458 2.76535 2.76535 2.5458 3.03521 2.5458H10.2747H10.4747V2.3458V0.464355V0.264355H10.2747H3.03521C1.50695 0.264355 0.264355 1.50695 0.264355 3.03521V10.4669Z"
              fill="#3B3B3B"
              stroke="#474747"
              stroke-width="0.4"
            />
            <path
              opacity="0.94"
              d="M16.7253 0.264355H16.5253V0.464355V2.3458V2.5458H16.7253H23.9649C24.2347 2.5458 24.4543 2.76535 24.4543 3.03521V10.4669V10.6669H24.6543H26.5357H26.7357V10.4669V3.03521C26.7357 1.50695 25.4931 0.264355 23.9649 0.264355H16.7253Z"
              fill="#3B3B3B"
              stroke="#474747"
              stroke-width="0.4"
            />
            <path
              opacity="0.94"
              d="M16.7253 24.4542H16.5253V24.6542V26.5357V26.7357H16.7253H23.9649C25.4931 26.7357 26.7357 25.4931 26.7357 23.9648V16.9175V16.7175H26.5357H24.6543H24.4543V16.9175V23.9648C24.4543 24.2347 24.2347 24.4542 23.9649 24.4542H16.7253Z"
              fill="#3B3B3B"
              stroke="#474747"
              stroke-width="0.4"
            />
            <path
              opacity="0.94"
              d="M2.5458 16.9175V16.7175H2.3458H0.464355H0.264355V16.9175V23.9648C0.264355 25.4931 1.50695 26.7357 3.03521 26.7357H10.2747H10.4747V26.5357V24.6542V24.4542H10.2747H3.03521C2.76535 24.4542 2.5458 24.2347 2.5458 23.9648V16.9175Z"
              fill="#3B3B3B"
              stroke="#474747"
              stroke-width="0.4"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
