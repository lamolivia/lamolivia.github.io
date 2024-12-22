import { useState, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "./Modal.css";
import { IconButton } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useWindowContext } from "../WindowProvider";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function Flipbook({ pdf, width, height, onClose }) {
  const [numPages, setNumPages] = useState(null);
  const book = useRef();
  const windowCtx = useWindowContext();
  const isMobile = windowCtx.w < 690;

  const firstFlip = () => {
    setTimeout(() => book.current.pageFlip().flipNext(), 100);
  };

  function pagesList() {
    return [...Array(numPages).keys()].map((i) => (
      <div className="page">
        <Page width={width} pageNumber={i + 1} />
      </div>
    ));
  }

  return (
    <>
      <Document
        file={pdf}
        className="modal-90w"
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        <HTMLFlipBook
          width={width}
          height={height}
          showCover={isMobile ? false : true}
          onInit={firstFlip}
          ref={book}
        >
          {pagesList()}
        </HTMLFlipBook>
        <IconButton onClick={onClose} sx={{ color: "text.primary" }}>
          <HighlightOffIcon />
        </IconButton>
      </Document>
    </>
  );
}
export default Flipbook;
