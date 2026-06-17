import React from "react";
import Footer from "../../Components/Footer/Footer";
import Heroimg from "../../Components/Heroimg/Heroimg";
import NaveBar from "../../Components/NaveBar/NaveBar";
import Work from "../../Components/WorkCard/Work";

const Home = () => {
  return (
    <div>
      <NaveBar />
      <Heroimg />
      <Work/>
      <Footer />
    </div>
  );
};

export default Home;
