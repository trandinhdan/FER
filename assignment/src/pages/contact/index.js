import React, { useState, useEffect } from "react";

const ContactForm = () => {
  const [contacts, setContacts] = useState([]); // State chứa danh sách liên hệ
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Xử lý khi người dùng thay đổi dữ liệu trong form
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Gửi dữ liệu form đến API khi người dùng nhấn "Send Message"
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:9898/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const newContact = await response.json();
        setContacts((prevContacts) => [...prevContacts, newContact]);
        setFormData({ name: "", email: "", subject: "", message: "" }); // Xóa dữ liệu trong form sau khi gửi
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <React.Fragment>
          <div className="container-fluid">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Contact Us</span>
      </h2>
      <div className="row px-xl-5">
        <div className="col-lg-7 mb-5">
          <div className="contact-form bg-light p-30">
            <form id="contactForm" noValidate onSubmit={handleSubmit}>
              <div className="control-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="control-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="control-group">
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="control-group">
                <textarea
                  className="form-control"
                  rows="8"
                  id="message"
                  placeholder="Message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
                <p className="help-block text-danger"></p>
              </div>
              <div>
                <button className="btn btn-primary py-2 px-4" type="submit">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>

  );
};

export default ContactForm;
