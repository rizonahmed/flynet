import React from 'react';

const Contact = () => {
  return (
    <div>
      {/* Contact Us Section */}
      <section id="contact" className="bg-black text-white py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#d4af37] mb-8 text-center">
            Contact Us
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <form className="grid grid-cols-1 gap-4">
              <input
                className="p-3 bg-transparent text-white border border-white placeholder-white"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="p-3 bg-transparent text-white border border-white placeholder-white"
                type="text"
                placeholder="Phone"
              />
              <input
                className="p-3 bg-transparent text-white border border-white placeholder-white"
                type="email"
                placeholder="Email"
              />
              <input
                className="p-3 bg-transparent text-white border border-white placeholder-white"
                type="text"
                placeholder="Subject"
              />
              <textarea
                className="p-3 bg-transparent text-white border border-white placeholder-white"
                rows="5"
                placeholder="Your Message"
              ></textarea>
              <div className="text-center">
                <button className="bg-[#d4af37] text-black px-6 py-2 font-medium hover:opacity-90">
                  Submit
                </button>
              </div>
            </form>

            {/* Contact Details & Map */}
            <div className="flex flex-col space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-[#d4af37] mb-2">Our Office</h3>
                <p>B-6/2 Ghansoli THANE WEST, MUMBAI, MAHARASHTRA 400701</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#d4af37] mb-2">Email</h3>
                <p>Skycareerinnivation.hrteam@gmail.com</p>
              </div>
              <div className="border border-white">
                <iframe
                  title="Google Map"
                  className="w-full h-64"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.876705147473!2d72.99347227481698!3d19.115250482090074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1b216e0bb8d%3A0x85b3c6948936930e!2sGhansoli%2C%20Navi%20Mumbai%2C%20Maharashtra%20400701%2C%20India!5e0!3m2!1sen!2sin!4v1715241288905!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
