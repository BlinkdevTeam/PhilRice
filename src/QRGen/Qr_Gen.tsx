import React, { useState, useEffect } from "react";
import QRCode from "qrcode";
import QRTicket from "../Assets/PHILRICE_QR_CONFIRMATION.png";
import html2canvas from "html2canvas";
import { get, ref, query, orderByChild, equalTo } from "firebase/database";
import { database } from "../firebase";
import Confetti from "react-confetti";

export default function QrGen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null); // Error state for invalid email
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Prevent horizontal scroll on the entire page
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowX = "hidden";

    // Cleanup to restore overflowX setting on unmount
    return () => {
      document.body.style.overflowX = "auto";
      document.documentElement.style.overflowX = "auto";
    };
  }, []);

  const generateQRCode = async () => {
    if (email) {
      // Reference to the users node in Firebase
      const usersRef = ref(database, "users");

      // Query to find the user by email
      const emailQuery = query(usersRef, orderByChild("email"), equalTo(email));

      console.log("Querying email:", email); // Debugging

      try {
        const snapshot = await get(emailQuery);

        console.log("Firebase snapshot:", snapshot); // Debugging

        if (snapshot.exists()) {
          // If email exists in Firebase, generate QR code
          const qrCodeData = await QRCode.toDataURL(email);
          setQrCodeUrl(qrCodeData);
          setError(null); // Clear error if email is valid
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 8000);
        } else {
          setError("Invalid email!"); // Email not found in Firebase
          setQrCodeUrl(null); // Clear QR code if email is invalid
        }
      } catch (error) {
        console.error("Error verifying email in Firebase", error);
        setError("Error verifying email!"); // Handle Firebase error
        setQrCodeUrl(null); // Clear QR code on error
      }
    }
  };

  const handleDownload = () => {
    const section = document.getElementById("qr-section");

    if (section) {
      html2canvas(section, {
        scale: window.devicePixelRatio, // Ensures higher DPI for better image resolution
        useCORS: true, // Enable CORS to capture images hosted on other domains
        logging: false, // Disable logs to reduce unnecessary output
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
      <div className="w-full lg:w-[734px] h-auto lg:h-[744px] border-[1px] border-solid border-gray-100 rounded-2xl px-16 py-16 flex flex-col justify-center items-center shadow-lg drop-shadow-md backdrop-blur-lg">
        <div className="text-[#0E9046] text-center text-[40px] md:text-[50px] lg:text-[60px] font-bold">
          Get Event-Ready with <br />
          Your<span className="text-[#F3B71C]"> QR Code</span>
        </div>
        {/* <img src={LeafDivider} alt="Leaf Divider" className="my-4" /> */}
        <div className="text-[22px] text-center my-4">
          Confirm registration and save your QR Code for <br />
          easy check-in at the event!
        </div>
        <div className="w-8/12 h-[1px] bg-[#0E9046] my-4" />

        {/* Form */}
        <div className="flex flex-col lg:flex-row items-center gap-4 mt-8">
          <div className="flex flex-col gap-4 w-[250px] md:w-[450px]">
            <input
              type="text"
              placeholder="Enter your First Name, Last Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded p-2"
            />
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded p-2"
            />
            <button
              onClick={generateQRCode} // Generate QR code on button click
              className="bg-[#F3BD1C] text-white font-bold py-3 px-6 lg:px-12 rounded-md"
            >
              Generate
            </button>
          </div>
        </div>
      </div>
      {qrCodeUrl && (
        <>
          {showConfetti && (
            <Confetti
              width={window.innerWidth} // Fixed width to prevent horizontal scroll
              height={document.documentElement.scrollHeight}
              recycle={false}
              numberOfPieces={2000}
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
                    See you, {name} <br />
                    Your registration is complete!
                  </div>
                  <img
                    src={QRTicket}
                    alt="QR Ticket"
                    className="absolute z-10 w-80"
                  />
                  <img
                    src={qrCodeUrl}
                    alt="QR Code"
                    className="w-44 h-44 z-20 relative mt-[190px] mr-[10px]"
                  />
                </div>
              </div>

              {/* DOWNLOAD Button */}
              <button
                onClick={handleDownload} // Trigger the download function on button click
                className="bg-[#F3BD1C] text-white font-bold py-3 px-6 lg:px-12 rounded-md"
              >
                DOWNLOAD
              </button>
            </div>
          </div>
        </>
      )}
      {/* Display error or QR Code */}
      {error && (
        <div className="w-full lg:w-[734px] border-[1px] border-solid border-gray-100 rounded-2xl px-16 py-16 flex flex-col justify-center items-center shadow-lg drop-shadow-md backdrop-blur-lg">
          <div className="text-red-500 text-xl font-bold mt-4">
            {error} {/* Display error message */}
          </div>
        </div>
      )}
    </div>
  );
}
