import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

function NavBar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      py={2}
      px={4}
      m={1}
      sx={{
        position: "sticky",
        backgroundColor: "#121212",
        top: 0,
        justifyContent: "space-between",
        borderRadius: "8px",
      }}
    >
      <Link to="/" className="flex gap-2 items-center justify-center ">
        <img src={logo} alt="PanoraPlayLogo" className="h-[24px]" />
        <span className="text-2xl text-white font-league-gothic tracking-wide ">
          PanoraPlay
        </span>
      </Link>
      <SearchBar />
    </Stack>
  );
}

export default NavBar;
