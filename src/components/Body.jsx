import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import "../index.css";

const Body = ({ url }) => {
  const [location, setLocation] = useState("");
  return (
    <div>
      <div>
        <div className="md:pt-6 md:pb-10 pb-5 ">
          <div className="flex justify-center text-2xl md:text-4xl font-extrabold text-white mt-10 mb-5 md:mb-6 md:mt-16 font-serif">
            <h2>Change starts here</h2>
          </div>
          <div id="searchBar" className="flex mb-40 md:pb-20 h-full">
            <form className="w-screen">
              <div className="md:w-8/12 w-screen m-auto">
                <div className="flex justify-center w-10/12 m-auto h-16 relative ">
                  <input
                    className="md:w-full w-10/12 pt-6 pl-6 pb-6 text-base font-normal input-fielded truncate"
                    name="location"
                    type="text"
                    id="location"
                    placeholder="Enter an address, neighbourhood, city or zip code"
                    value={location}
                    onChange={(e) => {
                      setLocation(e.target.value);
                    }}
                  />
                  <span
                    className="bg-white pt-2 pb-2 text-base md:text-xl pr-5 absolute bottom-0 right-0"
                    style={{
                      width: "50px",
                    }}
                  >
                    <IconButton
                      type="submit"
                      sx={{ p: "" }}
                      aria-label="search"
                    >
                      <SearchIcon style={{ fontSize: 30 }} />
                    </IconButton>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
