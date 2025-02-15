import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Import social media icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Cysec788</h3>
            <p className="text-gray-400">
              Protecting your digital world with cutting-edge cybersecurity solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-white transition duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-white transition duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Email: support@cysec788.com</li>
              <li className="text-gray-400">Phone: +1 (123) 456-7890</li>
              <li className="text-gray-400">Address: 123 Cyber St, Secure City</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/cysec788"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/company/cysec788"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/cysec788"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Cysec788. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;