import { useState } from "react";
import axios from "axios";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contact", form);
      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Something went wrong!");
    }
  };

  return (
    <section id="contact" className="bg-[#070513] text-white py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        {/* Left Side */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Contact Me
          </h2>

          <p className="text-zinc-400 mb-8">
            Feel free to reach out for collaborations or freelance projects 👋
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 text-2xl text-emerald-400">

            <a
              href="mailto:jegatheesh.stackup@gmail.com"
              className="hover:text-white transition"
            >
              <FaEnvelope />
            </a>

            <a
              href="tel:+919788733875"
              className="hover:text-white transition"
            >
              <FaPhoneAlt />
            </a>

            <a
              href="https://wa.me/919788733875"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://github.com/jegavni"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/jegatheeshchandra"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://instagram.com/jegatheesh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaInstagram />
            </a>

          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-4 bg-zinc-900 p-8 rounded-xl border border-zinc-800"
        >
          <input
            value={form.name}
            placeholder="Your Name"
            className="bg-zinc-800 p-3 rounded outline-none focus:ring-2 focus:ring-emerald-500"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            value={form.email}
            placeholder="Your Email"
            type="email"
            className="bg-zinc-800 p-3 rounded outline-none focus:ring-2 focus:ring-emerald-500"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <textarea
            value={form.message}
            placeholder="Your Message"
            rows="4"
            className="bg-zinc-800 p-3 rounded outline-none focus:ring-2 focus:ring-emerald-500"
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
          />

          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 text-black py-3 rounded font-medium transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}