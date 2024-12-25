import Stack from "@mui/material/Stack";
import { Typography, Box, Chip, Button } from "@mui/material";
import { useWindowContext } from "../WindowProvider";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const Project = ({ component, reportSrc, isLeft, data }) => {
  const windowCtx = useWindowContext();
  const isVert = windowCtx.w < 1200;
  const isMobile = windowCtx.w < 690;
  const hasReport = reportSrc != undefined;

  const title = (
    <Typography align="left" variant="h3">
      {data.title}
    </Typography>
  );
  const body = (
    <Typography align="left" variant="body1" sx={{ fontSize: "20px" }}>
      {data.body}
    </Typography>
  );
  const research = (
    <Typography align="left" variant="h6">
      {data.research.join(" • ")}
    </Typography>
  );
  const reportButton = hasReport ? (
    <a href={reportSrc} target="_blank">
      <Button variant="outlined" startIcon={<LibraryBooksIcon />} sx={{color: data.textColor, borderColor: data.textColor}}>
        Read Full Report 
      </Button>
    </a>
  ) : <></>

  const text = (
    <Stack spacing={5}>
      {title}
      {body}
      {research}
      {hasReport && reportButton}
    </Stack>
  );

  const methods = (
    <Stack spacing={3}>
      {component}
      <Stack direction="row" sx={{ justifyContent: "center", mt: "1rem" }}>
        {data.implementation.map((e) => (
          <Chip
            label={e}
            sx={{ m: "0.2rem", boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)", bgcolor: data.buttonColor }}
          />
        ))}
      </Stack>
    </Stack>
  );

  return (
    <Box sx={{ width: "100%", bgcolor: data.color, color: data.textColor}}>
      {!isVert && (
        <Stack
          direction={isVert ? "column" : "row"}
          spacing={8}
          sx={{
            margin: "auto",
            maxWidth: "1280px",
            minHeight: "500px",
            p: "5%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isLeft ? [text, methods] : [methods, text]}
        </Stack>
      )}
      {isVert && (
        <Stack
          direction="column"
          spacing={5}
          sx={{
            margin: "auto",
            maxWidth: "1280px",
            minHeight: "500px",
            p: "5%",
            py: "5rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {title}
          {methods}
          {body}
          {research}
          {hasReport && reportButton}
        </Stack>
      )}
    </Box>
  );
};

export default Project;
