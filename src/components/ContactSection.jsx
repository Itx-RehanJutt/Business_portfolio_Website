import React, { useState } from "react";
import { useMessages } from "../Context/MessagesContext.jsx"; 

const ContactSection = () => {
  // const { addMessage } = useMessages();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // add to context
      addMessage(formData);

      alert("Message submitted successfully");

      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section className="w-full flex flex-col items-center justify-center bg-white py-16 px-4">
      <h1 className="text-4xl md:text-4xl font-bold mb-16 text-center">
        CONTACT US
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-[212px] w-full max-w-[1258px]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-between w-full max-w-[535px] h-auto md:h-[410px]"
        >
          <div className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 h-[60px] rounded-md bg-gray-100 focus:outline-none w-full"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 h-[60px] rounded-md bg-gray-100 focus:outline-none w-full"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}

            <textarea
              name="message"
              placeholder="Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="p-3 rounded-md bg-gray-100 focus:outline-none resize-none w-full h-[202px]"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-[265px] h-[68px]  
               bg-green-500 text-white font-semibold rounded-md 
               hover:bg-green-600 transition mt-9"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="w-full max-w-[511px] h-[300px] md:h-[391px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1722474.0442021615!2d72.19405915912739!3d32.52061483664475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfeb6bb5c0b649%3A0xb15572084afd9b0e!2sNational%20Aerospace%20Science%20and%20Technology%20Park%20(NASTP)!5e0!3m2!1sen!2s!4v1758704864911!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
            className="rounded-md"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
