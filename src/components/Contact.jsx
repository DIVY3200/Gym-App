import React from "react";
import Button from "../layouts/Button";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10">
      <div className="flex flex-col md:flex-row justify-between w-full">
        <form className="w-full md:w-2/5 space-y-5 pt-20">
          <h1 className="text-5xl font-semibold text-center">Contact Us</h1>
          <div className="flex flex-col">
            <label htmlFor="userName">Your Name</label>
            <input
              className="py-3 px-5 rounded-lg hover:shadow-md transition-all bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brightRed"
              type="text"
              name="userName"
              id="userName"
              placeholder="Enter your Name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="userEmail">Your Email</label>
            <input
              className="py-3 px-5 rounded-lg hover:shadow-md transition-all bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brightRed"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Enter your Email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="userNumber">Your Number</label>
            <input
              className="py-3 px-5 rounded-lg hover:shadow-md transition-all bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brightRed"
              type="number"
              name="userNumber"
              id="userNumber"
              placeholder="Enter your Number"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="userMessage">Your Message</label>
            <textarea
              className="py-3 px-5 rounded-lg hover:shadow-md transition-all bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brightRed"
              name="userMessage"
              id="userMessage"
              rows="4"
              placeholder="Enter your Message"
            ></textarea>
          </div>
          <div className="flex flex-row justify-center space-x-4">
            <Button title="Send Message" />
            <Button title="Start a call" href="tel:+92" />
          </div>
        </form>
        <div className="flex flex-row items-center w-full md:w-2/4 my-5">
          <iframe
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28637.562053621823!2d81.66285339820561!3d26.206589837279644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a5785ac6e3645%3A0xd7686fb2c02e65de!2sGauriganj%2C%20Uttar%20Pradesh%20227409!5e0!3m2!1sen!2sin!4v1726992575016!5m2!1sen!2sin"
            width="500"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
