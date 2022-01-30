import { useState } from "react";
import IconButton from "@mui/material/IconButton";

const Body = ({ url }) => {
  const [location, setLocation] = useState("");
  return (
    <div>
      <div>
        <div className="pt-6 pb-10 ">
          <div className="flex justify-center text-2xl md:text-4xl font-bold text-white mt-10 mb-10 md:mt-16 font-serif">
            <h2>Change starts here</h2>
          </div>
          <div id="searchBar" className="flex mb-40 h-full">
            <form>
              <div className="flex justify-center w-screen h-16 ">
                <input
                  className="md:w-5/12 w-10/12 p-6 rounded-md text-base font-normal"
                  name="location"
                  type="text"
                  id="location"
                  placeholder="Enter an address, neighbourhood, city or zip code"
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                />
                <span>
                  <IconButton></IconButton>
                </span>
                <span>
                  <IconButton></IconButton>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
