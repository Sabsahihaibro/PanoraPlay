import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
    }

    setSearchTerm("");
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: "12px",
        pl: 2,
        boxShadow: "none",
        mr: { xs: 0, sm: 5 },
        backgroundColor: "#212121",
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        value={searchTerm}
        className="text-[#fafafa] border-none outline-none w-[50px] md:w-[350px] bg-[#212121] "
      />
      <IconButton
        type="submit"
        sx={{ p: "10px", color: "#fafafa", opacity: "0.8" }}
      >
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
