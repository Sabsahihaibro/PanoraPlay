import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

function SideBar({ selectedCategory, setSelectedCategory }) {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => setSelectedCategory(category.name)}
          className="text-[#fafafa]  font-semibold flex items-center justify-start gap-3 cursor-pointer bg-transparent outline-none border-none py-[8px] px-[32px] m-[8px] md:mx-0  rounded-[8px] transition-all duration-300 ease hover:bg-[#212121] "
          style={{
            backgroundColor: category.name === selectedCategory && "#212121",
          }}
        >
          <div className="flex items-center justify-center h-[18px] w-[18px]">
            <category.icon
              className="text-[#FC1503] h-full w-full "
              style={{
                color: category.name === selectedCategory && "#fafafa",
              }}
            />
          </div>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
}

export default SideBar;
