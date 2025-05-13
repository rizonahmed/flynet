import React from 'react';
import { FaDollarSign, FaGlobe, FaLaptopCode, FaPeopleCarry, FaSnowflake, FaTools, FaUserNurse, FaUserShield } from 'react-icons/fa';

const Extra = () => {
  return (
    <div className="bg-white text-[#2b2b2b] font-sans">
      {/* Our Services Section */}
      <section className="bg-[#f7f7f7] py-14"
      >
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-2xl text-left md:text-3xl font-semibold text-[#d4af37] mb-2">OUR SERVICES</h2>
          <p className="text-lg text-left mb-10">Sky Career Aviation offers the following services:</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: 'Security Guard',
                image: 'https://www.securitymagazine.com/ext/resources/images/security-guard-freepik.jpg?1624490387',
              },
              {
                name: 'Nursing',
                image: 'https://media.istockphoto.com/id/495479586/photo/two-young-nurses-on-the-ward.jpg?s=612x612&w=0&k=20&c=mdToKrwiiPG3Q6kphft0ZuMEpEX1vjPuEkuYkFQU5lQ=',
              },
              {
                name: 'Data Entry',
                image: 'https://sheetcast.com/media/dcwhmwb3/281-image1.jpg',
              },
              {
                name: 'Aviation',
                image: 'https://blog.wego.com/wp-content/uploads/fly-red-sea-saudi-first-sea-plane-featured.webp',
              },
            ].map((service, i) => (
              <div key={i} className="bg-transparent shadow-md p-4 rounded text-center font-medium text-lg">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-52 object-cover rounded mb-3"
                />
                {service.name}
              </div>
            ))}
          </div>
        </div>

        <div className="pt-20 w-11/12 mx-auto text-gray-400">
          <hr />
        </div>
      </section>


      {/* Our Fleet Section */}
     <section className="py-20 bg-cover bg-center bg-no-repeat relative bg-[#f7f7f7]">
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-white/80"></div>

  <div className="relative max-w-5xl mx-auto text-center px-6 z-10">
    <h2 className="text-3xl md:text-4xl font-semibold text-[#3B9DF8] mb-6">
      CAREER OPPORTUNITIES AT SKY CAREER AVIATION
    </h2>

    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
      Sky Career Aviation is more than just a recruitment platform—we’re a bridge between skilled individuals and life-changing job opportunities both in Bangladesh and abroad. Whether you're just starting out or looking to expand your career globally, we’re here to guide you every step of the way.
    </p>

    <p className="text-lg text-gray-700 mb-10 leading-relaxed">
      Our mission is to empower people by providing reliable and transparent access to professional roles in essential service industries. With growing demand across security, healthcare, aviation, and administrative sectors, we open the doors to a better future—one job at a time.
    </p>

    <div className="text-left">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Available Job Categories:</h3>
      <ul className="text-gray-800 text-base mb-10 list-disc list-inside leading-7">
        <li><strong>Security Guard Jobs</strong> – Trained professionals for institutions, companies, and personal safety.</li>
        <li><strong>Ward Boy Jobs</strong> – Providing patient care assistance in hospitals, clinics, and healthcare centers.</li>
        <li><strong>Nursing Jobs</strong> – Opportunities for certified nurses in hospitals, elderly homes, and international placements.</li>
        <li><strong>Aviation Jobs</strong> – Including cabin crew, ticketing staff, ground support, and cargo handlers.</li>
        <li><strong>Data Entry Jobs</strong> – Flexible typing/data roles suitable for both remote and office-based work environments.</li>
      </ul>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
      <ul className="text-gray-700 text-base mb-10 list-disc list-inside leading-7">
        <li>Verified job listings from trusted local & international partners</li>
        <li>Step-by-step support during the application process</li>
        <li>Opportunities for both freshers and experienced professionals</li>
        <li>Guidance on interview preparation, documentation & travel (if abroad)</li>
        <li>Focus on ethical recruitment and worker protection</li>
      </ul>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Important Notes:</h3>
      <ul className="text-gray-700 text-base mb-10 list-disc list-inside leading-7">
        <li>Some positions may require prior training or certifications</li>
        <li>Salaries, benefits, and work conditions vary by job & destination</li>
        <li>Always confirm the job details and contract terms before accepting offers</li>
      </ul>

      <p className="text-lg font-medium text-gray-800 mb-8 leading-relaxed">
        We believe in your potential. Let Sky Career Aviation be your trusted partner in building a stable, secure, and prosperous career.
      </p>
    </div>

    <a
      href="#book"
      className="inline-block bg-[#3B9DF8] hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all"
    >
      Apply Now
    </a>
  </div>
