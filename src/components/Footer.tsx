import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Clock, Facebook, Linkedin, Instagram, Leaf } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Projects", href: "/projects" },
    { name: "News", href: "/news" },
    { name: "Careers", href: "/careers" },
    { name: "Privacy Policy", href: "/privacy" },
  ];

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary">
                <Leaf className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">FEC</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Foundation of the Energy Collective - Building sustainable communities through innovation and collaboration.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>123 Energy Way<br />Calgary, AB T2P 1K4</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@feccanada.org" className="hover:text-accent transition-colors">
                  info@feccanada.org
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+14035551234" className="hover:text-accent transition-colors">
                  (403) 555-1234
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Office Hours</h3>
            <div className="flex items-start space-x-3 text-sm text-muted-foreground">
              <Clock className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <div>
                <p>Monday - Friday</p>
                <p className="font-medium">9:00 AM - 5:00 PM</p>
                <p className="mt-2">Closed weekends & holidays</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Foundation of the Energy Collective. All rights reserved.
            </p>
            <Link
              to="/land-acknowledgement"
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              Land Acknowledgement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
