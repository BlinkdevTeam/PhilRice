import React from "react";

const Modal = ({ isOpen, onClose, speaker }: any) => {
  if (!isOpen) return null;

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleOutsideClick}>
      <div className="relative bg-white flex mt-40 md:mt-0 flex-col md:flex-row rounded-tr-[80px] shadow-lg w-[298px] md:w-[90%] h-[450px] md:h-[374px] lg:h-[518px]">
        <div
          className="absolute top-6 right-8 cursor-pointer"
          onClick={onClose}>
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.48542 26.8701L26.1631 9.19238"
              stroke="#0E9046"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M26.8702 25.4559V8.4853H9.89962"
              stroke="#0E9046"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex flex-wrap">
          <div className="w-[299px] md:w-[353px] lg:w-[449px] h-[356px] md:h-[366px] lg:h-[518px] bg-custom-gradient rounded-tr-[100px] relative -mt-40 md:mt-2 lg:mt-0">
            <img
              src={speaker.image}
              alt={speaker.name}
              className="absolute bottom-16 w-full h-auto rounded-bl-[80px]"
            />
            <div className="absolute bottom-28 md:bottom-36 left-0 w-40 h-2 bg-[#EFB71E]" />
            <div className="absolute text-[15px] md:text-[22px] bottom-0 flex flex-col justify-center items-center text-center text-white bg-[#0E9046] w-full h-[115.64px] md:h-[147px] rounded-bl-[80px] px-2">
              <div
                className="text-[22px] md:text-[30px] font-bold"
                dangerouslySetInnerHTML={{ __html: speaker.name }}></div>
              <div
                className="text-[15px] md:text-[22px]"
                dangerouslySetInnerHTML={{ __html: speaker.description }}></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start ps-6 pe-5 md:pe-16 lg:pe-24 py-6 overflow-hidden">
          <div className="text-[#0E9046] text-[15px] md:text-[18px] lg:text-[22px] xl:text-[31px] 2xl:text-[38px] font-bold">
            {speaker.title}
          </div>
          <div className="text-[12px] md:text-[15px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] pt-4 overflow-y-auto">
            {speaker.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
