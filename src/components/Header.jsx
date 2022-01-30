import Container from "@mui/material/Container";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:bg-white ">
      <Container fixed className=" hidden">
        <div>
          <nav className="md:flex md:justify-between pt-6 pb-6 text-lg font-serif hidden">
            <section>
              <ul className="flex md:space-x-8">
                <li>Buy</li>
                <li>Rent</li>
                <li>Sell</li>
                <li>Home Loans</li>
                <li>Agent finder</li>
              </ul>
            </section>
            <section>
              <img
                src="https://s.zillowstatic.com/pfs/static/z-logo-default.svg"
                alt="Zillow logo"
              />
            </section>
            <section>
              <ul className="flex md:space-x-8">
                <li>Manage Rentals</li>
                <li>Advertse</li>
                <li>Help</li>
              </ul>
            </section>
          </nav>
        </div>
      </Container>
      <div className="pl-5 flex justify-between pt-5 pr-5 space-x-5 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className=" inline-flex items-center justify-center rounded-md text-white hover:text-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {!isOpen ? (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
        <section className="">
          <img
            src="https://s.zillowstatic.com/pfs/static/z-logo-default.svg"
            alt="Zillow logo"
          />
        </section>
        <section>
          <button>
            <SendOutlinedIcon />{" "}
          </button>
        </section>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div ref={ref} className="md:hidden" id="mobile-menu">
            <div className="md:bg-white">
              <div fixed>
                <div>
                  <nav className="m-5 pt-6 pb-6 text-lg font-serif ">
                    <section>
                      <ul className="md:space-x-8">
                        <li>Buy</li>
                        <li>Rent</li>
                        <li>Sell</li>
                        <li>Home Loans</li>
                        <li>Agent finder</li>
                      </ul>
                    </section>
                    <section>
                      <ul className="flex flex-col md:space-x-8">
                        <li>Manage Rentals</li>
                        <li>Advertse</li>
                        <li>Help</li>
                      </ul>
                    </section>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default Header;
