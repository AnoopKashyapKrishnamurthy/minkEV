'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    setLoading(true);

    const formData = new FormData();
    formData.append('access_key', 'd0a6e82b-70fd-42bc-bcf0-4911ece9ee97');

    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const result = await res.json();
    setLoading(false);

    if (result.success) {
      setStatus('Your message has been sent successfully!');
      setForm({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } else {
      setStatus('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-between px-6 md:px-20 py-12 gap-10 bg-white text-black">
      {/* Left Side */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-5xl font-bold">
          Let’s work <span className="text-lime-500"><br />together</span>
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
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name *"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border-b border-gray-300 focus:outline-none py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="E-Mail Address *"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border-b border-gray-300 focus:outline-none py-2"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number *"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full border-b border-gray-300 focus:outline-none py-2"
          />
          <select
            name="subject"
            value={form.subject}
            onChange={handleChange}
            required
            className="w-full border-b border-gray-300 focus:outline-none py-2 bg-transparent"
          >
            <option value="">Select Subject</option>
            <option value="Support">Support</option>
            <option value="Inquiry">Inquiry</option>
            <option value="Feedback">Feedback</option>
          </select>
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 focus:outline-none p-3 h-32 resize-none"
          ></textarea>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="captcha" required />
            <label htmlFor="captcha" className="text-sm text-gray-600">I’m not a robot</label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-lime-500 text-black px-6 py-2 rounded-full font-medium hover:bg-lime-600 transition"
          >
            {loading ? 'Sending...' : 'Send a message'}
          </button>

          {status && (
            <p className="text-sm mt-2 text-green-600">{status}</p>
          )}
        </form>
      </div>
    </div>
  );
}
