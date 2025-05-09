import one from './assets/imgone.jpg'
import two from './assets/imgtwo.jpeg'
import three from './assets/imgthree.jpg'

const About = () => {
    return (
        <div className="px-6 md:px-20 py-12 space-y-20 text-gray-800 bg-[#F7F7F7]">
            {/* Top section */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-yellow-600 mb-4">ABOUT US</h2>
                    <p className="text-lg leading-7">
                        Flynet Aviation is a premier private aviation company that specializes in offering charter services to clients across the globe. The company is headquartered in the UAE, which is known for its strategic location and world-class aviation infrastructure. Flynet Aviation has positioned itself as a leader in the private aviation industry, providing safe, reliable, and affordable aviation solutions to its clients. Flynet Aviation’s services are tailored to meet the needs of a wide range of clients, including private charter, group travel, ticketing options as well as cargo forwarding.
                    </p>
                </div>
                <img src={one} alt="Pilot" className="w-full rounded-xl shadow-lg" />
            </div>

            {/* Middle card section */}
            <div className="bg-white rounded-xl  p-8 grid md:grid-cols-2 gap-10 items-start">
                <div className="space-y-6 text-lg leading-7">
                    <p>
                        The company’s group charter service is designed to provide an affordable way for groups to travel in style and comfort. Whether it’s for a corporate event or a family vacation, Flynet Aviation’s group charter service can accommodate groups of any size.
                    </p>
                    <p>
                        The VIP charter service offered by Flynet Aviation is designed to provide a luxurious and personalized travel experience for clients who demand the highest level of service. From private lounges to customized meals, Flynet Aviation’s VIP charter service provides the ultimate travel experience. The company’s VIP service is the epitome of luxury travel, with tailored experiences designed to meet the client’s every need.
                    </p>
                    <p>
                        Flynet Aviation’s cargo service provides reliable and efficient transportation of cargo, including time-sensitive and temperature-controlled shipments. With a climate-controlled storage facility in Dubai, UAE, Flynet Aviation ensures that cargo is transported safely and securely, both domestically and internationally. The company’s cargo service is equipped with a range of aircraft, including cargo planes to transport cargo of all sizes.
                    </p>
                    <p>
                        Flynet Aviation also provides ticketing options, offering convenient and discounted bookings for business and first-class travel. Unlock the benefits of luxury travel and elevate your journey with our ticketing services.
                    </p>
                </div>
                <img src={two} alt="Client Boarding Jet" className="w-full rounded-xl shadow-lg" />
            </div>

            {/* Bottom section */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
                <img src={three} alt="Jet in Air" className="w-full rounded-xl shadow-lg" />
                <div className="text-lg leading-7 space-y-4">
                    <p>
                        Flynet Aviation’s fleet is one of the most diverse and comprehensive in the private aviation industry. The company’s fleet ranges from light jets, midsize jets to heavy jets. Each aircraft is well-maintained and equipped with modern amenities to provide a comfortable and safe travel experience. Flynet Aviation’s team of expert pilots and staff ensure that every flight is safe and enjoyable.
                    </p>
                    <p>
                        Flynet Aviation is committed to providing the highest level of customer service. The company’s staff is available 24/7 to assist clients with any questions or concerns they may have. Flynet Aviation’s team of professionals is dedicated to ensuring that clients have a safe and enjoyable travel experience.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
