import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { Loader, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

function VideoDetail() {
  const [videoDetail, setVideoDetail] = useState(null);
  const [realatedVideo, setRealtedVideo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setRealtedVideo(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelTitle, channelId },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box
      minHeight="95vh"
      mx={1}
      mb={1}
      sx={{ backgroundColor: "#121212", borderRadius: "8px" }}
    >
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <div className=" h-[45vh] sm:h-[70vh] m-4 ">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                height="100%"
                width="100%"
                controls
              />
            </div>
            <Typography color="#fafafa" variant="h5" p={2} fontWeight="bold">
              {title}
            </Typography>
            <Stack
              sx={{ color: "#fafafa" }}
              direction="row"
              justifyContent="space-between"
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fafafa"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{
                      fontSize: "12px",
                      color: "#fafafa",
                      ml: "5px",
                      opacity: "60%",
                    }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: "16px", xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={realatedVideo} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
}

export default VideoDetail;
