import { useState } from "react";

const AboutUs = () => {
  const [selectedYear, setSelectedYear] = useState("2010");

  const teamMembers = [
    {
      name: "Mitesh Amin",
      role: "Full Stack Developer",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Mitesh",
      direction: "left",
    },
    {
      name: "Jimmy",
      role: "Full Stack Developer",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Jimmy",
      direction: "right",
    },
    {
      name: "Asmita Patel",
      role: "Frontend Developer",
      image: "https://api.dicebear.com/7.x/adventurer/svg?seed=Asmita",
      direction: "left",
    },
  ];

  const timeline = [
    {
      year: "2010",
      content:
        "Our idea was born with a vision to make online shopping more personalized and trustworthy.",
      image: "https://picsum.photos/id/1/400/200",
    },
    {
      year: "2011",
      content:
        "ECommerce graduates from the prestigious Y Combinator startup accelerator under the mentorship of Paul Graham and the YC Partnership. Vidyard goes on to become one of Y Combinator’s top companies.",
      image: "https://picsum.photos/id/2/400/200",
    },
    {
      year: "2014",
      content:
        "With growing customer trust, we expanded our operations and added secure payment options.",
      image: "https://picsum.photos/id/3/400/200",
    },
    {
      year: "2020",
      content:
        "We scaled globally, introducing multilingual support and AI-based product recommendations.",
      image: "https://picsum.photos/id/4/400/200",
    },
  ];

  const selectedTimelineItem = timeline.find(
    (item) => item.year === selectedYear
  );

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-72 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3434539/pexels-photo-3434539.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold text-center">
            About Our Journey
          </h1>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 px-6 md:px-20 lg:px-32 bg-white text-gray-800">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl font-semibold">Who We Are</h2>
          <p className="text-lg leading-relaxed">
            At E-Commerce, we’re more than just a store — we are a bridge
            between technology and trust. From curated products to responsive
            support, our mission is to offer a seamless shopping experience
            you’ll love.
          </p>
          <p className="text-lg leading-relaxed">
            With innovation at our core, we aim to empower our customers through
            modern solutions, ethical practices, and a customer-first mindset.
          </p>
          <p className="text-lg leading-relaxed">
            Our platform is designed with simplicity and security in mind,
            giving our customers peace of mind while shopping for their favorite
            products. Every transaction is a step forward in building long-term
            trust and satisfaction.
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-gray-100 py-16 px-6 md:px-20 lg:px-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Satisfied Customers", value: "98,000+" },
            { label: "Total Orders", value: "150,000+" },
            { label: "Countries Served", value: "50+" },
            { label: "Team Members", value: "20+" },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-indigo-600">
                {stat.value}
              </h3>
              <p className="text-gray-700 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 md:px-20 lg:px-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Meet Our Team
          </h2>
          <div className="space-y-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row ${
                  member.direction === "right" ? "md:flex-row-reverse" : ""
                } items-center md:items-start gap-10`}
              >
                <img
                  src={member.image}
                  alt="Profile"
                  className="w-32 h-32 rounded-full shadow-md"
                />
                <div>
                  <h3 className="text-2xl font-semibold">{member.name}</h3>
                  <p className="text-gray-600 text-lg">{member.role}</p>
                  <p className="mt-2 text-gray-500 max-w-xl">
                    {`Hi, I'm ${member.name}, working as a ${member.role}. I contribute to building scalable solutions, improving user experiences, and keeping our application fast and reliable.`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-6 md:px-20 lg:px-32 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Our History
          </h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 flex md:flex-col justify-center md:items-start space-y-1 md:space-y-8">
              {timeline.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedYear(item.year)}
                  className={`inline px-4 py-2 cursor-pointer rounded  font-semibold transition ${
                    selectedYear === item.year
                      ? "text-[#3d3c50] shadow-md"
                      : " text-indigo-600"
                  }`}
                >
                  {item.year}
                </div>
              ))}
            </div>
            <div className="md:w-3/4 mt-10 md:mt-0 md:pl-16 space-y-6 text-center md:text-justify">
              {selectedTimelineItem && (
                <div>
                  {selectedTimelineItem.image && (
                    <img
                      src={selectedTimelineItem.image}
                      alt={`Event ${selectedTimelineItem.year}`}
                      className="mb-4 rounded-lg shadow-md w-full max-w-xl m-auto md:mx-0"
                    />
                  )}
                  <p className="text-gray-600 text-lg">
                    {selectedTimelineItem.content}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 px-6 md:px-20 lg:px-32 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">
            What Our Customers Say
          </h2>
          <div className="space-y-10">
            {[
              {
                name: "Priya S.",
                review:
                  "Absolutely amazing experience! Fast delivery and great product quality. I’ll definitely order again!",
              },
              {
                name: "Rakesh V.",
                review:
                  "Customer support is top-notch. They helped me with my refund quickly and politely. Highly recommend!",
              },
              {
                name: "Nina M.",
                review:
                  "Love the variety and prices. This is my go-to store now for all essentials.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                <p className="text-gray-700 italic">“{item.review}”</p>
                <h4 className="mt-4 text-indigo-600 font-semibold">
                  — {item.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-20 lg:px-32 text-center bg-white">
        <h2 className="text-3xl font-semibold mb-4">Stay Connected With Us</h2>
        <p className="mb-8 text-gray-600 max-w-xl mx-auto">
          Subscribe to our newsletter and become a part of our growing family.
          Get access to exclusive offers, inspiring stories, and early-bird
          deals!
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full max-w-md p-3 rounded-l-full border border-gray-300 focus:outline-none"
          />
          <button className="px-6 bg-indigo-600 text-white font-semibold rounded-r-full hover:bg-indigo-500 transition">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