</section>


      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[#d4af37] mb-4">HOW IT WORKS</h2>
          <p className="text-gray-600 text-lg mb-12">
            Sky Career Aviation makes it simple to apply for your dream job. Just follow these 4 easy steps:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
            {[
              {
                step: '1. Browse Jobs',
                desc: 'Explore our list of available jobs in security, nursing, data entry, aviation, and more.',
                icon: '🧭',
              },
              {
                step: '2. Submit Your Details',
                desc: 'Fill out the online form with accurate personal and professional information.',
                icon: '📝',
              },
              {
                step: '3. Get Verified',
                desc: 'Our team will review your information and contact you for further verification if needed.',
                icon: '✅',
              },
              {
                step: '4. Start Your Career',
                desc: 'Once approved, you’ll be connected with employers and can start your new journey!',
                icon: '🚀',
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded shadow-md hover:shadow-lg transition bg-[#f9f9f9]">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#1e1e1e] mb-2">{item.step}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* About Section */}
      <section className="bg-[#f7f7f7] py-14">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#d4af37] mb-4">ABOUT US</h2>
            <p className="text-lg leading-relaxed">
              At Sky Career Aviation, we go beyond the skies. While we are proud to be a premier private aviation company based in the UAE—offering safe, reliable, and affordable travel solutions—we also connect people to life-changing career opportunities. Leveraging our strategic location and world-class infrastructure, we now support global job seekers in aviation, nursing, data entry, and security sectors.

              Whether you're a licensed pilot, a skilled nurse, a detail-oriented data entry professional, or a dedicated security expert, Sky Career Aviation is committed to guiding you toward your next career destination. Our mission is to bridge talent with opportunity—reliably, efficiently, and globally.
            </p>
            <button className="mt-4 px-4 py-2 border border-black text-black hover:bg-black hover:text-white transition">
              Know More
            </button>
          </div>
          <div>
            <img
              src="https://media.istockphoto.com/id/520874874/photo/futuristic-about-us-concept-on-hi-tech-touchscreen.jpg?s=612x612&w=0&k=20&c=SeWhnZQFV_yPQi9PTVfNCiiRTZttJWYfThDWg9IHia0="
              alt=""
            />
          </div>
        </div>
      </section>


      {/* Mission & Vision Section */}
      <section className="bg-[#1e1e1e] py-12 text-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-semibold text-[#d4af37] mb-2">Mission  <br /> & Vision</h2>
          </div>
          <p>
            Sky Career Aviation is dedicated to empowering individuals by connecting them with meaningful job opportunities across aviation, nursing, data entry, ward services, and security sectors. Our mission is to provide a trusted platform where job seekers and employers can find each other efficiently—ensuring reliability, transparency, and success for both. <br />
            To become a leading global job solutions provider, recognized for our commitment to quality, safety, and customer satisfaction. Sky Career Aviation envisions a world where skilled professionals in aviation, healthcare, administration, and security find their ideal roles with ease—building better futures and stronger communities.
          </p>
        </div>
      </section>




      <section className="bg-white py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#d3b13f] mb-8">Why Sky Career Aviation?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto text-center">
          <div className="flex flex-col items-center space-y-2">
            <FaUserShield className="text-4xl text-[#d3b13f]" />
            <p className="font-bold">Trusted Security Staffing</p>
            <p className="text-sm">Providing trained and verified security guards for various sectors</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <FaUserNurse className="text-4xl text-[#d3b13f]" />
            <p className="font-bold">Professional Nursing Support</p>
            <p className="text-sm">Connecting hospitals and clinics with skilled nursing professionals</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <FaPeopleCarry className="text-4xl text-[#d3b13f]" />
            <p className="font-bold">Reliable Ward Assistance</p>
            <p className="text-sm">Supplying trained ward boys and hospital aides for patient care</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <FaLaptopCode className="text-4xl text-[#d3b13f]" />
            <p className="font-bold">Data Entry & Aviation Jobs</p>
            <p className="text-sm">Offering roles in aviation and data entry across local and international hubs</p>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="bg-[#f7f7f7] py-14">
        <h1 className="text-center text-4xl pb-8 font-[500] text-[#d3b13f]">Safety</h1>

        <div className="max-w-7xl mx-auto lg:flex justify-center gap-10 px-4 items-center">

          {/* Left: Image */}
          <div className="w-full h-full">
            <img
              src="https://silicongroup1.com/wp-content/uploads/2023/10/EC_Data_Security_Lock_750.jpg"
              alt="Pilot"
              className="w-full h-[400px] object-cover rounded-xl shadow-md"
            />
          </div>

          {/* Right: Text */}
          <div className="bg-black p-11 shadow-lg rounded-sm md:w-3/5 mt-5 lg:-ml-28">
            <h3 className="text-2xl font-semibold text-[#d4af37] mb-4">YOUR SAFETY IS OUR TOP PRIORITY</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              At Sky Career Aviation, safety is our top priority—not just in aviation, but in every job we provide. Whether it’s a security guard ensuring public protection, a nurse handling critical care, a ward boy assisting patients, or a data entry professional managing sensitive information, we make sure every candidate is properly trained and aware of workplace safety standards.
            </p>
          </div>

        </div>
      </section>



      {/* Book Your Flight Section */}
      {/* Contact Us Section */}
      <section id='contact' className="bg-black text-white py-14">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#d4af37] mb-8 text-center">Contact Us</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              className="p-3 bg-transparent text-white border border-white placeholder-white md:col-span-2"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </form>
          <div className="mt-6 text-center">
            <button className="bg-[#d4af37] text-black px-6 py-2 font-medium hover:opacity-90">
              Submit
            </button>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Extra;
