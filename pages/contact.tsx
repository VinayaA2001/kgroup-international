"use client";

import { useState } from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Simple mailto link (no SMTP needed)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:shinuirfank@gmail.com?subject=Message from ${formData.name}&body=${formData.message} (From: ${formData.email})`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <h1 className="text-3xl font-bold text-center mb-4">Contact Us</h1>
      <p className="text-gray-600 text-center mb-12">
        Reach out to us for inquiries, support, or feedback.
      </p>

      {/* Contact Info */}
      <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
        {/* Office */}
        <a
          href="https://maps.google.com/?q=Siraj Bypass Road, Koduvally, Kerala"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white shadow-md p-6 rounded-xl flex flex-col items-center hover:shadow-lg transition"
        >
          <FiMapPin className="text-red-600 text-3xl mb-3" />
          <h3 className="font-semibold">Office</h3>
          <p className="text-gray-600 text-center text-sm mt-2">
            Siraj Bypass Road, Koduvally Bus Stand Ln, <br />
            near Thanal Dialysis Centre, Kerala 673585, India
          </p>
        </a>

        {/* Phone */}
        <a
          href="tel:+91871448040"
          className="bg-white shadow-md p-6 rounded-xl flex flex-col items-center hover:shadow-lg transition"
        >
          <FiPhone className="text-red-600 text-3xl mb-3" />
          <h3 className="font-semibold">Phone</h3>
          <p className="text-gray-600 mt-2">+91 87144 48040</p>
        </a>

        {/* Email */}
        <a
          href="mailto:shinuirfank@gmail.com"
          className="bg-white shadow-md p-6 rounded-xl flex flex-col items-center hover:shadow-lg transition"
        >
          <FiMail className="text-red-600 text-3xl mb-3" />
          <h3 className="font-semibold">Email</h3>
          <p className="text-gray-600 mt-2">shinuirfank@gmail.com</p>
        </a>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-6 max-w-2xl mx-auto"
      >
        <h2 className="text-xl font-bold mb-4">Send us a Message</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        <button
          type="submit"
          className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition w-full"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
