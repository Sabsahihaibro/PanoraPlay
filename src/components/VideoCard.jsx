import { Link } from "react-router-dom";

import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoChannelTitle,
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
  demoChannelUrl,
} from "../utils/constants";
import { ClassNames } from "@emotion/react";

function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  return (
    <Card
      sx={{
        backgroundColor: "transparent",
        width: { xs: "100%", sm: "368px", md: "340px" },
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{
            width: { xs: "100%", sm: "368px", md: "340px" },
            height: 180,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
        />
      </Link>
      <CardContent
        sx={{
          backgroundColor: "#1F1F1F",
          height: 110,
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
        }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fafafa">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography
            variant="subtitle2"
            fontWeight="normal"
            color="#fafafa"
            sx={{ opacity: "60%" }}
          >
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle
              color="#fafafa"
              sx={{ fontSize: "12px", ml: "5px", opacity: "60%" }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

export default VideoCard;
