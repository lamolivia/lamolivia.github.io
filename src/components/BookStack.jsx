import { useState } from "react";
import Book from "./Book";
import Stack from "@mui/material/Stack";

const BookStack = () => {
  return (
    <Stack direction="row" spacing={3}>
      <Book
        pdf={"./workshop.pdf"}
        cover={"./books/workshop-cover.png"}
        width={850 * 0.4}
        height={1100 * 0.4}
      />
      <Book
        pdf={"./facilitator.pdf"}
        cover={"./books/facilitator-cover.png"}
        width={1140 * 0.25}
        height={1445 * 0.25}
      />
    </Stack>
  );
};

export default BookStack;
