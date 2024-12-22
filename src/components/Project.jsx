import Stack from "@mui/material/Stack";
import { Typography, Box, Chip, ListItem } from "@mui/material";
import { useWindowContext } from "../WindowProvider";

const Project = ({ component, isLeft, data }) => {
  const windowCtx = useWindowContext();
  const isVert = windowCtx.w < 1200;
  const isMobile = windowCtx.w < 690;

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

  const text = (
    <Stack spacing={5}>
      {title}
      {body}
      {research}
    </Stack>
  );

  const methods = (
    <Stack spacing={3}>
      {component}
      <Stack direction="row" sx={{ justifyContent: "center", mt: "1rem" }}>
        {data.implementation.map((e) => (
          <Chip
            label={e}
            color="secondary"
            sx={{ m: "0.2rem", boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)" }}
          />
        ))}
      </Stack>
    </Stack>
  );

  return (
    <Box sx={{ width: "100%", bgcolor: data.color }}>
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
          spacing={8}
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
        </Stack>
      )}
    </Box>
  );
};

export default Project;
