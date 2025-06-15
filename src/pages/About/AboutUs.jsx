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
    <div
      className="min-h-screen text-white font-sans"
      style={{
        backgroundImage: `linear-gradient(rgba(27, 24, 47, 0.8), rgba(27, 24, 47, 0.8)), url('https://images.unsplash.com/photo-1607082349250-6728e485e3bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
        backgroundColor: "#2B2A40",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Hero Section */}
      <section className="relative h-72 bg-cover bg-center flex items-center justify-center bg-[#1B182F]/90 backdrop-blur-md">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white">
          About Our Journey
        </h1>
      </section>

      {/* Company Info */}
      <section className="py-16 px-6 md:px-20 lg:px-32 bg-[#1C1B2A] text-[#B3B3C1]">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-white">Who We Are</h2>
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
      <section className="bg-[#1B182F] py-16 px-6 md:px-20 lg:px-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Satisfied Customers", value: "98,000+" },
            { label: "Total Orders", value: "150,000+" },
            { label: "Countries Served", value: "50+" },
            { label: "Team Members", value: "20+" },
          ].map((stat, i) => (
            <div key={i} className="bg-[#2F2E41] p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#7D5FFF]">
                {stat.value}
              </h3>
              <p className="text-[#B3B3C1] mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 md:px-20 lg:px-32 bg-[#1C1B2A]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10 text-white">
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
                  <h3 className="text-2xl font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="text-[#B3B3C1] text-lg">{member.role}</p>
                  <p className="mt-2 text-[#9A99A9] max-w-xl">
                    {`Hi, I'm ${member.name}, working as a ${member.role}. I contribute to building scalable solutions, improving user experiences, and keeping our application fast and reliable.`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-6 md:px-20 lg:px-32 bg-[#1B182F]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12 text-white">
            Our History
          </h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 flex md:flex-col justify-center md:items-start space-y-1 md:space-y-8">
              {timeline.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedYear(item.year)}
                  className={`inline px-4 py-2 cursor-pointer rounded font-semibold transition ${
                    selectedYear === item.year
                      ? "text-[#7D5FFF] bg-[#2F2E41]"
                      : "text-[#B3B3C1] hover:text-[#7D5FFF]"
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
                  <p className="text-[#B3B3C1] text-lg">
                    {selectedTimelineItem.content}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 px-6 md:px-20 lg:px-32 bg-[#1C1B2A]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10 text-white">
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
              <div key={i} className="bg-[#2F2E41] p-6 rounded-xl shadow">
                <p className="text-[#B3B3C1] italic">“{item.review}”</p>
                <h4 className="mt-4 text-[#7D5FFF] font-semibold">
                  — {item.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-20 lg:px-32 text-center bg-[#1B182F]">
        <h2 className="text-3xl font-semibold mb-4 text-white">
          Stay Connected With Us
        </h2>
        <p className="mb-8 text-[#9A99A9] max-w-xl mx-auto">
          Subscribe to our newsletter and become a part of our growing family.
          Get access to exclusive offers, inspiring stories, and early-bird
          deals!
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full max-w-md p-3 rounded-l-full bg-[#2F2E41] text-white placeholder-[#9A99A9] border border-[#3D3C50] focus:outline-none"
          />
          <button className="px-6 bg-[#7D5FFF] text-white font-semibold rounded-r-full hover:bg-[#6A4DE0] transition">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
