import React, { useState } from "react";
import QRCode from "qrcode";
import LeafDivider from "../Assets/leaf.png";
import QRTicket from "../Assets/PHILRICE_QR_CONFIRMATION.png";
import html2canvas from "html2canvas"; // Import html2canvas
import { get, ref, query, orderByChild, equalTo } from "firebase/database";
import { database } from "../firebase";

export default function QrGen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null); // Error state for invalid email

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
    <div className="flex flex-col justify-center items-center px-4 w-screen my-24 min-w-[320px] p-4">
      <div className="text-[#0E9046] text-center text-[40px] md:text-[50px] lg:text-[60px] font-bold">
        QR Code<span className="text-[#F3B71C]">Generator</span>
      </div>
      <img src={LeafDivider} alt="Leaf Divider" className="my-4" />

      {/* Form */}
      <div className="flex flex-col lg:flex-row items-center gap-4 mt-8 max-w-[768px]">
        <div className="flex flex-col gap-4">
          <div className="max-w-[400px]">
            Lorem ipsum dolor sit amet consectetur. Ultrices nibh rhoncus
            viverra diam adipiscing. Dui in pharetra sed porttitor justo
            fermentum sapien mattis consequat.{" "}
          </div>
          <input
            type="text"
            placeholder="Enter your First Name, Last Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full max-w-md"
          />
          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full max-w-md"
          />
          <button
            onClick={generateQRCode} // Generate QR code on button click
            className="bg-[#F3BD1C] text-white font-bold py-3 px-6 lg:px-12 rounded-md"
          >
            Generate
          </button>
        </div>

        {/* Display error or QR Code */}
        {error && (
          <div className="text-red-500 text-xl font-bold mt-4">
            {error} {/* Display error message */}
          </div>
        )}

        {qrCodeUrl && (
          <div className="flex flex-col justify-center items-center">
            <div
              id="qr-section"
              className="flex flex-col items-center mb-8 min-w-[320px] max-w-[375px] h-[608px]"
            >
              <div className="flex flex-col items-center mt-8">
                <div className="absolute z-30 mt-[100px] font-bold text-[#0C6972] text-2xl">
                  YOU'RE ALL SET!
                </div>
                <div className="absolute z-30 mt-[130px] font-bold text-sm flex flex-col items-center justify-center text-center">
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
        )}
      </div>
    </div>
  );
}
