import { useState } from "react";
import "./About.css";

const AboutUs = () => {
  const [selectedYear, setSelectedYear] = useState("2010");

  const teamMembers = [
    {
      name: "Mitesh Amin",
      role: "Full Stack Developer",
      image: "https://wallpapercave.com/wp/wp9426322.jpg",
      description:
        "Mitesh is our versatile Full Stack Developer, specializing in building robust and scalable web applications. He excels at connecting the dots between front-end user interfaces and back-end logic, ensuring seamless functionality and high performance.",
    },
    {
      name: "Jimmy",
      role: "Full Stack Developer",
      image:
        "https://th.bing.com/th/id/OIP.sUNbRqgCvXXiSTWS6KOigQHaNK?rs=1&pid=ImgDetMain",
      description:
        "Jimmy is a dedicated Full Stack Developer with a passion for creating efficient and user-friendly solutions. His expertise spans across various technologies, allowing him to contribute significantly to every phase of application development.",
    },
    {
      name: "Asmita Patel",
      role: "Frontend Developer",
      image:
        "https://wallpapercrafter.com/desktop/384740-Anime-Chainsaw-Man-Phone-Wallpaper.jpg",
      description:
        "Asmita is our talented Frontend Developer, focused on crafting engaging and intuitive user experiences. She brings designs to life with clean, efficient code and a keen eye for detail, ensuring our interfaces are both beautiful and functional.",
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
        "ECommerce graduates from Y Combinator under the mentorship of Paul Graham. We became one of YC’s top-performing startups.",
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
      className="min-h-screen font-sans"
      style={{
        backgroundColor: "var(--primary-bg)",
        color: "var(--text-light)",
      }}
    >
      {/* Hero Section */}
      <section className="relative h-30 sm:h-72 flex items-center justify-center text-white">
        {/* Background image with opacity */}
        <div className="absolute inset-0 bg-[url('/images/about/map.png')] bg-cover opacity-50 "></div>

        {/* Overlay content */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            About Our Journey
          </h1>
        </div>
      </section>

      {/* Company Info */}
      <section
        className="py-16 px-6 md:px-20 lg:px-32"
        style={{ backgroundColor: "var(--input-bg)" }}
      >
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
            products.
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section
        className="py-16 px-6 md:px-20 lg:px-32"
        style={{
          backgroundColor: "var(--hero-bg)",
          color: "var(--primary-color)",
        }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 text-center">
          {[
            { label: "Satisfied Customers", value: "0" },
            { label: "Total Orders", value: "0" },
            { label: "Countries Served", value: "0" },
            { label: "Team Members", value: "0" },
          ].map((stat, i) => (
            <div
              key={i}
              className="
          p-6 rounded-lg shadow-lg cursor-pointer
          transition-all duration-300 ease-in-out
          transform hover:-translate-y-2 hover:shadow-xl hover:scale-105
          relative overflow-hidden group
        "
              style={{
                backgroundColor: "var(--input-bg)",
                border: "1px solid var(--border-color)",
              }}
            >
              <div
                className="absolute inset-0 border-2 rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ borderColor: "var(--highlight-color)" }}
              ></div>

              <h3
                className="text-2xl font-bold transition-colors duration-300 group-hover:text-white"
                style={{ color: "var(--highlight-color)" }} // Highlight color for the number
              >
                {stat.value}
              </h3>
              <p className="mt-2 text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section
        className="py-16 px-6 md:px-20 lg:px-32"
        style={{ backgroundColor: "var(--input-bg)" }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10 text-white">
            Meet Our Team
          </h2>
          {/* main content  */}
          <div className="my-[40px] md:my-[100px] flex flex-wrap justify-around">
            {teamMembers.map((member, index) => (
              <div className="card" key={index}>
                <div className="img-container">
                  <img src={member?.image} alt={member?.name} />
                </div>
                <div className="card-details">
                  <h2>{member?.name}</h2>
                  <p>{member?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section
        className="py-16 px-6 md:px-20 lg:px-32"
        style={{ backgroundColor: "var(--hero-bg)" }}
      >
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
                      ? "bg-[#1C1F26] text-[var(--highlight-color)]"
                      : "text-[var(--text-light)] hover:text-[var(--highlight-color)]"
                  }`}
                >
                  {item.year}
                </div>
              ))}
            </div>
            <div className="md:w-3/4 mt-10 md:mt-0 md:pl-16 space-y-6 text-center md:text-left">
              {selectedTimelineItem && (
                <div>
                  {selectedTimelineItem.image && (
                    <img
                      src={selectedTimelineItem.image}
                      alt={`Event ${selectedTimelineItem.year}`}
                      className="mb-4 rounded-lg shadow-md w-full max-w-xl m-auto md:mx-0"
                    />
                  )}
                  <p className="text-lg">{selectedTimelineItem.content}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section
        className="py-16 px-6 md:px-20 lg:px-32"
        style={{ backgroundColor: "var(--input-bg)" }}
      >
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
              <div
                key={i}
                className="p-6 rounded-xl shadow"
                style={{
                  backgroundColor: "var(--primary-bg)",
                  border: "1px solid var(--border-color)",
                }}
              >
                <p className="italic text-[var(--text-dark-light)]">
                  “{item.review}”
                </p>
                <h4 className="mt-4 font-semibold text-[var(--highlight-color)]">
                  — {item.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="py-16 px-6 md:px-20 lg:px-32 text-center"
        style={{ backgroundColor: "var(--hero-bg)" }}
      >
        <h2 className="text-3xl font-semibold mb-4 text-white">
          Stay Connected With Us
        </h2>
        <p className="mb-8 max-w-xl mx-auto text-[var(--text-dark-light)]">
          Subscribe to our newsletter and become a part of our growing family.
          Get access to exclusive offers, inspiring stories, and early-bird
          deals!
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full max-w-md p-3 rounded-l-full border border-[var(--border-color)] bg-[var(--input-bg)] text-white placeholder-[var(--text-dark-light)] focus:outline-none"
          />
          <button className="px-6 font-semibold rounded-r-full bg-[var(--primary-color)] text-[var(--button-text-color)] hover:bg-[var(--primary-hover)] transition cursor-pointer">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
