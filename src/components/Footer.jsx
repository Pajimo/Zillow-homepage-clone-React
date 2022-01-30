import Container from "@mui/material/Container";

const Footer = () => {
  return (
    <div className="container mx-auto">
      <Container>
        <div>
          <div className="md:flex md:flex-wrap space-x-6 md:text-center leading-loose text-sm font-normal border-b-2 pb-10 sm:pl-5">
            <h2></h2>
            <h2>About</h2>
            <h2>Zestimates</h2>
            <h2>Reasearch</h2>
            <h2>Caareers</h2>
            <h2>Help</h2>
            <h2>Advertise</h2>
            <h2>Fair Housing Guide</h2>
            <h2>Terms of use</h2>
            <h2>Privacy Portal</h2>
            <h2>Cookie Prefence</h2>
            <h2>Blog</h2>
            <h2>AI</h2>
            <h2>Mobile Apps</h2>
            <h2>Trulia</h2>
            <h2>StreetEasy</h2>
            <h2>HotsPads</h2>
            <h2>Out East</h2>
            <h2>ShowingTime</h2>
          </div>
          <div className="text-xs md:flex md:justify-center text-center pt-10 w-full">
            <div className="md:w-2/3">
              Zillow Group is committed to ensuring digital accessibility for
              individuals with disabilities. We are continuously working to
              improve the accessibility of our web experience for everyone, and
              we welcome feedback and accommodation requests. If you wish to
              report an issue or seek an accommodation, please
            </div>
          </div>
          <div className="text-xs md:flex md:justify-center text-center pt-10 w-full">
            <div className="md:w-2/3">
              Zillow, Inc. holds real estate brokerage licenses in multiple
              states. Zillow (Canada), Inc. holds real estate brokerage licenses
              in multiple provinces. A list of our real estate licenses is
              available here. TREC: Information about brokerage services,
              Consumer protection notice California DRE #1522444
            </div>
          </div>
          <div className="text-xs md:flex md:justify-center text-center pt-10 w-full">
            <div className="md:w-2/3">
              For listings in Canada, the trademarks REALTOR®, REALTORS®, and
              the REALTOR® logo are controlled by The Canadian Real Estate
              Association (CREA) and identify real estate professionals who are
              members of CREA. The trademarks MLS®, Multiple Listing Service®
              and the associated logos are owned by CREA and identify the
              quality of services provided by real estate professionals who are
              members of CREA. Used under license.
            </div>
          </div>
        </div>
      </Container>
      <img src="http://www.w3.org/2000/svg" viewBox="0 0 1200 160" />{" "}
    </div>
  );
};

export default Footer;
