import React from 'react';
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <div className="">
      <div className="lg:grid lg:grid-cols-2 lg:gap-6 py-5 bg-beige-300 lg:h-2/3">
        <div className="flex flex-col justify-center text-center lg:p-40 md:text-left">
          <p className="uppercase font-medium text-gray-500">Contact Us</p>
          <h1 className="lg:text-6xl md:text-5xl pb-5 text-teal-500 text-4xl">Let's talk about us</h1>
        </div>
        <ContactForm />
      </div>
    </div>
    );
};

export default Contact;