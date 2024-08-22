import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

function ChannelDetail() {
  const { id } = useParams();

  const [videos, setVideos] = useState([]);
  const [channelDetail, setChannelDetail] = useState(null);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box
      minHeight="95vh"
      mx={1}
      mb={1}
      sx={{ backgroundColor: "#121212", borderRadius: "8px" }}
    >
      <Box>
        <div className="bg-gradient-to-l from-emerald-700 via-emerald-500 to-indigo-400 z-10 h-[300px] rounded-t-[8px]" />
        <ChannelCard channelDetail={channelDetail} marginTop="-120px" />
      </Box>
      <Box display="flex" p={2}>
        <Videos videos={videos} justifyContent="center" />
      </Box>
    </Box>
  );
}

export default ChannelDetail;
