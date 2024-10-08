import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CircularIndeterminate() {
  return (
    <Box
      height="92vh"
      sx={{ display: "flex" }}
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress />
    </Box>
  );
}
