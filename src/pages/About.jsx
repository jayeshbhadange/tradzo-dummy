import React from "react";

const About = () => {
  return (
    <section className="about-section py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

        {/* Our Story */}
        <div className="mb-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src="https://media.istockphoto.com/id/1663279091/photo/two-young-colleagues-working-together-at-modern-office.webp?b=1&s=170667a&w=0&k=20&c=k8oGb1ssRTsxXHyvQerLU8f82jLqyR9162TxpOQ2sBs="
              alt="Our Story"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-lg leading-relaxed">
              Our company was founded with the vision of revolutionizing the way
              people approach trading and investment. With a passionate team of
              experts in finance and technology, we aim to provide innovative
              solutions that empower individuals to make informed decisions and
              achieve their financial goals.
            </p>
          </div>
        </div>

        {/* Our Mission */}
        <div className="mb-12 flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src="https://images.spiceworks.com/wp-content/uploads/2021/12/14155816/workplace_5c10f731a2e9c.jpg"
              alt="Our Mission"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              Our mission is to democratize access to high-quality trading
              insights and tools, enabling everyone to navigate the financial
              markets with confidence. We strive to create an inclusive platform
              that caters to both beginners and experienced traders alike.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSElSSSn59Y4EoNzlwD3tL0aqfhVsYYCCI4fw&s"
              alt="Our Values"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc pl-6">
              <li className="mb-2 text-lg leading-relaxed">
                Transparency: We believe in being open and honest with our
                users, providing clear and accurate information at all times.
              </li>
              <li className="mb-2 text-lg leading-relaxed">
                Innovation: We continuously seek to improve and innovate,
                staying at the forefront of technology and finance.
              </li>
              <li className="mb-2 text-lg leading-relaxed">
                Empowerment: Our tools and resources are designed to empower our
                users, giving them the confidence to succeed.
              </li>
              <li className="mb-2 text-lg leading-relaxed">
                Community: We foster a supportive community where users can
                share knowledge and grow together.
              </li>
            </ul>
          </div>
        </div>

        {/* Our Team */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold mb-8">Our Team</h2>
          <div className="flex justify-center flex-wrap">
            {Array(3)
              .fill()
              .map((_, index) => (
                <div key={index} className="md:w-1/3 p-4">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD_rY8jz8CnKSUFfM3KX0nS8pr7dbOCYsz4Q&s"
                    alt={`Team Member ${index + 1}`}
                    className="w-full h-auto rounded-lg shadow-md mb-4"
                  />
                  <p className="text-lg font-medium">Web Developer</p>
                </div>
              ))}
          </div>
        </div>

        {/* Our Founder */}
        <div className="mb-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlg-YPZIb0jdbWvGAYemmPEW71UoQLA6cAcQ&s"
              alt="Our Founder"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-2xl font-semibold mb-4">Our Founder</h2>
            <p className="text-lg leading-relaxed">
              Our founder, a visionary in the world of finance and technology,
              started this company with the belief that everyone should have
              access to the tools and knowledge needed to succeed in trading.
              With a background in both industries, they have led the company to
              become a trusted platform for traders worldwide.
            </p>
          </div>
        </div>

        {/* Join Us */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Join Us on Our Journey
          </h2>
          <p className="text-lg leading-relaxed">
            We are constantly evolving and expanding our offerings. Whether you
            are a seasoned trader or just starting, we invite you to join us on
            our journey to make trading accessible and rewarding for everyone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;