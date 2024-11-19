import React, { useState, useEffect } from "react";
import QRCode from "qrcode";
import QRTicket from "../Assets/PHILRICE_QR_CONFIRMATION.png";
import html2canvas from "html2canvas";
import Confetti from "react-confetti";
import { useSearchParams } from "react-router-dom";

export default function DynamicQR() {
  const [searchParams] = useSearchParams();
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [unitname, setUnitName] = useState("");
  const [affiliationname, setAffiliationName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [numberOfPieces, setNumberOfPieces] = useState(
    window.innerWidth < 768 ? 150 : 1550
  );

  const userId = searchParams.get("id");
  const userName = searchParams.get("name")?.replace(/%20/, " ");
  const userAffiliationName = searchParams
    .get("affiliation")
    ?.replace(/%20/, " ");
  const userUnitName = searchParams.get("unit")?.replace(/%20/, " ");

  useEffect(() => {
    if (userName) {
      setName(userName);
    }
    if (userAffiliationName) {
      setAffiliationName(userAffiliationName);
    }
    if (userUnitName) {
      setUnitName(userUnitName);
    }
  }, [userName, userAffiliationName, userUnitName]);

  useEffect(() => {
    if (userId) {
      QRCode.toDataURL(userId, { width: 256 })
        .then((url) => setQrCodeUrl(url))
        .catch((err) => {
          console.error("Error generating QR code", err);
          setError("Failed to generate QR code. Please try again.");
        });
    } else {
      setError("No ID provided in the URL.");
    }
  }, [userId]);

  useEffect(() => {
    const handleResize = () => {
      setNumberOfPieces(window.innerWidth < 768 ? 480 : 550);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDownload = () => {
    const section = document.getElementById("qr-section");
    if (section) {
      html2canvas(section, {
        scale: window.devicePixelRatio,
        useCORS: true,
        logging: false,
        backgroundColor: null,
      }).then((canvas) => {
        const imageUrl = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = imageUrl;
        link.download = "qr-section.png";
        link.click();
      });
    } else {
      console.error("QR section not found!");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center px-4 w-screen h-full my-20 p-4 gap-4 overflow-hidden">
      <>
        {showConfetti && (
          <Confetti
            width={window.innerWidth}
            height={document.documentElement.scrollHeight}
            recycle={false}
            numberOfPieces={numberOfPieces}
            gravity={0.01}
            wind={0.07}
            initialVelocityX={{ min: -5, max: 5 }}
            initialVelocityY={{ min: 2, max: 12 }}
            colors={["#0C6972", "#EFB71E", "#EFB71E", "#FFFFFF"]}
          />
        )}
        <div className="w-full lg:w-[734px] h-auto lg:h-[744px] border-[1px] border-solid border-gray-100 rounded-2xl px-16 py-16 flex flex-col justify-center items-center shadow-lg drop-shadow-md backdrop-blur-lg">
          <div className="flex flex-col justify-center items-center">
            <div
              id="qr-section"
              className="flex flex-col items-center mb-8 min-w-[320px] max-w-[375px] h-[608px]"
            >
              <div className="flex flex-col items-center mt-8 font-bold">
                <div className="absolute z-30 mt-[100px] text-[#0C6972] text-2xl mr-2">
                  YOU'RE ALL SET!
                </div>
                <div className="absolute z-30 mt-[130px] text-sm flex flex-col items-center justify-center text-center mr-2">
                  {name || "Guest"} <br />
                  {unitname || affiliationname || "No affiliation available"}
                </div>
                <img
                  src={QRTicket}
                  alt="QR Ticket"
                  className="absolute z-10 w-80"
                />
                {qrCodeUrl && (
                  <img
                    src={qrCodeUrl}
                    alt="QR Code"
                    className="w-44 h-44 z-20 relative mt-[190px] mr-[10px]"
                  />
                )}
              </div>
            </div>
            {/* DOWNLOAD Button */}
            <button
              onClick={handleDownload}
              className="bg-[#F3BD1C] text-white text-[18px] font-bold py-4 px-6 lg:px-12 rounded-md"
            >
              DOWNLOAD
            </button>
          </div>
        </div>
      </>
      {/* Display error */}
      {error && (
        <div className="w-full lg:w-[734px] h-auto lg:h-[744px] border-[1px] border-solid border-gray-100 rounded-2xl px-16 py-16 flex flex-col justify-center items-center shadow-lg drop-shadow-md backdrop-blur-lg">
          <div className="text-red-500 text-xl font-bold mt-4">
            {error}
            <br /> <br /> Note:{" "}
            <span className="font-normal text-black">
              Use the email address you registered with at Ugnay Palay
              Registration.
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
