import React from "react";
import Footer from "../../Components/Footer/Footer";
import Form from "../../Components/FormForContact/Form";
import Heroimg2 from "../../Components/Heroimg/Heroimg2/Heroimg2";
import NaveBar from "../../Components/NaveBar/NaveBar";
import Address from "../../Components/Address/Address";

const Contact = () => {
  return (
    <div>
      <NaveBar />
      <Heroimg2 heading="CONTACT" text="Lets have a chat" />
      <Address />
      <Form/>
      <Footer />
    </div>
  );
};

export default Contact;
