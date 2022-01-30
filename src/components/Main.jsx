import React, { useState } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpSharpIcon from "@mui/icons-material/KeyboardArrowUpSharp";
import RealEstate from "./AccodionData/RealEstate";
import Rentals from "./AccodionData/Rentals";
import Mortgage from "./AccodionData/Mortgage";
import BrowseHome from "./AccodionData/BrowseHome";

const Main = () => {
  const [arrowDirection, setArrowDirection] = useState(true);
  const [arrowDirection2, setArrowDirection2] = useState(true);
  const [arrowDirection3, setArrowDirection3] = useState(true);
  const [arrowDirection4, setArrowDirection4] = useState(true);

  return (
    <Container>
      <div>
        <div>
          <h2 className="text-center font-sans md:text-xl text-lg font-medium mt-20">
            Whether you’re buying, selling or renting,<br></br> we can help you
            move forward.
          </h2>
        </div>
        <div className="pt-10">
          <div className="md:grid md:grid-cols-3 gap-4">
            <div className="sm:border sm:shadow-xl rounded-md pb-20 mb-5 border-b-2 border-t-2 shadow-lg">
              <div className="flex justify-center mt-10">
                <img src="https://www.zillowstatic.com/s3/homepage/static/Buy_a_home.webp" />
              </div>
              <div className="">
                <h2 className="text-center text-2xl font-semibold mt-5">
                  Buy a home
                </h2>
              </div>
              <div className="text-center m-5">
                <p>
                  Find your place with an immersive photo experience and the
                  most listings include things you wont find anywhere else
                </p>
              </div>
              <div className="flex justify-center pt-5">
                <Button variant="outlined">Search homes</Button>
              </div>
            </div>
            <div className="sm:border sm:shadow-xl rounded-md border-b-2 border-t-2 pb-20 mb-5 shadow-lg">
              <div className="flex justify-center mt-10">
                <img src="https://www.zillowstatic.com/s3/homepage/static/Sell_a_home.webp" />
              </div>
              <div className="">
                <h2 className="text-center text-2xl font-semibold mt-5">
                  Sell a home
                </h2>
              </div>
              <div className="text-center m-5">
                <p>
                  No matter what path you take to see your home, we can help you
                  navigate a successful sale
                </p>
              </div>
              <div className="flex justify-center pt-5">
                <Button variant="outlined">See your options</Button>
              </div>
            </div>
            <div className="border-b-2 border-t-2 pb-20 sm:border md:shadow-xl shadow-lg rounded-md mb-5">
              <div className="flex justify-center mt-10">
                <img src="https://www.zillowstatic.com/s3/homepage/static/Rent_a_home.webp" />
              </div>
              <div className="">
                <h2 className="text-center text-2xl font-semibold mt-5">
                  Rent a home
                </h2>
              </div>
              <div className="text-center m-5">
                <p>
                  We're creating a seamless online expereince- from shopping on
                  the largest rental network to applying to paying rent
                </p>
              </div>
              <div className="flex justify-center pt-5">
                <Button variant="outlined">Find rentals</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 md:mt-40 mb-10 ml-10 md:ml-0 border-b-2 pb-10 text-current">
          <div className="md:flex md:justify-evenly text-base">
            <div>
              <div className="md:text-center md:border-r-2 md:pr-20 ">
                <div
                  className="  pt-1 pb-1 pr-2 md:pl-2 no-underline hover:underline font-normal "
                  onClick={() => {
                    setArrowDirection(!arrowDirection);
                  }}
                >
                  Real Estate{" "}
                  {arrowDirection ? (
                    <KeyboardArrowDownIcon />
                  ) : (
                    <KeyboardArrowUpSharpIcon />
                  )}
                </div>
              </div>
              {!arrowDirection && <RealEstate />}
            </div>
            <div>
              <div className="md:text-center md:border-r-2 md:pr-20">
                <div
                  className=" pt-1 pb-1 pr-2 md:pl-2 no-underline hover:underline font-normal"
                  onClick={() => {
                    setArrowDirection2(!arrowDirection2);
                  }}
                >
                  Rentals{" "}
                  {arrowDirection2 ? (
                    <KeyboardArrowDownIcon />
                  ) : (
                    <KeyboardArrowUpSharpIcon />
                  )}
                </div>
              </div>
              {!arrowDirection2 && <Rentals />}
            </div>
            <div>
              <div className="md:text-center md:border-r-2 md:pr-20  ">
                <div
                  className=" pt-1 pb-1 pr-2 md:pl-2 no-underline hover:underline font-normal"
                  onClick={() => {
                    setArrowDirection3(!arrowDirection3);
                  }}
                >
                  Mortgage Rates{" "}
                  {arrowDirection3 ? (
                    <KeyboardArrowDownIcon />
                  ) : (
                    <KeyboardArrowUpSharpIcon />
                  )}
                </div>
              </div>
              {!arrowDirection3 && <Mortgage />}
            </div>
            <div>
              <div className="md:text-center">
                <div
                  className=" pt-1 pb-1 pr-2 md:pl-2 no-underline hover:underline font-normal"
                  onClick={() => {
                    setArrowDirection4(!arrowDirection4);
                  }}
                >
                  Browse Homes{" "}
                  {arrowDirection4 ? (
                    <KeyboardArrowDownIcon />
                  ) : (
                    <KeyboardArrowUpSharpIcon />
                  )}
                </div>
              </div>
              {!arrowDirection4 && <BrowseHome />}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Main;
