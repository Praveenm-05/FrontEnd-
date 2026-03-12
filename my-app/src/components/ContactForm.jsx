import React, { useState } from "react";

function ContactForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    console.log(formData);
  };

  return (
    <div className="container my-5">

      <div className="row justify-content-center">

        <div className="col-md-6">

          <h3 className="text-center mb-4">Contact Us</h3>

          <form onSubmit={handleSubmit}>

            {/* Name */}

            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Message */}

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Button */}

            <button type="submit" className="btn btn-dark w-100">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default ContactForm;