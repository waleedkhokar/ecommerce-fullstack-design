import React, { useState, useContext } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { 
  RiUserLine, 
  RiMailLine, 
  RiLockLine, 
  RiEyeLine, 
  RiEyeOffLine,
  RiGoogleFill,
  RiFacebookFill,
  RiAppleFill,
  RiArrowRightLine,
  RiShieldCheckLine
} from "@remixicon/react";

const SignUp = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!acceptedTerms) {
            setError('Please accept the terms and conditions');
            return;
        }
        setError('');
        setIsLoading(true);
        
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register', formData);
            login(response.data.token, response.data.user); 
            
            if (response.data.user.role === 'admin') {
                navigate('/admin');
            } else {
                navigate('/product');
            }
        } catch (err) {
            setError(err.response?.data?.message || "Registration failed. Email might already exist.");
        } finally {
            setIsLoading(false);
        }
    };

    const primaryColor = "#2563EB";
    const gradientStyle = {
        background: `linear-gradient(135deg, ${primaryColor} 0%, #7C3AED 100%)`
    };

    return (
        <div className="min-vh-100 d-flex align-items-center" style={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Animated Background Elements */}
            <div className="position-absolute w-100 h-100">
                <div className="position-absolute rounded-circle" style={{
                    width: '300px',
                    height: '300px',
                    background: 'rgba(255,255,255,0.1)',
                    top: '-100px',
                    right: '-50px',
                    borderRadius: '50%'
                }}></div>
                <div className="position-absolute rounded-circle" style={{
                    width: '200px',
                    height: '200px',
                    background: 'rgba(255,255,255,0.1)',
                    bottom: '-50px',
                    left: '-50px',
                    borderRadius: '50%'
                }}></div>
            </div>

            <Container className="position-relative" style={{ zIndex: 1 }}>
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-8">
                        <div className="row g-0 shadow-lg rounded-4 overflow-hidden" style={{ backdropFilter: 'blur(10px)' }}>
                            {/* Left Side - Branding */}
                            <div className="col-md-5 d-none d-md-block" style={gradientStyle}>
                                <div className="p-5 text-white h-100 d-flex flex-column justify-content-between">
                                    <div>
                                        <h2 className="fw-bold mb-4 display-6">Join Us Today!</h2>
                                        <p className="mb-4 opacity-75">Create your account and start your journey with thousands of products.</p>
                                    </div>
                                    
                                    <div className="mt-auto">
                                        <div className="d-flex gap-3 mb-4">
                                            <div className="text-center">
                                                <h3 className="fw-bold mb-0">10K+</h3>
                                                <small className="opacity-75">Happy Users</small>
                                            </div>
                                            <div className="text-center">
                                                <h3 className="fw-bold mb-0">50K+</h3>
                                                <small className="opacity-75">Products</small>
                                            </div>
                                        </div>
                                        
                                        <div className="d-flex gap-2">
                                            <div className="bg-white bg-opacity-20 rounded-3 p-2">
                                                <RiShieldCheckLine size={24} />
                                            </div>
                                            <div className="bg-white bg-opacity-20 rounded-3 p-2">
                                                <RiShieldCheckLine size={24} />
                                            </div>
                                            <div className="bg-white bg-opacity-20 rounded-3 p-2">
                                                <RiShieldCheckLine size={24} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Sign Up Form */}
                            <div className="col-md-7 bg-white p-5">
                                <div className="text-center mb-4">
                                    <h3 className="fw-bold" style={{ color: '#1F2937' }}>Create Account</h3>
                                    <p className="text-muted small">Please fill in your details to sign up</p>
                                </div>

                                {error && (
                                    <Alert variant="danger" className="border-0 rounded-3 small py-2">
                                        {error}
                                    </Alert>
                                )}

                                <Form onSubmit={handleSubmit}>
                                    {/* Name Field */}
                                    <Form.Group className="mb-3">
                                        <div className="position-relative">
                                            <RiUserLine className="position-absolute top-50 translate-middle-y ms-3" size={18} color="#9CA3AF" />
                                            <Form.Control 
                                                type="text"
                                                placeholder="Full Name"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="ps-5 py-3 border-0 bg-light rounded-3"
                                                style={{ fontSize: '15px' }}
                                                required
                                            />
                                        </div>
                                    </Form.Group>

                                    {/* Email Field */}
                                    <Form.Group className="mb-3">
                                        <div className="position-relative">
                                            <RiMailLine className="position-absolute top-50 translate-middle-y ms-3" size={18} color="#9CA3AF" />
                                            <Form.Control 
                                                type="email"
                                                placeholder="Email Address"
                                                value={formData.email}
                                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                                className="ps-5 py-3 border-0 bg-light rounded-3"
                                                style={{ fontSize: '15px' }}
                                                required
                                            />
                                        </div>
                                    </Form.Group>

                                    {/* Password Field with Toggle */}
                                    <Form.Group className="mb-4">
                                        <div className="position-relative">
                                            <RiLockLine className="position-absolute top-50 translate-middle-y ms-3" size={18} color="#9CA3AF" />
                                            <Form.Control 
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Password"
                                                value={formData.password}
                                                onChange={(e) => setFormData({...formData, password: e.target.value})}
                                                className="ps-5 py-3 border-0 bg-light rounded-3"
                                                style={{ fontSize: '15px' }}
                                                required
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="position-absolute top-50 end-0 translate-middle-y btn btn-link p-0 me-3"
                                                style={{ color: '#9CA3AF' }}
                                            >
                                                {showPassword ? <RiEyeOffLine size={18} /> : <RiEyeLine size={18} />}
                                            </button>
                                        </div>
                                    </Form.Group>

                                    {/* Terms & Conditions */}
                                    <Form.Group className="mb-4">
                                        <div className="d-flex align-items-start gap-2">
                                            <Form.Check 
                                                type="checkbox"
                                                checked={acceptedTerms}
                                                onChange={(e) => setAcceptedTerms(e.target.checked)}
                                                className="mt-1"
                                            />
                                            <small className="text-muted">
                                                I agree to the <a href="#" className="text-decoration-none" style={{ color: primaryColor }}>Terms of Service</a> and <a href="#" className="text-decoration-none" style={{ color: primaryColor }}>Privacy Policy</a>
                                            </small>
                                        </div>
                                    </Form.Group>

                                    {/* Sign Up Button */}
                                    <Button 
                                        type="submit" 
                                        className="w-100 py-3 mb-3 border-0 rounded-3 fw-medium"
                                        disabled={isLoading}
                                        style={{
                                            background: primaryColor,
                                            fontSize: '16px',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        {isLoading ? (
                                            <span className="d-flex align-items-center justify-content-center">
                                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                Creating Account...
                                            </span>
                                        ) : (
                                            <span className="d-flex align-items-center justify-content-center">
                                                Sign Up
                                                <RiArrowRightLine size={18} className="ms-2" />
                                            </span>
                                        )}
                                    </Button>

                                    {/* Social Sign Up */}
                                    <div className="position-relative my-4">
                                        <hr className="text-muted" />
                                        <span className="position-absolute top-50 start-50 translate-middle bg-white px-3 text-muted small">
                                            Or sign up with
                                        </span>
                                    </div>

                                    <div className="d-flex gap-2 justify-content-center">
                                        <button className="btn btn-outline-secondary border-0 bg-light rounded-3 p-3 hover-scale" style={{ transition: 'all 0.2s' }}>
                                            <RiGoogleFill size={20} color="#DB4437" />
                                        </button>
                                        <button className="btn btn-outline-secondary border-0 bg-light rounded-3 p-3 hover-scale" style={{ transition: 'all 0.2s' }}>
                                            <RiFacebookFill size={20} color="#4267B2" />
                                        </button>
                                        <button className="btn btn-outline-secondary border-0 bg-light rounded-3 p-3 hover-scale" style={{ transition: 'all 0.2s' }}>
                                            <RiAppleFill size={20} color="#000000" />
                                        </button>
                                    </div>

                                    {/* Login Link */}
                                    <div className="text-center mt-4">
                                        <small className="text-muted">
                                            Already have an account?{' '}
                                            <Link 
                                                to="/login" 
                                                className="text-decoration-none fw-medium"
                                                style={{ color: primaryColor }}
                                            >
                                                Login here
                                            </Link>
                                        </small>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <style jsx>{`
                .hover-scale:hover {
                    transform: scale(1.05);
                }
                .bg-opacity-20 {
                    --bs-bg-opacity: 0.2;
                }
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                    100% { transform: translateY(0px); }
                }
            `}</style>
        </div>
    );
};

export default SignUp;