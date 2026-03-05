import React, { useState } from "react";
import { Card, Col, Row, Badge } from "react-bootstrap";
import SectionWrapper from "../../global/SectionWrapper";
import { Link } from "react-router-dom";
import { ProductData } from "../../../data/Content";
import { 
  RiHeartLine, 
  RiHeartFill, 
  RiEyeLine, 
  RiStarFill,
  RiShoppingCartLine,
  RiArrowRightLine,
  RiFlashlightLine,
  RiDiscountPercentLine
} from "@remixicon/react";

const Recommend = () => {
  const [wishlist, setWishlist] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);
  
  const RecommendedItems = ProductData.filter(item => item.id >= 15).slice(0, 10);
  
  const toggleWishlist = (e, itemId) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlist(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const primaryColor = "#2563EB";
  const gradientStyle = {
    background: `linear-gradient(135deg, ${primaryColor} 0%, #7C3AED 100%)`
  };

  return (
    <SectionWrapper>
      {/* Header with gradient line and view all */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center gap-3">
          <div className="position-relative">
            <h4 className="fw-bold mb-0" style={{ color: '#1F2937', fontSize: '24px' }}>
              Recommended Items
            </h4>
            <div style={{ ...gradientStyle, height: '3px', width: '60px', borderRadius: '2px' }} className="mt-1"></div>
          </div>
          <Badge 
            bg="light" 
            className="rounded-pill px-3 py-2 text-dark fw-medium"
            style={{ fontSize: '13px' }}
          >
            <RiFlashlightLine size={14} className="me-1 text-warning" />
            Based on your views
          </Badge>
        </div>
        
        <Link 
          to="/products" 
          className="text-decoration-none d-flex align-items-center gap-1 fw-medium"
          style={{ color: primaryColor, fontSize: '15px' }}
        >
          View All
          <RiArrowRightLine size={18} />
        </Link>
      </div>

      {/* Products Grid */}
      <Row className="g-4 row-cols-2 row-cols-md-3 row-cols-lg-5 mb-4">
        {RecommendedItems.map((item, index) => {
          const isWishlisted = wishlist.includes(item.id);
          const isHovered = hoveredItem === item.id;
          const discount = Math.floor(Math.random() * 30) + 10; // Random discount 10-40%
          const originalPrice = (item.price * (1 + discount/100)).toFixed(2);
          
          return (
            <Col key={item.id}>
              <Link to={`/product/${item.id}`} className="text-decoration-none">
                <Card 
                  className="h-100 border-0 rounded-4 product-card"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  style={{ 
                    transition: 'all 0.3s ease',
                    boxShadow: isHovered ? '0 20px 30px -10px rgba(37, 99, 235, 0.2)' : '0 5px 15px rgba(0,0,0,0.05)'
                  }}
                >
                  {/* Image Container with Badges */}
                  <div className="position-relative">
                    {/* Discount Badge */}
                    <div 
                      className="position-absolute top-0 start-0 m-3 rounded-pill px-3 py-1 z-index-1"
                      style={{ background: gradientStyle.background, zIndex: 2 }}
                    >
                      <small className="text-white fw-bold d-flex align-items-center">
                        <RiDiscountPercentLine size={12} className="me-1" />
                        {discount}% OFF
                      </small>
                    </div>

                    {/* Wishlist Button */}
                    <button
                      onClick={(e) => toggleWishlist(e, item.id)}
                      className="position-absolute top-0 end-0 m-3 btn btn-link p-0 border-0 z-index-1"
                      style={{ zIndex: 2 }}
                    >
                      <div className="bg-white rounded-circle p-2 shadow-sm hover-scale">
                        {isWishlisted ? (
                          <RiHeartFill size={18} color="#EF4444" />
                        ) : (
                          <RiHeartLine size={18} color="#6B7280" />
                        )}
                      </div>
                    </button>

                    {/* Quick View Button - Appears on Hover */}
                    <div 
                      className="position-absolute bottom-0 start-0 end-0 text-center mb-3"
                      style={{ 
                        opacity: isHovered ? 1 : 0,
                        transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
                        transition: 'all 0.3s ease',
                        zIndex: 2
                      }}
                    >
                      <button 
                        className="btn btn-light rounded-pill px-4 py-2 shadow-sm border-0"
                        style={{ 
                          fontSize: '13px',
                          fontWeight: '500',
                          backdropFilter: 'blur(10px)',
                          backgroundColor: 'rgba(255,255,255,0.9)'
                        }}
                      >
                        <RiEyeLine size={14} className="me-2" />
                        Quick View
                      </button>
                    </div>

                    {/* Product Image */}
                    <div 
                      className="d-flex align-items-center justify-content-center rounded-top-4 p-3"
                      style={{ 
                        height: "200px", 
                        backgroundColor: '#F9FAFB',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                    >
                      <Card.Img
                        variant="top"
                        src={item.img}
                        alt={item.title}
                        style={{
                          maxHeight: "160px",
                          width: "auto",
                          objectFit: "contain",
                          transition: 'transform 0.3s ease',
                          transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                        }}
                      />
                      
                      {/* Animated Shine Effect */}
                      <div className={`shine-effect ${isHovered ? 'active' : ''}`} />
                    </div>
                  </div>

                  {/* Card Body */}
                  <Card.Body className="pt-3">
                    {/* Rating Stars */}
                    <div className="d-flex align-items-center gap-1 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <RiStarFill 
                          key={star} 
                          size={14} 
                          color={star <= 4 ? "#FBBF24" : "#E5E7EB"} 
                        />
                      ))}
                      <span className="text-muted small ms-1">(124)</span>
                    </div>

                    {/* Price Section */}
                    <div className="d-flex align-items-center gap-2 mb-1">
                      <span className="fw-bold" style={{ color: primaryColor, fontSize: '18px' }}>
                        ${item.price}
                      </span>
                      <span className="text-muted text-decoration-line-through small">
                        ${originalPrice}
                      </span>
                    </div>

                    {/* Product Title */}
                    <Card.Text 
                      className="text-muted mb-2" 
                      style={{ 
                        fontSize: "14px", 
                        lineHeight: "1.4",
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        height: '40px'
                      }}
                    >
                      {item.title}
                    </Card.Text>

                    {/* Free Shipping Tag */}
                    {index % 2 === 0 && (
                      <small className="text-success d-flex align-items-center gap-1">
                        <RiShoppingCartLine size={12} />
                        Free Shipping
                      </small>
                    )}
                  </Card.Body>

                  {/* Add to Cart Button - Appears on Hover */}
                  <div 
                    className="p-3 pt-0"
                    style={{ 
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
                      transition: 'all 0.3s ease 0.1s'
                    }}
                  >
                    <button 
                      className="btn w-100 py-2 rounded-3 border-0 fw-medium"
                      style={{
                        background: isHovered ? primaryColor : '#F3F4F6',
                        color: isHovered ? 'white' : '#4B5563',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <RiShoppingCartLine size={16} className="me-2" />
                      Add to Cart
                    </button>
                  </div>
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>

      <style jsx>{`
        .product-card {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .product-card:hover {
          transform: translateY(-5px);
        }
        
        .hover-scale:hover {
          transform: scale(1.1);
          transition: transform 0.2s ease;
        }
        
        .z-index-1 {
          z-index: 2;
        }
        
        .shine-effect {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: left 0.5s ease;
        }
        
        .shine-effect.active {
          left: 150%;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .product-card {
          animation: fadeIn 0.5s ease forwards;
          animation-delay: calc(0.05s * var(--index, 0));
        }
      `}</style>

      {/* Add custom CSS for proper z-index and animations */}
      <style>{`
        .product-card .position-absolute {
          z-index: 10;
        }
        
        .product-card .btn-link {
          text-decoration: none;
        }
        
        .product-card .bg-white {
          transition: all 0.2s ease;
        }
        
        .product-card .bg-white:hover {
          transform: scale(1.1);
        }
      `}</style>
    </SectionWrapper>
  );
};

export default Recommend;