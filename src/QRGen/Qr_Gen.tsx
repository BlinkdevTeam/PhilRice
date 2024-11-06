import React, { useEffect, useState } from "react";
import QRCode from "qrcode";
import LeafDivider from "../Assets/leaf.png";

export default function QrGen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const generateQrCode = async () => {
    if (email) {
      try {
        const qrCodeData = await QRCode.toDataURL(email);
        setQrCodeUrl(qrCodeData);
      } catch (error) {
        console.error("Error generating QR code", error);
      }
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center px-4 w-screen my-24">
        <div className="text-[#0E9046] text-center text-[40px] md:text-[50px] lg:text-[60px] font-bold">
          QR Code<span className="text-[#F3B71C]">Generator</span>
        </div>
        <img src={LeafDivider} alt="Leaf Divider" className="my-4" />

        {/* Form */}
        <div className="flex flex-col items-center gap-4 mt-8">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full max-w-md"
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full max-w-md"
          />
          <button
            onClick={generateQrCode}
            className="mt-4 bg-[#0E9046] text-white rounded px-6 py-2 font-bold hover:bg-[#0b7339] transition duration-200"
          >
            Generate QR Code
          </button>
        </div>

        {/* Display QR Code */}
        {qrCodeUrl && (
          <div className="flex flex-col items-center mt-8">
            <img src={qrCodeUrl} alt="QR Code" className="w-48 h-48" />
            <p className="text-gray-600 mt-4">{email}</p>
          </div>
        )}
      </div>
    </>
  );
}
