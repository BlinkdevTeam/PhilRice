import React, { useState } from "react";
import "./Flipbook.css"; // Adjust the path if necessary

// Attach togglePageFlip function to the window object
window.togglePageFlip = function (el: HTMLElement) {
  setAllPagesBack();
  setClickedPageForward(el);
  el.classList.toggle("turn");
};

// Helper functions
function setAllPagesBack() {
  const pages = document.getElementsByClassName("page");
  for (let i = 0; i < pages.length; i++) {
    pages[i].classList.remove("z-50");
  }
}

function setClickedPageForward(el: HTMLElement) {
  el.classList.add("z-50");
}

const Flipbook: React.FC = () => {
  const [activePage, setActivePage] = useState<string | null>(null);

  const handlePageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget as HTMLElement;
    window.togglePageFlip(target); // Call the global function from the window object

    // Use nullish coalescing to avoid undefined
    const page = target.dataset.page || null;
    setActivePage(activePage === page ? null : page);
  };

  return (
    <div className="perspective text-white bg-black w-[80%] h-screen flex justify-end mt-[10%]">
      <div
        className="page absolute duration-1000 flex items-end origin-left w-1/2 transition h-screen transform"
        data-page="2"
        onClick={handlePageClick}
      >
        <div className="front text-xl sm:text-3xl md:text-5xl flex items-center justify-start px-2 sm:px-5 md:px-20 font-bold bg-gray-900 h-screen absolute right-0 w-full h-full">
          Page 3
        </div>
        <div className="back text-xl sm:text-3xl md:text-5xl font-bold flex items-center justify-start px-2 sm:px-5 md:px-20 bg-gray-800 h-screen absolute w-full h-full">
          Page 4
        </div>
      </div>

      <div
        className="page absolute duration-1000 flex items-end origin-left w-1/2 transition h-screen transform"
        data-page="1"
        onClick={handlePageClick}
      >
        <div className="front text-xl sm:text-3xl md:text-5xl flex flex-col items-start justify-center px-2 sm:px-5 md:px-20 font-bold bg-gray-900 h-screen absolute right-0 w-full h-full">
          Welcome to this Page
          <p className="text-sm text-gray-500">Click me to open</p>
        </div>
        <div className="back text-xl sm:text-3xl md:text-5xl font-bold flex items-center justify-start px-2 sm:px-5 md:px-20 bg-gray-800 h-screen absolute w-full h-full">
          This is Page 2
        </div>
      </div>
    </div>
  );
};

export default Flipbook;
