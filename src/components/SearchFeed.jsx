import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import { fetchFromAPI } from "../utils/fetchFromAPI";

import { Videos } from "./";

function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
      }}
    >
      <Box
        py={1}
        px={2}
        mb={1}
        mx={1}
        sx={{
          overflowY: "auto",
          height: "92vh",
          flex: "2",
          backgroundColor: "#121212",
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          color="#fafafa"
          mb={2}
          sx={{ gap: "8px" }}
        >
          <span> Results for {searchTerm} </span> <KeyboardArrowRightIcon />
        </Typography>

        <Videos videos={videos} justifyContent="start" />
      </Box>
    </Stack>
  );
}

export default SearchFeed;
