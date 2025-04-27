'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function ReserveMink() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    setLoading(true);

    const data = new FormData();
    data.append('access_key', '9dd6aae1-452f-459f-8cd2-f6d595cc9558');
    data.append('subject', 'Mink Reservation');
    data.append('from_name', formData.name);
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: data,
    });

    const result = await res.json();
    setLoading(false);

    if (result.success) {
      setStatus('Reservation request submitted successfully!');
      setFormData({ name: '', email: '', phone: '' });
    } else {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="relative min-h-screen w-full text-white overflow-hidden">
      {/* Full Background Image */}
      <Image
        src="/reserveCar.png"
        alt="Car Background"
        fill
        className="object-cover object-right"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-start px-6 md:px-24 py-10">
        <div className="w-full max-w-xl bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-10 rounded-lg shadow-xl">
          {!showForm ? (
            <>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-white">
                Reserve Your Own <br />
                Customised Mink In <br />
                Europe And India
              </h1>
              <p className="text-sm text-gray-300 mb-6">
                *Base Model Starting At $7500
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="border px-6 py-3 text-white hover:bg-white hover:text-black transition"
              >
                Reserve Now For $200
              </button>
              <p className="text-xs text-gray-300 mt-3">
                *Reserve With Fully Refundable
              </p>
            </>
          ) : (
            <>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold underline text-white">
                  Reserve Now For Fully Refundable $200
                </h2>
                <button
                  onClick={() => {
                    setShowForm(false);
                    setStatus('');
                  }}
                  className="text-sm text-gray-300 hover:underline"
                >
                  ← Back
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm mb-1 text-gray-200">Your Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-gray-400 text-white focus:outline-none py-1"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-gray-200">E-Mail Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-gray-400 text-white focus:outline-none py-1"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-gray-200">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-gray-400 text-white focus:outline-none py-1"
                  />
                </div>
                <p className="text-xs text-gray-300 mt-4 leading-snug">
                  By submitting this form, you agree to Mink’s reservation terms and privacy policy. 
                  And consent to receive updates from Mink or its service providers.
                </p>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-white text-black mt-4 w-full py-2 font-semibold hover:bg-gray-200 transition"
                >
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
                {status && (
                  <p className="text-sm mt-2 text-lime-400">{status}</p>
                )}
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
