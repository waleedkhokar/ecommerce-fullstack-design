import React, { useState, useContext } from "react";
import { Container, Nav, Navbar, InputGroup, Button, Form, Dropdown } from "react-bootstrap";
import logo from "../../assets/brand/logo-symbol.svg";
import { 
  RiMessage2Line, 
  RiHeart3Line,
  RiShoppingCart2Fill, 
  RiUserFill, 
  RiMenuLine,
  RiSearchLine,
  RiArrowLeftLine,
  RiCloseLine,
  RiStoreLine,
  RiDiscountPercentLine,
  RiCustomerServiceLine
} from "@remixicon/react";
import SectionWrapper from "./SectionWrapper";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';
import MobileSidebar from "../ui/mobsidebar/MobileSidebar";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  
  const [showSidebar, setShowSidebar] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const isDetailPage = location.pathname.startsWith('/product/');
  const isCartPage = location.pathname === '/cart';
  const shouldHideAll = isDetailPage || isCartPage; 

  const iconColor = "#4B5563"; 
  const primaryColor = "#2563EB";
  const iconStyle = { width: "22px", height: "22px", color: iconColor };
  
  const categories = [
    'All Categories', 'Electronics', 'Fashion', 'Home & Living', 
    'Sports', 'Books', 'Toys', 'Beauty'
  ];

  const handleSearch = (e) => {
    if (e) e.preventDefault(); 
    if (query.trim()) {
      navigate(`/product?search=${query}&category=${selectedCategory}`);
    }
  };

  return (
    <SectionWrapper>
      {/* Enhanced Mobile Sidebar */}
      <MobileSidebar 
        show={showSidebar} 
        onHide={() => setShowSidebar(false)} 
        user={user} 
      />

      {/* MOBILE VIEW - Modern Redesign */}
      <div className="d-lg-none">
        {!shouldHideAll ? (
          <>
            {/* Top Bar with Gradient */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2">
              <div className="d-flex justify-content-between align-items-center">
                <span className="small">Free shipping on orders over $50</span>
                <div className="d-flex gap-3">
                  <RiCustomerServiceLine size={16} />
                  <RiDiscountPercentLine size={16} />
                </div>
              </div>
            </div>

            {/* Main Header */}
            <div className="bg-white px-4 py-3 border-bottom shadow-sm">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  {/* Animated Menu Button */}
                  <button 
                    onClick={() => setShowSidebar(true)}
                    className="btn btn-link p-0 text-dark position-relative"
                    style={{ width: '32px', height: '32px' }}
                  >
                    <RiMenuLine 
                      size={28} 
                      className="position-absolute top-0 start-0"
                      style={{ transition: 'transform 0.2s' }}
                    />
                  </button>
                  
                  {/* Enhanced Logo */}
                  <Navbar.Brand as={Link} to="/" className="d-flex align-items-center m-0">
                    <div className="bg-primary rounded-3 p-2 me-2 d-flex align-items-center shadow-sm">
                      <RiStoreLine color="white" size={20} />
                    </div>
                    <div>
                      <span className="fw-bold text-primary" style={{ fontSize: "22px", letterSpacing: '-0.5px' }}>
                        Khokhar<span className="text-dark">Mart</span>
                      </span>
                    </div>
                  </Navbar.Brand>
                </div>

                <div className="d-flex gap-4">
                  <Link to="/cart" className="text-dark position-relative">
                    <RiShoppingCart2Fill size={26} />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary" style={{ fontSize: '10px' }}>
                      2
                    </span>
                  </Link>
                  <button 
                    onClick={() => setShowSidebar(true)} 
                    className="btn btn-link p-0 text-dark"
                  >
                    <RiUserFill size={26} />
                  </button>
                </div>
              </div>
            </div>

            {/* Enhanced Search Bar with Animation */}
            <div className="px-4 py-3 bg-white border-bottom">
              <Form onSubmit={handleSearch}>
                <div className={`d-flex align-items-center bg-light rounded-pill px-3 py-2 border ${isSearchFocused ? 'border-primary shadow-sm' : 'border-0'}`} 
                     style={{ transition: 'all 0.3s ease' }}>
                  <RiSearchLine color={isSearchFocused ? primaryColor : "#9CA3AF"} size={20} />
                  <Form.Control
                    placeholder="Search for products..."
                    className="border-0 bg-transparent ms-2"
                    style={{ boxShadow: 'none', fontSize: '15px' }}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                  />
                  {query && (
                    <RiCloseLine 
                      size={20} 
                      color="#9CA3AF" 
                      onClick={() => setQuery('')}
                      style={{ cursor: 'pointer' }}
                    />
                  )}
                </div>
              </Form>
            </div>

            {/* Modern Category Pills */}
            <div className="px-4 py-3 bg-white overflow-auto no-scrollbar" style={{ whiteSpace: 'nowrap' }}>
              <div className="d-flex gap-2">
                {categories.slice(0, 6).map((cat, index) => (
                  <button
                    key={cat}
                    onClick={() => { setSelectedCategory(cat); handleSearch(); }}
                    className={`btn rounded-pill px-4 py-2 border-0 fw-medium ${
                      selectedCategory === cat 
                        ? 'bg-primary text-white shadow-sm' 
                        : 'bg-light text-dark hover:bg-gray-200'
                    }`}
                    style={{ 
                      fontSize: '14px',
                      transition: 'all 0.2s ease',
                      animation: `fadeIn 0.3s ease ${index * 0.05}s`
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          // Enhanced Detail/Cart Header
          <div className="bg-white px-4 py-3 border-bottom shadow-sm sticky-top">
            <div className="d-flex align-items-center">
              <button 
                onClick={() => navigate(-1)} 
                className="btn btn-link p-0 text-dark me-3 hover:scale-110"
                style={{ transition: 'transform 0.2s' }}
              >
                <RiArrowLeftLine size={26} />
              </button>
              <div>
                <h5 className="mb-0 fw-bold">{isCartPage ? "Your Shopping Cart" : "Product Details"}</h5>
                <small className="text-muted">{isCartPage ? "Review your items" : "Check out the details"}</small>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* DESKTOP VIEW - Premium Redesign */}
      <div className="d-none d-lg-block">
        {/* Top Bar */}
        <div className="bg-gray-50 border-bottom py-2">
          <Container fluid className="px-4">
            <div className="d-flex justify-content-between align-items-center small">
              <div className="d-flex gap-4">
                <span className="text-muted">
                  <RiStoreLine size={16} className="me-1" />
                  Welcome to KhokharMart!
                </span>
                <span className="text-primary">🇺🇸 USD</span>
              </div>
              <div className="d-flex gap-4">
                <a href="#" className="text-decoration-none text-muted hover:text-primary">Help Center</a>
                <a href="#" className="text-decoration-none text-muted hover:text-primary">Track Order</a>
                <a href="#" className="text-decoration-none text-muted hover:text-primary">Become a Seller</a>
              </div>
            </div>
          </Container>
        </div>

        {/* Main Navbar */}
        <Navbar bg="white" expand="lg" className="py-3 border-bottom shadow-sm">
          <Container fluid className="px-4">
            {/* Enhanced Logo with Animation */}
            <Navbar.Brand as={Link} to="/" className="d-flex align-items-center hover-scale" style={{ transition: 'transform 0.2s' }}>
              <div className="bg-primary rounded-3 p-2 me-2 d-flex align-items-center shadow">
                <RiStoreLine color="white" size={28} />
              </div>
              <div>
                <span className="fw-bold" style={{ color: primaryColor, fontSize: "24px", letterSpacing: '-0.5px' }}>Khokhar</span>
                <span className="fw-bold text-dark" style={{ fontSize: "24px", letterSpacing: '-0.5px' }}>Mart</span>
              </div>
            </Navbar.Brand>
            
            {/* Enhanced Search Bar */}
            <div className="flex-grow-1 mx-5" style={{ maxWidth: "700px" }}>
              <Form onSubmit={handleSearch}>
                <div className="d-flex align-items-center bg-light rounded-pill border overflow-hidden hover:border-primary" 
                     style={{ transition: 'all 0.3s ease' }}>
                  <Dropdown>
                    <Dropdown.Toggle 
                      variant="link"
                      className="text-decoration-none text-dark px-4 py-3 bg-light border-0 rounded-pill"
                      style={{ fontSize: '15px', fontWeight: '500' }}
                    >
                      {selectedCategory}
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="shadow-lg border-0 mt-2 rounded-3 p-2" style={{ minWidth: '220px' }}>
                      {categories.map(cat => (
                        <Dropdown.Item 
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`rounded-2 py-2 ${selectedCategory === cat ? 'bg-primary text-white' : ''}`}
                        >
                          {cat}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                  
                  <div className="d-flex align-items-center flex-grow-1 px-3">
                    <RiSearchLine color="#9CA3AF" size={20} />
                    <Form.Control
                      placeholder="Search for products, brands and more..."
                      className="border-0 bg-transparent ms-2"
                      style={{ boxShadow: 'none', fontSize: '15px' }}
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                  </div>
                  
                  <Button 
                    variant="primary" 
                    onClick={handleSearch}
                    className="rounded-pill px-4 py-3 border-0"
                    style={{ 
                      background: primaryColor,
                      fontSize: '15px',
                      fontWeight: '500'
                    }}
                  >
                    Search
                  </Button>
                </div>
              </Form>
            </div>

            {/* Enhanced Navigation Icons */}
            <Nav className="ms-auto d-flex align-items-center gap-2">
              {/* Profile Dropdown with Animation */}
              <Dropdown align="end">
                <Dropdown.Toggle 
                  as="div" 
                  className="d-flex flex-column align-items-center px-3 py-2 rounded-3 hover:bg-gray-50" 
                  style={{ cursor: 'pointer', transition: 'all 0.2s' }}
                >
                  <div className="position-relative">
                    <RiUserFill style={{ ...iconStyle, width: '24px', height: '24px' }} />
                    {user && <span className="position-absolute bottom-0 end-0 bg-success rounded-circle" style={{ width: '8px', height: '8px' }}></span>}
                  </div>
                  <small className="fw-medium" style={{ color: iconColor, fontSize: '12px' }}>
                    {user ? user.name?.split(' ')[0] : "Account"}
                  </small>
                </Dropdown.Toggle>

                <Dropdown.Menu className="shadow-lg border-0 mt-2 p-2 rounded-3" style={{ width: '240px' }}>
                  {user ? (
                    <>
                      <div className="px-3 py-2 border-bottom mb-2">
                        <div className="fw-bold text-truncate">{user.name}</div>
                        <small className="text-muted text-truncate d-block">{user.email}</small>
                      </div>
                      <Dropdown.Item as={Link} to="/profile" className="rounded-2 py-2">
                        <RiUserFill size={16} className="me-2" /> My Account
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/my-orders" className="rounded-2 py-2">
                        <RiHeart3Line size={16} className="me-2" /> My Orders
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item onClick={logout} className="text-danger rounded-2 py-2">
                        Logout
                      </Dropdown.Item>
                    </>
                  ) : (
                    <div className="p-3">
                      <Button as={Link} to="/login" variant="primary" className="w-100 mb-2 rounded-pill py-2">
                        Sign In
                      </Button>
                      <Button as={Link} to="/signup" variant="outline-primary" className="w-100 rounded-pill py-2">
                        Register
                      </Button>
                    </div>
                  )}
                </Dropdown.Menu>
              </Dropdown>

              <Nav.Link as={Link} to="/message" className="d-flex flex-column align-items-center px-3 py-2 rounded-3 hover:bg-gray-50">
                <RiMessage2Line style={{ ...iconStyle, width: '24px', height: '24px' }} />
                <small className="fw-medium" style={{ color: iconColor, fontSize: '12px' }}>Messages</small>
              </Nav.Link>

              <Nav.Link as={Link} to="/wishlist" className="d-flex flex-column align-items-center px-3 py-2 rounded-3 hover:bg-gray-50">
                <RiHeart3Line style={{ ...iconStyle, width: '24px', height: '24px' }} />
                <small className="fw-medium" style={{ color: iconColor, fontSize: '12px' }}>Wishlist</small>
              </Nav.Link>

              <Nav.Link as={Link} to='/cart' className="d-flex flex-column align-items-center px-3 py-2 rounded-3 hover:bg-gray-50 position-relative">
                <div className="position-relative">
                  <RiShoppingCart2Fill style={{ ...iconStyle, width: '24px', height: '24px' }} />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary" style={{ fontSize: '10px' }}>
                    2
                  </span>
                </div>
                <small className="fw-medium" style={{ color: iconColor, fontSize: '12px' }}>Cart</small>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* Category Navigation Bar */}
        <div className="bg-white border-bottom py-2">
          <Container fluid className="px-4">
            <div className="d-flex align-items-center gap-3 overflow-auto no-scrollbar">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => { setSelectedCategory(cat); handleSearch(); }}
                  className={`btn btn-link text-decoration-none px-3 py-2 rounded-pill ${
                    selectedCategory === cat 
                      ? 'bg-primary text-white' 
                      : 'text-dark hover:bg-gray-100'
                  }`}
                  style={{ 
                    fontSize: '14px',
                    fontWeight: selectedCategory === cat ? '600' : '500',
                    transition: 'all 0.2s',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Container>
        </div>
      </div>

      <style jsx>{`
        .hover-scale:hover {
          transform: scale(1.02);
        }
        .hover\\:bg-gray-50:hover {
          background-color: #F9FAFB;
        }
        .hover\\:bg-gray-100:hover {
          background-color: #F3F4F6;
        }
        .hover\\:text-primary:hover {
          color: ${primaryColor} !important;
        }
        .hover\\:border-primary:hover {
          border-color: ${primaryColor} !important;
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
      `}</style>
    </SectionWrapper>
  );
};

export default Header;