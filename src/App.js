import logo from "./logo.svg";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Container from "@mui/material/Container";

const url =
  "https://www.zillowstatic.com/s3/homepage/static/_Desktop_Overlay_ChangeStartsHere_HC.webp";

function App() {
  return (
    <div className="App">
      <div
        className="md:bg-cover bg-right-top bg-cover md:bg-center"
        style={{
          backgroundImage: `url(${url})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <Header />
        <Body url={url} />
      </div>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
