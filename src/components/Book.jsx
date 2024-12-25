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

const modalSize = (windowCtx, bWidth, bHeight) => {
  const winW = windowCtx.w;
  const winH = windowCtx.h;
  const whRatio = bWidth / bHeight;

  const isMobile = winW < 690;
  let maxWidth = isMobile ? winW - 50 : winW / 2 - 30;
  maxWidth = maxWidth > 620 ? 620 : maxWidth;
  let maxHeight = winH - 30;

  if ((maxWidth / whRatio) < maxHeight) {
    return [maxWidth, maxWidth / whRatio];
  } else {
    return [maxHeight * whRatio, maxHeight];
  }

}

const Book = ({ pdf, cover, width, height }) => {
  const [isOpen, setIsOpen] = useState(false);
  const bookRef = useRef(null);
  const coverImage = { backgroundImage: `url(${cover})` };

  const windowCtx = useWindowContext();
  const scale = bookScale(windowCtx);

  const bookSize = { width: scale * width, height: scale * height };
  const [modalWidth, modalHeight] = modalSize(windowCtx, width, height);

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
