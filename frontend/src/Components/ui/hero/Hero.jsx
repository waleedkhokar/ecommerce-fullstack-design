import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Menu from "./Menu";
import Block from "./Block";
import heroImg from "../../../assets/img/heroImg.png";
import SectionWrapper from "../../global/SectionWrapper";
import { 
  RiArrowRightLine, 
  RiFlashlightLine, 
  RiStarFill,
  RiHeartFill,
  RiShoppingBagLine,
  RiTimeLine,
  RiTruckLine,
  RiShieldCheckLine,
  RiCustomerServiceLine
} from "@remixicon/react";

const Hero = () => {
  const primaryColor = "#2563EB";
  const gradientStyle = {
    background: `linear-gradient(135deg, ${primaryColor} 0%, #7C3AED 100%)`
  };

  return (
    <SectionWrapper>
      {/* Top Promotion Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2" style={{ background: gradientStyle.background }}>
        <Container>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="d-flex align-items-center gap-4">
              <div className="d-flex align-items-center gap-2">
                <RiTruckLine size={16} />
                <small>Free Shipping over $50</small>
              </div>
              <div className="d-flex align-items-center gap-2">
                <RiShieldCheckLine size={16} />
                <small>2 Year Warranty</small>
              </div>
              <div className="d-flex align-items-center gap-2">
                <RiCustomerServiceLine size={16} />
                <small>24/7 Support</small>
              </div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <RiStarFill size={16} className="text-warning" />
              <small>4.8/5 Trustpilot Rating</small>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Hero Section */}
      <Container className="mt-4 mb-5 px-0 px-md-3">
        <Row className="g-4 mx-0">
          
          {/* LEFT SIDEBAR - Enhanced Menu Container */}
          <Col md={3} lg={3} className="d-none d-md-block">
            <div className="bg-white rounded-4 shadow-sm h-100" style={{ overflow: 'hidden' }}>
              <div className="p-3 border-bottom bg-light bg-opacity-50">
                <h6 className="fw-bold mb-0 d-flex align-items-center">
                  <RiShoppingBagLine size={18} className="me-2" style={{ color: primaryColor }} />
                  Shop by Category
                </h6>
              </div>
              <Menu />
            </div>
          </Col>

          {/* MAIN BANNER - Completely Redesigned */}
          <Col xs={12} md={6} lg={6}>
            <div className="position-relative rounded-4 overflow-hidden shadow-lg h-100" style={{ minHeight: window.innerWidth < 768 ? "300px" : "450px" }}>
              {/* Background Image with Overlay */}
              <div
                className="w-100 h-100 position-absolute"
                style={{
                  backgroundImage: `url(${heroImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "brightness(0.8) saturate(1.2)",
                  transition: "transform 0.3s ease",
                }}
              />
              
              {/* Gradient Overlay */}
              <div className="position-absolute w-100 h-100" style={{
                background: 'linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%)'
              }} />

              {/* Content Container */}
              <div className="position-relative h-100 d-flex align-items-center" style={{ zIndex: 2 }}>
                <div className="text-white px-4 px-md-5 py-4" style={{ maxWidth: "550px" }}>
                  {/* Badge */}
                  <div className="d-inline-block bg-white bg-opacity-20 backdrop-blur rounded-pill px-3 py-1 mb-4">
                    <div className="d-flex align-items-center gap-2">
                      <RiFlashlightLine size={16} className="text-warning" />
                      <small className="fw-medium text-white">HOT DEAL OF THE DAY</small>
                    </div>
                  </div>

                  {/* Main Title */}
                  <h4 className="text-white text-uppercase mb-2" style={{ 
                    fontSize: window.innerWidth < 768 ? "14px" : "16px",
                    letterSpacing: "2px",
                    opacity: 0.9
                  }}>
                    Latest trending
                  </h4>
                  
                  <h2 className="fw-bold text-white mb-3" style={{ 
                    fontSize: window.innerWidth < 768 ? "32px" : "48px",
                    lineHeight: "1.2",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
                  }}>
                    Electronic <br />Items
                  </h2>

                  {/* Features */}
                  <div className="d-flex gap-4 mb-4">
                    <div className="d-flex align-items-center gap-2">
                      <RiStarFill className="text-warning" size={18} />
                      <small>Premium Quality</small>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <RiHeartFill className="text-danger" size={18} />
                      <small>Best Sellers</small>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <RiTimeLine className="text-info" size={18} />
                      <small>Limited Time</small>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="d-flex gap-3 align-items-center">
                    <Button 
                      variant="primary" 
                      className="border-0 fw-bold px-4 py-3 rounded-3 d-flex align-items-center gap-2 hover-scale"
                      style={{
                        background: primaryColor,
                        fontSize: window.innerWidth < 768 ? "14px" : "16px",
                        transition: "all 0.3s ease"
                      }}
                    >
                      Shop Now
                      <RiArrowRightLine size={18} />
                    </Button>
                    
                    <Button 
                      variant="outline-light" 
                      className="fw-medium px-4 py-3 rounded-3 border-2 hover-scale"
                      style={{
                        fontSize: window.innerWidth < 768 ? "14px" : "16px",
                        backdropFilter: "blur(10px)",
                        backgroundColor: "rgba(255,255,255,0.1)"
                      }}
                    >
                      View Collection
                    </Button>
                  </div>

                  {/* Countdown Timer */}
                  <div className="mt-4 d-flex gap-3">
                    <div className="text-center">
                      <div className="bg-white bg-opacity-20 rounded-3 px-3 py-2">
                        <span className="fw-bold fs-5">12</span>
                      </div>
                      <small className="text-white-50">Hours</small>
                    </div>
                    <div className="text-center">
                      <div className="bg-white bg-opacity-20 rounded-3 px-3 py-2">
                        <span className="fw-bold fs-5">45</span>
                      </div>
                      <small className="text-white-50">Mins</small>
                    </div>
                    <div className="text-center">
                      <div className="bg-white bg-opacity-20 rounded-3 px-3 py-2">
                        <span className="fw-bold fs-5">30</span>
                      </div>
                      <small className="text-white-50">Secs</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="position-absolute top-0 end-0 m-4 bg-danger text-white rounded-circle d-flex align-items-center justify-content-center" 
                   style={{ width: "80px", height: "80px", zIndex: 3 }}>
                <div className="text-center">
                  <small className="fw-bold d-block">50%</small>
                  <small className="d-block" style={{ fontSize: "10px" }}>OFF</small>
                </div>
              </div>
            </div>
          </Col>

          {/* RIGHT BLOCK - Enhanced with animations */}
          <Col lg={3} className="d-none d-lg-block">
            <div className="h-100">
              <Block />
            </div>
          </Col>

        </Row>

        {/* Quick Category Links */}
        <Row className="mt-4 g-3">
          <Col xs={6} md={3}>
            <div className="bg-white rounded-3 p-3 d-flex align-items-center gap-3 shadow-sm hover-lift">
              <div className="bg-primary bg-opacity-10 rounded-2 p-2" style={{ color: primaryColor }}>
                <RiShoppingBagLine size={24} />
              </div>
              <div>
                <small className="text-muted d-block">New Arrivals</small>
                <span className="fw-bold">250+ Items</span>
              </div>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="bg-white rounded-3 p-3 d-flex align-items-center gap-3 shadow-sm hover-lift">
              <div className="bg-success bg-opacity-10 rounded-2 p-2" style={{ color: "#10B981" }}>
                <RiStarFill size={24} />
              </div>
              <div>
                <small className="text-muted d-block">Best Seller</small>
                <span className="fw-bold">100+ Items</span>
              </div>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="bg-white rounded-3 p-3 d-flex align-items-center gap-3 shadow-sm hover-lift">
              <div className="bg-warning bg-opacity-10 rounded-2 p-2" style={{ color: "#F59E0B" }}>
                <RiFlashlightLine size={24} />
              </div>
              <div>
                <small className="text-muted d-block">Flash Sale</small>
                <span className="fw-bold">Ending Soon</span>
              </div>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="bg-white rounded-3 p-3 d-flex align-items-center gap-3 shadow-sm hover-lift">
              <div className="bg-danger bg-opacity-10 rounded-2 p-2" style={{ color: "#EF4444" }}>
                <RiHeartFill size={24} />
              </div>
              <div>
                <small className="text-muted d-block">Wishlist</small>
                <span className="fw-bold">Save Items</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .bg-opacity-20 {
          --bs-bg-opacity: 0.2;
        }
        .backdrop-blur {
          backdrop-filter: blur(8px);
        }
        .hover-scale:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }
        .hover-lift {
          transition: all 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important;
        }
        .text-white-50 {
          color: rgba(255,255,255,0.7);
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        .floating-badge {
          animation: pulse 2s infinite;
        }
      `}</style>
    </SectionWrapper>
  );
};

export default Hero;