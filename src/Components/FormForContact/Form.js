import React, { useState } from "react";
import "./Form.css";
import emailjs from "@emailjs/browser";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);
  const serviceID = "service_0f2ysqq";
  const templateID = "template_9fgky9k";
  const publicKey = "KGzIUcRlED_UfWGQY";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const Validation = () => {
    const newError = {};
    const charOnly = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.userName.trim() === "") {
      newError.userName = "Please enter user name";
    } else if (formData.userName.length < 4) {
      newError.userName = "Charecter must be grater then 4 or equal to 4";
    } else if (!charOnly.test(formData.userName)) {
      newError.userName = "Alphabetic characters only";
    }
    if (formData.email.trim() === "") {
      newError.email = "Please enter email";
    } else if (!emailRegex.test(formData.email)) {
      newError.email = "Invalid email ID";
    }
    if (formData.subject.trim() === "") {
      newError.subject = "Please enter subject";
    }
    if (formData.message.trim() === "") {
      newError.message = "Please enter message";
    }
    setError(newError);
    return Object.keys(newError).length !== 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Validation()) {
      const templateParams = {
        user_name: formData.userName,
        from_name: formData.userName,
        from_email: formData.email,
        to_name: "Dilip Kumar",
        subject: formData.subject,
        message: formData.message,
      };

      emailjs
        .send(serviceID, templateID, templateParams, publicKey)
        .then((res) => {
          toast.success("Message successfully send!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          if (res.status === 200) {
            setLoader(true);
          }
          formReset();
        })
        .catch((error) => {
          console.error("Error sending email:", error);
        });
    }
  };
  setTimeout(() => {
    setLoader(false);
  }, [4000]);

  const formReset = () => {
    setFormData({
      userName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="form_container">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
        />
        <span className="error">{error.userName}</span>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <span className="error">{error.email}</span>

        <label>Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <span className="error">{error.subject}</span>

        <label>Message</label>
        <textarea
          rows="6"
          placeholder="Write your message here....!"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <span className="error">{error.message}</span>
        <button className="btn margin-t " type="submit">
          {loader ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Form;
