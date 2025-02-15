import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Glassmorphism Card */}
        <div className="bg-white/30 backdrop-blur-lg rounded-lg shadow-xl p-8 sm:p-12 border border-white/20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            About Us
          </h1>
          <p className="text-lg text-gray-700 mb-8 text-center">
            At <span className="font-semibold text-blue-600">Cysec788</span>, we are dedicated to protecting your digital world. With cutting-edge technology and a team of cybersecurity experts, we provide robust solutions to safeguard your business from cyber threats.
          </p>

          {/* Mission and Vision Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            {/* Mission */}
            <div className="bg-white/40 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700">
                To empower businesses with state-of-the-art cybersecurity solutions that ensure data integrity, confidentiality, and availability.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white/40 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-700">
                To create a safer digital ecosystem where businesses can thrive without the fear of cyber threats.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Value 1 */}
              <div className="bg-white/40 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Integrity
                </h3>
                <p className="text-gray-700">
                  We uphold the highest standards of honesty and transparency in everything we do.
                </p>
              </div>

              {/* Value 2 */}
              <div className="bg-white/40 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Innovation
                </h3>
                <p className="text-gray-700">
                  We continuously innovate to stay ahead of evolving cyber threats.
                </p>
              </div>

              {/* Value 3 */}
              <div className="bg-white/40 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Excellence
                </h3>
                <p className="text-gray-700">
                  We strive for excellence in delivering top-notch cybersecurity solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;