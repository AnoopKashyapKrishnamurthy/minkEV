'use client'; // if using app router

import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-between px-6 md:px-20 py-12 gap-10 bg-white text-black">
      {/* Left Side */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-5xl font-bold">
          Let’s work <span className="text-lime-500"><br></br>together</span>
        </h1>

        <div>
          <p className="font-semibold text-lg">09876 543 210</p>
          <p className="text-sm text-gray-700">Info@Minkev.Co.Uk</p>
        </div>

        <div className="space-y-4">
          <div>
            <p className="font-semibold">Worcester, UK</p>
            <p className="text-sm text-gray-600">70 st.philips avenue<br />worcester park, kt4 8la</p>
          </div>
          <div>
            <p className="font-semibold">Bengaluru, KA</p>
            <p className="text-sm text-gray-600">mini forest jp nagar,<br />bengaluru, ka</p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-xl font-semibold">Get In Touch</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Full Name *"
            className="w-full border-b border-gray-300 focus:outline-none py-2"
          />
          <input
            type="email"
            placeholder="E-Mail Address *"
            className="w-full border-b border-gray-300 focus:outline-none py-2"
          />
          <input
            type="text"
            placeholder="Phone Number *"
            className="w-full border-b border-gray-300 focus:outline-none py-2"
          />
          <select className="w-full border-b border-gray-300 focus:outline-none py-2 bg-transparent">
            <option>Select Subject</option>
            <option>Support</option>
            <option>Inquiry</option>
            <option>Feedback</option>
          </select>
          <textarea
            placeholder="Your Message"
            className="w-full border border-gray-300 focus:outline-none p-3 h-32 resize-none"
          />
          <div className="flex items-center gap-2">
            <input type="checkbox" id="captcha" />
            <label htmlFor="captcha" className="text-sm text-gray-600">I’m not a robot</label>
          </div>
          <button
            type="submit"
            className="bg-lime-500 text-black px-6 py-2 rounded-full font-medium hover:bg-lime-600 transition"
          >
            Send a message
          </button>
        </form>
      </div>
    </div>
  );
}
