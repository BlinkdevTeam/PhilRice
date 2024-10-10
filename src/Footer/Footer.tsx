import React from "react";
import Logo from "../Assets/PHILRICELOGObrown.png";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-[1728px] bg-red-200">
        <div className="grid grid-cols-3 gap-4 justify-center items-center px-[160px]">
          <div>
            <img src={Logo} alt="philrice logo brown" className="" />
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in
              vulputate eros, et faucibus velit. Donec sed elit tellus.{" "}
            </div>
          </div>
          <div>
            <div>Useful Links</div>
            <div className="grid grid-cols-2 gap-4">
              <div>Home</div>
              <div>About</div>
              <div>Program</div>
              <div>Speaker</div>
              <div>Venue</div>
              <div>FAQs</div>
            </div>
          </div>
          <div>
            <div>Contact Info</div>
            <div>+63-912-755-4269</div>
            <div>sample@philrice.org</div>
            <div>DA-PhilRice Facebook Page</div>
          </div>
        </div>
      </div>
    </>
  );
}
