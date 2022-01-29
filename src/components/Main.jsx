import Container from "@mui/material/Container";

const Main = () => {
  return (
    <Container>
      <div>
        <div>
          <h2 className="text-center text-xl font-bold mt-20">
            Whether you’re buying, selling or renting,<br></br> we can help you
            move forward.
          </h2>
        </div>
        <div className="pt-10">
          <div className="grid grid-cols-3 gap-4">
            <div className="border shadow-2xl rounded-md ">
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
              <div className="flex justify-center">
                <button className="border border-indigo-600 p-2 mb-5 rounded-md ">
                  Search homes
                </button>
              </div>
            </div>
            <div className="border shadow-2xl rounded-md">
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
              <div className="flex justify-center">
                <button className="border border-indigo-600 p-2 mb-5 rounded-md">
                  See your options
                </button>
              </div>
            </div>
            <div className="border shadow-xl rounded-md">
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
              <div className="flex justify-center ">
                <button className="border border-indigo-600 p-2 mb-5 rounded-md">
                  Find rentals
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-40 mb-10 border-b-2 pb-10 text-current">
          <div className="flex justify-evenly text-lg">
            <div className="text-center border-r-2 pr-20 ">
              <div className="  pt-1 pb-1 pr-2 pl-2 no-underline hover:underline font-semibold ">
                Real Estate
              </div>
            </div>

            <div className="text-center border-r-2 pr-20">
              <div className=" pt-1 pb-1 pr-2 pl-2 no-underline hover:underline font-semibold">
                Rentals
              </div>
            </div>

            <div className="text-center border-r-2 pr-20  ">
              <div className=" pt-1 pb-1 pr-2 pl-2 no-underline hover:underline font-semibold">
                Mortgage Rates
              </div>
            </div>

            <div className="text-center pt-2 pb-2">
              <div className=" pt-1 pb-1 pr-2 pl-2 no-underline hover:underline font-semibold">
                Browse Homes
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Main;
