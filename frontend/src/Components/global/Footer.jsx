import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/brand/logo-symbol.svg';
import { 
  RiFacebookFill, 
  RiTwitterXFill, 
  RiInstagramFill, 
  RiLinkedinFill, 
  RiYoutubeFill,
  RiMailLine,
  RiMapPinLine,
  RiCustomerServiceLine,
  RiArrowRightLine,
  RiSecurePaymentLine,
  RiTruckLine,
  RiRefreshLine,
  RiHeadphoneLine
} from "@remixicon/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const primaryColor = "#2563EB";
  
  const footerSections = [
    {
      title: "About Us",
      links: [
        { name: "Our Story", path: "/about" },
        { name: "Careers", path: "/careers" },
        { name: "Press", path: "/press" },
        { name: "Blog", path: "/blog" }
      ]
    },
    {
      title: "Customer Service",
      links: [
        { name: "Contact Us", path: "/contact" },
        { name: "FAQs", path: "/faqs" },
        { name: "Shipping Info", path: "/shipping" },
        { name: "Returns", path: "/returns" }
      ]
    },
    {
      title: "Quick Links",
      links: [
        { name: "Track Order", path: "/track-order" },
        { name: "My Account", path: "/account" },
        { name: "Wishlist", path: "/wishlist" },
        { name: "Gift Cards", path: "/gift-cards" }
      ]
    }
  ];

  const socialLinks = [
    { icon: RiFacebookFill, url: "https://facebook.com", color: "#1877F2" },
    { icon: RiTwitterXFill, url: "https://twitter.com", color: "#1DA1F2" },
    { icon: RiInstagramFill, url: "https://instagram.com", color: "#E4405F" },
    { icon: RiLinkedinFill, url: "https://linkedin.com", color: "#0A66C2" },
    { icon: RiYoutubeFill, url: "https://youtube.com", color: "#FF0000" }
  ];

  const features = [
    { icon: RiTruckLine, title: "Free Shipping", desc: "On orders over $50" },
    { icon: RiSecurePaymentLine, title: "Secure Payment", desc: "100% secure transactions" },
    { icon: RiRefreshLine, title: "Easy Returns", desc: "30-day return policy" },
    { icon: RiHeadphoneLine, title: "24/7 Support", desc: "Dedicated customer service" }
  ];

  return (
    <footer className="bg-white">
      {/* Newsletter Section - Modern Design */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-top border-bottom">
        <Container className="py-5">
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h3 className="fw-bold mb-2" style={{ color: '#1F2937', fontSize: '28px' }}>
                Stay <span style={{ color: primaryColor }}>Connected</span>
              </h3>
              <p className="text-muted mb-0" style={{ fontSize: '16px', maxWidth: '400px' }}>
                Subscribe to get updates on new arrivals, special offers and more!
              </p>
            </Col>
            <Col lg={6}>
              <div className="d-flex flex-column flex-sm-row gap-3">
                <div className="flex-grow-1 position-relative">
                  <RiMailLine className="position-absolute top-50 translate-middle-y ms-3" size={20} color="#9CA3AF" />
                  <input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="form-control form-control-lg rounded-pill border-0 shadow-sm ps-5"
                    style={{ height: '56px', backgroundColor: 'white' }}
                  />
                </div>
                <button 
                  className="btn btn-primary rounded-pill px-4 fw-medium"
                  style={{ 
                    height: '56px', 
                    background: primaryColor,
                    border: 'none',
                    fontSize: '16px'
                  }}
                >
                  Subscribe
                  <RiArrowRightLine size={18} className="ms-2" />
                </button>
              </div>
              <p className="small text-muted mt-3 mb-0">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Features Section - Premium Cards */}
      <Container className="py-5">
        <Row className="g-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Col lg={3} sm={6} key={index}>
                <div className="d-flex align-items-center gap-3 p-3 rounded-3 hover-shadow transition-all" 
                     style={{ transition: 'all 0.3s ease' }}>
                  <div className="bg-primary bg-opacity-10 rounded-3 p-3" style={{ color: primaryColor }}>
                    <Icon size={28} />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1" style={{ fontSize: '16px', color: '#1F2937' }}>{feature.title}</h6>
                    <p className="small text-muted mb-0">{feature.desc}</p>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>

      {/* Main Footer */}
      <div className="border-top bg-white">
        <Container className="py-5">
          <Row className="g-5">
            {/* Brand Section - Enhanced */}
            <Col lg={3} md={6}>
              <div className="mb-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary rounded-3 p-2 me-2 d-flex align-items-center shadow-sm">
                    <img src={logo} alt="KhokharMart" width="32" height="32" />
                  </div>
                  <span className="fw-bold" style={{ color: primaryColor, fontSize: "24px", letterSpacing: '-0.5px' }}>
                    Khokhar<span className="text-dark">Mart</span>
                  </span>
                </div>
                <p className="text-muted mb-4" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                  Your one-stop destination for quality products at the best prices. Shop with confidence and enjoy a seamless shopping experience.
                </p>
                
                {/* Contact Info */}
                <div className="mb-4">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <RiMapPinLine size={18} color={primaryColor} />
                    <span className="text-muted small">123 Business Ave, New York, NY 10001</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <RiCustomerServiceLine size={18} color={primaryColor} />
                    <span className="text-muted small">support@khokharmart.com | +1 (555) 123-4567</span>
                  </div>
                </div>

                {/* Social Links - Modern Design */}
                <div className="d-flex gap-2">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-flex align-items-center justify-content-center rounded-circle text-white text-decoration-none hover-scale"
                        style={{
                          width: '40px',
                          height: '40px',
                          backgroundColor: social.color,
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <Icon size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </Col>

            {/* Dynamic Footer Sections */}
            {footerSections.map((section, index) => (
              <Col lg={2} md={6} key={index}>
                <h5 className="fw-bold mb-4" style={{ color: '#1F2937', fontSize: '16px' }}>
                  {section.title}
                </h5>
                <ul className="list-unstyled">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="mb-3">
                      <Link
                        to={link.path}
                        className="text-decoration-none text-muted hover-primary transition-all"
                        style={{ fontSize: '15px' }}
                      >
                        {link.name}
                        <RiArrowRightLine size={14} className="ms-1 opacity-0" style={{ transition: 'all 0.2s' }} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>
            ))}

            {/* Download Apps Section - Enhanced */}
            <Col lg={2} md={6}>
              <h5 className="fw-bold mb-4" style={{ color: '#1F2937', fontSize: '16px' }}>
                Download App
              </h5>
              <p className="small text-muted mb-3">Get exclusive offers with our app</p>
              <div className="d-flex flex-column gap-2">
                <a href="#" className="text-decoration-none">
                  <div className="d-flex align-items-center bg-dark text-white rounded-3 p-2 hover-scale" 
                       style={{ width: '140px', transition: 'all 0.3s ease' }}>
                    <div className="me-2">
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
                        <path d="M3 20.5V3.5C3 2.95 3.45 2.5 4 2.5H20C20.55 2.5 21 2.95 21 3.5V20.5C21 21.05 20.55 21.5 20 21.5H4C3.45 21.5 3 21.05 3 20.5Z" />
                      </svg>
                    </div>
                    <div>
                      <small className="opacity-75">Download on</small>
                      <div className="fw-bold">App Store</div>
                    </div>
                  </div>
                </a>
                <a href="#" className="text-decoration-none">
                  <div className="d-flex align-items-center bg-dark text-white rounded-3 p-2 hover-scale" 
                       style={{ width: '140px', transition: 'all 0.3s ease' }}>
                    <div className="me-2">
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
                        <path d="M3 20.5V3.5C3 2.95 3.45 2.5 4 2.5H20C20.55 2.5 21 2.95 21 3.5V20.5C21 21.05 20.55 21.5 20 21.5H4C3.45 21.5 3 21.05 3 20.5Z" />
                      </svg>
                    </div>
                    <div>
                      <small className="opacity-75">Get it on</small>
                      <div className="fw-bold">Google Play</div>
                    </div>
                  </div>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Bottom Bar - Copyright and Payment Methods */}
      <div className="border-top bg-gray-50">
        <Container className="py-3">
          <Row className="align-items-center">
            <Col md={6} className="mb-3 mb-md-0">
              <div className="d-flex flex-wrap gap-3 align-items-center">
                <span className="text-muted small" style={{ fontSize: '14px' }}>
                  © {currentYear} KhokharMart. All rights reserved.
                </span>
                <Link to="/privacy" className="text-muted small text-decoration-none hover-primary">Privacy</Link>
                <Link to="/terms" className="text-muted small text-decoration-none hover-primary">Terms</Link>
                <Link to="/sitemap" className="text-muted small text-decoration-none hover-primary">Sitemap</Link>
              </div>
            </Col>
            <Col md={6}>
              <div className="d-flex justify-content-md-end gap-2">
                <div className="bg-white rounded-3 p-2 shadow-sm">
                  <svg width="40" height="25" viewBox="0 0 60 40" fill="none">
                    <rect width="60" height="40" rx="4" fill="#F5F5F5"/>
                    <circle cx="20" cy="20" r="12" fill="#EB001B" opacity="0.8"/>
                    <circle cx="40" cy="20" r="12" fill="#F79E1B" opacity="0.8"/>
                  </svg>
                </div>
                <div className="bg-white rounded-3 p-2 shadow-sm">
                  <svg width="40" height="25" viewBox="0 0 60 40" fill="none">
                    <rect width="60" height="40" rx="4" fill="#F5F5F5"/>
                    <circle cx="30" cy="20" r="12" fill="#1A1F71" opacity="0.8"/>
                  </svg>
                </div>
                <div className="bg-white rounded-3 p-2 shadow-sm">
                  <svg width="40" height="25" viewBox="0 0 60 40" fill="none">
                    <rect width="60" height="40" rx="4" fill="#F5F5F5"/>
                    <path d="M20 20H40V30H20V20Z" fill="#5F6368" opacity="0.8"/>
                  </svg>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <style jsx>{`
        .hover-primary:hover {
          color: ${primaryColor} !important;
        }
        .hover-primary:hover .opacity-0 {
          opacity: 1 !important;
          transform: translateX(3px);
        }
        .hover-scale:hover {
          transform: scale(1.05);
        }
        .hover-shadow:hover {
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        .transition-all {
          transition: all 0.3s ease;
        }
        .bg-gradient-to-r {
          background: linear-gradient(90deg, #EFF6FF 0%, #EEF2FF 100%);
        }
      `}</style>
    </footer>
  );
};

export default Footer;