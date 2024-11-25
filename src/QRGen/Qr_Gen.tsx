import { useState, useEffect } from "react";
import QRTicket from "../Assets/PHILRICE_QR_CONFIRMATION.png";
import { getDatabase, ref, get } from "firebase/database";
import { initializeApp } from "firebase/app";
import html2canvas from "html2canvas";
import Confetti from "react-confetti";
import "./qrloader.css";

const firebaseConfig = {
  apiKey: "AIzaSyC1id1bulVq3lLUJhkzaNBKH363gp4WqEc",
  authDomain: "philricescannerapp.firebaseapp.com",
  databaseURL: "https://philricescannerapp-default-rtdb.firebaseio.com",
  projectId: "philricescannerapp",
  storageBucket: "philricescannerapp.firebasestorage.app",
  messagingSenderId: "57763195941",
  appId: "1:57763195941:web:e1c8e98a6905b53fc2e3cc",
  measurementId: "G-1S23JZ7X56",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default function QrGen() {
  const [email, setEmail] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [numberOfPieces, setNumberOfPieces] = useState(
    window.innerWidth < 768 ? 150 : 1550
  );
  const [firstname, setFirstName] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");
  const [affiliationname, setAffiliationName] = useState<string>("");
  const [unitname, setUnitName] = useState<string>("");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowX = "hidden";

    return () => {
      document.body.style.overflowX = "auto";
      document.documentElement.style.overflowX = "auto";
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setNumberOfPieces(window.innerWidth < 768 ? 480 : 550);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateQRCode = async () => {
    if (!email) {
      setError("Please enter your email.");
      return;
    }

    const sanitizedEmail = email.replace(/\./g, ",");

    setLoading(true);
    const usersRef = ref(database, "users");

    try {
      const snapshot = await get(usersRef);
      if (snapshot.exists()) {
        let userFound = false;
        let userFirstName = "";
        let userLastName = "";
        let userAffiliation = "";
        let userUnit = "";

        snapshot.forEach((childSnapshot) => {
          const user = childSnapshot.val();
          if (user.email === email) {
            userFound = true;
            userFirstName = user.firstName; // Correct property for first name
            userLastName = user.lastName; // Correct property for last name
            userAffiliation = user.affiliationName || user.philriceName; // Fallback to "philriceName"
            userUnit = user.philriceUnit; // Correct property for unit
          }
        });

        if (userFound) {
          setFirstName(userFirstName);
          setLastName(userLastName);
          setAffiliationName(userAffiliation);
          setUnitName(userUnit);
          setError(null);
          setShowConfetti(true);
          setQrCodeUrl(
            `https://api.qrserver.com/v1/create-qr-code/?data=${email}&size=200x200`
          );
        } else {
          setError("This email is not registered. Please check and try again.");
        }
      } else {
        setError("No users found in the database.");
      }
    } catch (error) {
      setError("Error checking email in the database.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

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
        const fileName = firstname
          ? `${firstname}_qr-code.png`
          : "qr-section.png";
        link.href = imageUrl;
        link.download = fileName;
        link.click();
      });
    } else {
      console.error("QR section not found!");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center px-4 w-screen h-full my-20 p-4 gap-4 overflow-hidden">
      <div className="w-full lg:w-[734px] h-auto lg:h-[744px] border-[1px] border-solid border-gray-100 rounded-2xl px-8 py-16 flex flex-col justify-center items-center shadow-lg drop-shadow-md backdrop-blur-lg">
        <div className="text-[#0E9046] text-center text-[40px] md:text-[50px] lg:text-[60px] font-bold">
          Get Event-Ready with <br />
          Your<span className="text-[#F3B71C]"> QR Code</span>
        </div>
        <div className="text-[22px] text-center my-4">
          Confirm registration and save your QR Code for <br />
          easy check-in at the event!
        </div>
        <div className="w-8/12 h-[1px] bg-[#0E9046] my-4" />

        <div className="flex flex-col lg:flex-row items-center gap-4 mt-8">
          <div className="flex flex-col gap-4 w-[250px] md:w-[450px]">
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded p-2 h-14"
            />
            <button
              onClick={generateQRCode}
              disabled={loading}
              className={`${
                loading ? "bg-gray-400" : "bg-[#F3BD1C]"
              } text-white text-[18px] font-bold py-4 px-6 lg:px-12 rounded-md`}>
              {loading ? "Generating..." : "Generate"}
            </button>
          </div>
          {loading && (
            <div className="loader-overlay">
              <div className="loader"></div>
            </div>
          )}
        </div>
      </div>

      {qrCodeUrl && (
        <>
          {showConfetti && (
            <Confetti
              width={window.innerWidth}
              height={document.documentElement.scrollHeight}
              recycle={false}
              numberOfPieces={numberOfPieces}
              gravity={0.04}
              wind={0.002}
              initialVelocityX={{ min: -5, max: 5 }}
              initialVelocityY={{ min: 5, max: 12 }}
              colors={["#0C6972", "#EFB71E", "#EFB71E", "#FFFFFF"]}
            />
          )}
          <div className="w-full lg:w-[734px] h-auto lg:h-[744px] border-[1px] border-solid border-gray-100 rounded-2xl px-16 py-16 flex flex-col justify-center items-center shadow-lg drop-shadow-md backdrop-blur-lg">
            <div className="flex flex-col justify-center items-center">
              <div
                id="qr-section"
                className="flex flex-col items-center mb-8 min-w-[320px] max-w-[375px] h-[608px]">
                <div className="flex flex-col items-center mt-8 font-bold">
                  <div className="absolute z-30 mt-[95px] text-[#0C6972] text-md mr-2">
                    YOU'RE ALL SET!
                  </div>
                  <div className="absolute z-30 mt-[120px] text-md flex flex-col items-center justify-center text-center mr-2">
                    {firstname && lastname
                      ? `${firstname} ${lastname}`
                      : `${firstname}`}{" "}
                    <br />
                    {unitname || affiliationname ? (
                      <div
                        className={`w-[240px] flex flex-col justify-center items-center text-center ${
                          (unitname || affiliationname).length > 50
                            ? "text-[8px]"
                            : (unitname || affiliationname).length > 30
                            ? "text-[12px] mt-2"
                            : "text-[12px] mt-2"
                        } leading-tight`}>
                        {unitname || affiliationname}
                      </div>
                    ) : null}
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
                className="bg-[#F3BD1C] text-white text-[18px] font-bold py-4 px-6 lg:px-12 rounded-md">
                DOWNLOAD
              </button>
            </div>
          </div>
        </>
      )}

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
