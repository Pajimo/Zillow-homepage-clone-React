import Container from "@mui/material/Container";

const Header = () => {
  return (
    <div className="md:bg-white">
      <Container fixed>
        <div>
          <nav className="md:flex md:justify-between pt-6 pb-6 text-lg font-serif ">
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
              <img src="src\logo.svg" />
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
    </div>
  );
};

export default Header;
