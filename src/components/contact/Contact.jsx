import React from "react";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" data-aos="fade-up" data-aos-delay="400" className="text-white py-20">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg text-gray-300 mb-10">
          Feel free to reach out for opportunities, collaborations, or just to connect!
        </p>

        <div className="flex flex-col gap-6 items-center">
          <div className="flex items-center gap-4">
            <Mail className="text-orange-500" />
            <a href="mailto:prabhakar.lakshya007@gmail.com">
  <span className="text-lg underline">prabhakar.lakshya007@gmail.com</span>
</a>

          </div>
          <div className="flex items-center gap-4">
            <Phone className="text-orange-500" />
            <span className="text-lg">+91 9354672122</span>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-orange-500" />
            <span className="text-lg">New Delhi, India</span>
          </div>
          <div className="flex items-center gap-4">
            <Linkedin className="text-orange-500" />
            <a
              href="https://www.linkedin.com/in/lakshya-prabhakar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg underline hover:text-orange-500"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
