import React from 'react';
import {
  FaUserShield,
  FaUserNurse,
  FaPeopleCarry,
  FaLaptopCode,
  FaPlaneDeparture,
  FaCheckCircle,
  FaQuestionCircle
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Career = () => {
  return (
    <div className="bg-white text-black">
      {/* Header Section */}
      <section className="bg-[#d3b13f] text-white py-7 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Career Opportunities at Flynet Aviation</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          Explore promising careers in security, nursing, aviation, data entry, and more.
        </p>
      </section>

      {/* Job Categories Section */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-10 text-[#d3b13f]">Our Key Job Sectors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 border rounded-xl hover:shadow-lg">
            <FaUserShield className="text-4xl text-[#d3b13f] mx-auto mb-4" />
            <h3 className="font-bold text-xl">Security Services</h3>
            <p>Join as a security guard in corporate, residential, or event-based roles.</p>
          </div>
          <div className="p-6 border rounded-xl hover:shadow-lg">
            <FaUserNurse className="text-4xl text-[#d3b13f] mx-auto mb-4" />
            <h3 className="font-bold text-xl">Nursing</h3>
            <p>Opportunities for certified nurses in hospitals, clinics, and home care services.</p>
          </div>
          <div className="p-6 border rounded-xl hover:shadow-lg">
            <FaPeopleCarry className="text-4xl text-[#d3b13f] mx-auto mb-4" />
            <h3 className="font-bold text-xl">Ward Boy</h3>
            <p>Support roles in healthcare setups for patient assistance and hospital duties.</p>
          </div>
          <div className="p-6 border rounded-xl hover:shadow-lg">
            <FaLaptopCode className="text-4xl text-[#d3b13f] mx-auto mb-4" />
            <h3 className="font-bold text-xl">Data Entry</h3>
            <p>Remote and office-based roles for skilled data entry professionals.</p>
          </div>
          <div className="p-6 border rounded-xl hover:shadow-lg">
            <FaPlaneDeparture className="text-4xl text-[#d3b13f] mx-auto mb-4" />
            <h3 className="font-bold text-xl">Aviation</h3>
            <p>Careers in private aviation for flight crew, ground staff, and logistics.</p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-[#d3b13f] mb-6">How We Work</h2>
          <p className="mb-6">At Flynet Aviation, we ensure a simple and transparent recruitment process:</p>
          <ul className="space-y-3 text-left max-w-2xl mx-auto">
            <li><FaCheckCircle className="inline mr-2 text-[#d3b13f]" /> Step 1: Apply online via our portal</li>
            <li><FaCheckCircle className="inline mr-2 text-[#d3b13f]" /> Step 2: Resume screening and shortlisting</li>
            <li><FaCheckCircle className="inline mr-2 text-[#d3b13f]" /> Step 3: Interview and assessment</li>
            <li><FaCheckCircle className="inline mr-2 text-[#d3b13f]" /> Step 4: Final placement and onboarding</li>
          </ul>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-4 bg-white text-center">
        <h2 className="text-2xl font-semibold text-[#d3b13f] mb-6">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-4 border rounded-xl">
            <p className="font-bold text-lg">Verified Employers</p>
            <p className="text-sm">Work only with licensed and trusted organizations worldwide.</p>
          </div>
          <div className="p-4 border rounded-xl">
            <p className="font-bold text-lg">Fast Placement</p>
            <p className="text-sm">We prioritize speed without compromising job quality or security.</p>
          </div>
          <div className="p-4 border rounded-xl">
            <p className="font-bold text-lg">Career Growth</p>
            <p className="text-sm">Opportunities to upgrade skills and grow in your career field.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-100 py-12 px-4">
        <h2 className="text-2xl font-semibold text-center text-[#d3b13f] mb-8">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div>
            <h4 className="font-bold flex items-center"><FaQuestionCircle className="text-[#d3b13f] mr-2" />How do I apply for a job?</h4>
            <p>Simply go to our “Apply Now” page, fill in your details, and submit your resume.</p>
          </div>
          <div>
            <h4 className="font-bold flex items-center"><FaQuestionCircle className="text-[#d3b13f] mr-2" />Do I need experience?</h4>
            <p>Some jobs require prior experience, but we also offer entry-level roles for beginners.</p>
          </div>
          <div>
            <h4 className="font-bold flex items-center"><FaQuestionCircle className="text-[#d3b13f] mr-2" />Can I apply from outside the UAE?</h4>
            <p>Yes, we accept applications globally, depending on employer criteria and visa options.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-10 text-center">
        <h2 className="text-2xl font-semibold">Ready to Start Your Career?</h2>
        <p className="mt-2">Submit your resume or contact us to find your perfect job match.</p>
        <div className='mt-4'>
            <Link to="/" className=" bg-[#d3b13f] text-black px-6 py-2 rounded hover:opacity-90">
          Apply Now
        </Link>
        </div>
      </section>
    </div>
  );
};

export default Career;
