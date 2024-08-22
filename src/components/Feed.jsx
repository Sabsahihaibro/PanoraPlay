import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import { fetchFromAPI } from "../utils/fetchFromAPI";

import { SideBar, Videos } from "./";

function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
      }}
    >
      <Box
        mx={1}
        sx={{
          mb: { md: 1 },
          height: { sx: "auto", md: "92vh" },
          px: { sx: 0, md: 2 },
          backgroundColor: "#121212",
          borderRadius: "8px",
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fafafa" }}
        >
          Copyright 2024 SV
        </Typography>
      </Box>

      <Box
        py={1}
        px={2}
        my={1}
        mx={1}
        sx={{
          mt: { md: 0 },
          ml: { md: 0 },
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
          <span> {selectedCategory} videos </span> <KeyboardArrowRightIcon />
        </Typography>

        <Videos videos={videos} justifyContent="start" />
      </Box>
    </Stack>
  );
}

export default Feed;
