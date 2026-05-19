import React, { useRef } from "react";

import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Send,
} from "lucide-react";

import emailjs from "@emailjs/browser";

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs
      .sendForm(
        "service_ft05y7p",
        "template_920bkxr",
        form.current,
        "TNihBN30omAHt3NOe"
      )

      .then(
        () => {
          alert("Message sent successfully.");
          form.current.reset();
        },

        () => {
          alert("Failed to send message.");
        }
      );
  };

  return (

    <section
      id="contact"
      data-aos="fade-up"
      data-aos-delay="400"
      className="
        relative
        text-white
        py-24 md:py-32
        px-4
      "
    >

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.4em] text-orange-400 text-xs md:text-sm mb-4">
            Contact
          </p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight">

            Let's
            <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
              {" "}Connect
            </span>

          </h2>

          <p className="text-gray-400 text-base md:text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Open to internships, full-time roles, collaborations,
            freelance opportunities, and interesting projects.
          </p>

        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div
            className="
              relative overflow-hidden

              rounded-3xl

              border border-white/10

              bg-white/[0.03]

              backdrop-blur-xl

              p-8 md:p-10
            "
          >

            {/* GLOW */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-70" />

            <div className="relative z-10">

              <h3 className="text-3xl font-bold mb-8">
                Contact Information
              </h3>

              <div className="flex flex-col gap-6">

                {/* EMAIL */}
                <div
                  className="
                    flex items-center gap-5

                    border border-white/10

                    rounded-2xl

                    bg-white/[0.03]

                    p-5

                    transition duration-300

                    hover:border-orange-400/30
                    hover:-translate-y-1
                  "
                >

                  <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-400/20 flex items-center justify-center">

                    <Mail className="text-orange-400" />

                  </div>

                  <div>

                    <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-1">
                      Email
                    </p>

                    <a
                      href="mailto:prabhakar.lakshya007@gmail.com"
                      className="text-white hover:text-orange-300 transition"
                    >
                      prabhakar.lakshya007@gmail.com
                    </a>

                  </div>

                </div>

                {/* PHONE */}
                <div
                  className="
                    flex items-center gap-5

                    border border-white/10

                    rounded-2xl

                    bg-white/[0.03]

                    p-5

                    transition duration-300

                    hover:border-orange-400/30
                    hover:-translate-y-1
                  "
                >

                  <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-400/20 flex items-center justify-center">

                    <Phone className="text-orange-400" />

                  </div>

                  <div>

                    <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-1">
                      Phone
                    </p>

                    <p className="text-white">
                      +91 9354672122
                    </p>

                  </div>

                </div>

                {/* LOCATION */}
                <div
                  className="
                    flex items-center gap-5

                    border border-white/10

                    rounded-2xl

                    bg-white/[0.03]

                    p-5

                    transition duration-300

                    hover:border-orange-400/30
                    hover:-translate-y-1
                  "
                >

                  <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-400/20 flex items-center justify-center">

                    <MapPin className="text-orange-400" />

                  </div>

                  <div>

                    <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-1">
                      Location
                    </p>

                    <p className="text-white">
                      New Delhi, India
                    </p>

                  </div>

                </div>

                {/* LINKEDIN */}
                <div
                  className="
                    flex items-center gap-5

                    border border-white/10

                    rounded-2xl

                    bg-white/[0.03]

                    p-5

                    transition duration-300

                    hover:border-orange-400/30
                    hover:-translate-y-1
                  "
                >

                  <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-400/20 flex items-center justify-center">

                    <Linkedin className="text-orange-400" />

                  </div>

                  <div>

                    <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-1">
                      LinkedIn
                    </p>

                    <a
                      href="https://www.linkedin.com/in/lakshya-prabhakar/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-orange-300 transition"
                    >
                      linkedin.com/in/lakshya-prabhakar
                    </a>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* CONTACT FORM */}
          <div
            className="
              relative overflow-hidden

              rounded-3xl

              border border-white/10

              bg-white/[0.03]

              backdrop-blur-xl

              p-8 md:p-10
            "
          >

            {/* GLOW */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-70" />

            <div className="relative z-10">

              <h3 className="text-3xl font-bold mb-8">
                Send a Message
              </h3>

              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col gap-6"
              >

                {/* NAME */}
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="
                    w-full

                    rounded-2xl

                    border border-white/10

                    bg-white/[0.03]

                    px-5 py-4

                    text-white

                    outline-none

                    transition duration-300

                    focus:border-orange-400/40
                  "
                />

                {/* EMAIL */}
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="
                    w-full

                    rounded-2xl

                    border border-white/10

                    bg-white/[0.03]

                    px-5 py-4

                    text-white

                    outline-none

                    transition duration-300

                    focus:border-orange-400/40
                  "
                />

                {/* MESSAGE */}
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Your Message"
                  required
                  className="
                    w-full

                    rounded-2xl

                    border border-white/10

                    bg-white/[0.03]

                    px-5 py-4

                    text-white

                    outline-none

                    resize-none

                    transition duration-300

                    focus:border-orange-400/40
                  "
                />

                {/* BUTTON */}
                <button
                  type="submit"
                  className="
                    flex items-center justify-center gap-3

                    bg-orange-500

                    hover:bg-orange-400

                    text-white
                    font-semibold

                    rounded-2xl

                    py-4

                    transition duration-300

                    hover:scale-[1.02]
                  "
                >

                  <Send size={20} />

                  Send Message

                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}