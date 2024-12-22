import React, { useState, useRef } from "react";
import "./Book.css";
import Flipbook from "./Flipbook";
import { useWindowContext } from "../WindowProvider";

const bookScale = (windowCtx) => {
  const winW = windowCtx.w;
  if (winW >= 690) {
    return 1;
  } else {
    return (0.5 / 350) * winW;
  }
};

const Book = ({ pdf, cover, width, height }) => {
  const [isOpen, setIsOpen] = useState(false);
  const bookRef = useRef(null);
  const coverImage = { backgroundImage: `url(${cover})` };

  const windowCtx = useWindowContext();
  const isMobile = windowCtx.w < 690;
  const scale = bookScale(windowCtx);

  const bookSize = { width: scale * width, height: scale * height };

  let modalWidth = isMobile ? windowCtx.w - 50 : windowCtx.w / 2 - 30;
  modalWidth = modalWidth > 620 ? 620 : modalWidth;
  const modalHeight = (height / width) * modalWidth;

  return (
    <div>
      <div
        className="book"
        style={bookSize}
        ref={bookRef}
        onClick={() => setIsOpen(true)}
      >
        <div className="front-cover" style={coverImage}></div>
      </div>
      {isOpen && (
        <Flipbook
          pdf={pdf}
          width={modalWidth}
          height={modalHeight}
          onClose={() => setIsOpen(false)}
        />
      )}{" "}
    </div>
  );
};

export default Book;
