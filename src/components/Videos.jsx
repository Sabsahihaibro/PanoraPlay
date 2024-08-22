import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard, Loader } from "./";

function Videos({ videos, justifyContent, direction }) {
  if (!videos?.length) return <Loader />;

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent={justifyContent || "start"}
      alignItems="start"
      gap={2}
    >
      {videos.map((video, i) => (
        <Box key={i}>
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.channelId && <ChannelCard channelDetail={video} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
