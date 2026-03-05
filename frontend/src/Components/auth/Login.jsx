import React, { useState, useContext } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { 
  RiMailLine, 
  RiLockLine, 
  RiEyeLine, 
  RiEyeOffLine,
  RiGoogleFill,
  RiFacebookFill,
  RiAppleFill,
  RiArrowRightLine,
  RiShieldKeyholeLine,
  RiGithubFill,
  RiKey2Line
} from "@remixicon/react";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    
    const { login } = useContext(AuthContext); 
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);
        
        try {
            const res = await axios.post('http://127.0.0.1:8000/api/login', { email, password });
            
            // This function should save to localStorage and state
            login(res.data.token, res.data.user); 

            if (res.data.user.role === 'admin') {
                navigate('/admin');
            } else {
                navigate('/product');
            }
        } catch (err) {
            setError(err.response?.data?.message || "Invalid Credentials");
        } finally {
            setIsSubmitting(false);
        }
    };

    const primaryColor = "#2563EB";
    const gradientStyle = {
        background: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
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
                    width: '400px',
                    height: '400px',
                    background: 'rgba(255,255,255,0.05)',
                    top: '-150px',
                    right: '-100px',
                    borderRadius: '50%',
                    animation: 'float 8s ease-in-out infinite'
                }}></div>
                <div className="position-absolute rounded-circle" style={{
                    width: '300px',
                    height: '300px',
                    background: 'rgba(255,255,255,0.05)',
                    bottom: '-100px',
                    left: '-50px',
                    borderRadius: '50%',
                    animation: 'float 10s ease-in-out infinite reverse'
                }}></div>
                <div className="position-absolute" style={{
                    width: '200px',
                    height: '200px',
                    background: 'rgba(255,255,255,0.03)',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '50%',
                    filter: 'blur(50px)'
                }}></div>
            </div>

            <Container className="position-relative" style={{ zIndex: 1 }}>
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-8">
                        <div className="row g-0 shadow-lg rounded-4 overflow-hidden" style={{ 
                            backdropFilter: 'blur(10px)',
                            backgroundColor: 'rgba(255, 255, 255, 0.95)'
                        }}>
                            {/* Left Side - Welcome Panel */}
                            <div className="col-md-5 d-none d-md-block p-5 text-white" style={gradientStyle}>
                                <div className="h-100 d-flex flex-column justify-content-between">
                                    <div>
                                        <div className="mb-5">
                                            <RiShieldKeyholeLine size={60} className="mb-4 opacity-75" />
                                            <h2 className="fw-bold mb-3 display-6">Welcome Back!</h2>
                                            <p className="mb-4 opacity-75" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                                Sign in to access your account and continue your shopping journey with us.
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-auto">
                                        {/* Feature List */}
                                        <div className="mb-4">
                                            <div className="d-flex align-items-center gap-3 mb-3">
                                                <div className="bg-white bg-opacity-20 rounded-2 p-2">
                                                    <RiKey2Line size={20} />
                                                </div>
                                                <span className="small">Secure encrypted connection</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-3 mb-3">
                                                <div className="bg-white bg-opacity-20 rounded-2 p-2">
                                                    <RiShieldKeyholeLine size={20} />
                                                </div>
                                                <span className="small">Protected by 2FA</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="bg-white bg-opacity-20 rounded-2 p-2">
                                                    <RiMailLine size={20} />
                                                </div>
                                                <span className="small">24/7 customer support</span>
                                            </div>
                                        </div>

                                        {/* Testimonial */}
                                        <div className="bg-white bg-opacity-10 rounded-3 p-3">
                                            <p className="small fst-italic mb-2">
                                                "Best shopping experience! Secure and fast login process."
                                            </p>
                                            <div className="d-flex align-items-center">
                                                <div className="bg-white rounded-circle" style={{ width: '30px', height: '30px' }}></div>
                                                <div className="ms-2">
                                                    <small className="fw-bold d-block">Sarah Johnson</small>
                                                    <small className="opacity-75">Happy Customer</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Login Form */}
                            <div className="col-md-7 bg-white p-5">
                                <div className="text-center mb-4">
                                    <h3 className="fw-bold" style={{ color: '#1F2937' }}>Sign In</h3>
                                    <p className="text-muted small">Welcome back! Please enter your details</p>
                                </div>

                                {error && (
                                    <Alert variant="danger" className="border-0 rounded-3 small py-2 d-flex align-items-center">
                                        <span className="me-2">⚠️</span>
                                        {error}
                                    </Alert>
                                )}

                                <Form onSubmit={handleSubmit}>
                                    {/* Email Field */}
                                    <Form.Group className="mb-3">
                                        <Form.Label className="small fw-medium text-muted mb-2">
                                            Email Address
                                        </Form.Label>
                                        <div className="position-relative">
                                            <RiMailLine className="position-absolute top-50 translate-middle-y ms-3" size={18} color="#9CA3AF" />
                                            <Form.Control 
                                                type="email" 
                                                placeholder="name@example.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="ps-5 py-3 border-0 bg-light rounded-3"
                                                style={{ fontSize: '15px' }}
                                                required 
                                            />
                                        </div>
                                    </Form.Group>

                                    {/* Password Field */}
                                    <Form.Group className="mb-3">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <Form.Label className="small fw-medium text-muted mb-0">
                                                Password
                                            </Form.Label>
                                            <Link 
                                                to="/forgot-password" 
                                                className="small text-decoration-none"
                                                style={{ color: primaryColor }}
                                            >
                                                Forgot password?
                                            </Link>
                                        </div>
                                        <div className="position-relative">
                                            <RiLockLine className="position-absolute top-50 translate-middle-y ms-3" size={18} color="#9CA3AF" />
                                            <Form.Control 
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Enter your password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                className="ps-5 py-3 border-0 bg-light rounded-3"
                                                style={{ fontSize: '15px' }}
                                                required 
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="position-absolute top-50 end-0 translate-middle-y btn btn-link p-0 me-3"
                                                style={{ color: '#9CA3AF', textDecoration: 'none' }}
                                            >
                                                {showPassword ? <RiEyeOffLine size={18} /> : <RiEyeLine size={18} />}
                                            </button>
                                        </div>
                                    </Form.Group>

                                    {/* Remember Me */}
                                    <Form.Group className="mb-4">
                                        <div className="d-flex align-items-center">
                                            <Form.Check 
                                                type="checkbox"
                                                id="rememberMe"
                                                checked={rememberMe}
                                                onChange={(e) => setRememberMe(e.target.checked)}
                                                className="me-2"
                                            />
                                            <Form.Label htmlFor="rememberMe" className="small text-muted mb-0">
                                                Remember me for 30 days
                                            </Form.Label>
                                        </div>
                                    </Form.Group>

                                    {/* Login Button */}
                                    <Button 
                                        type="submit" 
                                        className="w-100 py-3 mb-4 border-0 rounded-3 fw-medium position-relative overflow-hidden"
                                        disabled={isSubmitting}
                                        style={{
                                            background: primaryColor,
                                            fontSize: '16px',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        {isSubmitting ? (
                                            <span className="d-flex align-items-center justify-content-center">
                                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                Signing in...
                                            </span>
                                        ) : (
                                            <span className="d-flex align-items-center justify-content-center">
                                                Sign In
                                                <RiArrowRightLine size={18} className="ms-2" />
                                            </span>
                                        )}
                                    </Button>

                                    {/* Social Login */}
                                    <div className="position-relative my-4">
                                        <hr className="text-muted" />
                                        <span className="position-absolute top-50 start-50 translate-middle bg-white px-3 text-muted small">
                                            Or continue with
                                        </span>
                                    </div>

                                    <div className="d-flex gap-3 justify-content-center">
                                        <button className="btn btn-outline-secondary border-0 bg-light rounded-3 p-3 flex-grow-1 hover-scale" 
                                                style={{ transition: 'all 0.2s' }}>
                                            <RiGoogleFill size={20} color="#DB4437" className="me-2" />
                                            <span className="small d-none d-sm-inline">Google</span>
                                        </button>
                                        <button className="btn btn-outline-secondary border-0 bg-light rounded-3 p-3 flex-grow-1 hover-scale" 
                                                style={{ transition: 'all 0.2s' }}>
                                            <RiFacebookFill size={20} color="#4267B2" className="me-2" />
                                            <span className="small d-none d-sm-inline">Facebook</span>
                                        </button>
                                        <button className="btn btn-outline-secondary border-0 bg-light rounded-3 p-3 hover-scale" 
                                                style={{ transition: 'all 0.2s' }}>
                                            <RiGithubFill size={20} color="#333" />
                                        </button>
                                    </div>

                                    {/* Sign Up Link */}
                                    <div className="text-center mt-4">
                                        <small className="text-muted">
                                            Don't have an account?{' '}
                                            <Link 
                                                to="/signup" 
                                                className="text-decoration-none fw-medium"
                                                style={{ color: primaryColor }}
                                            >
                                                Create free account
                                                <RiArrowRightLine size={14} className="ms-1" />
                                            </Link>
                                        </small>
                                    </div>

                                    {/* Demo Credentials */}
                                    <div className="mt-4 p-3 bg-light rounded-3">
                                        <small className="text-muted d-block mb-2 fw-medium">Demo Credentials:</small>
                                        <div className="d-flex justify-content-between small">
                                            <span className="text-muted">Email: demo@example.com</span>
                                            <span className="text-muted">Password: demo123</span>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <style jsx>{`
                .hover-scale:hover {
                    transform: scale(1.02);
                    background-color: #f8f9fa !important;
                }
                .bg-opacity-20 {
                    --bs-bg-opacity: 0.2;
                }
                @keyframes float {
                    0% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                    100% { transform: translateY(0px) rotate(0deg); }
                }
                .btn-primary {
                    position: relative;
                    overflow: hidden;
                }
                .btn-primary::after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 0;
                    height: 0;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.3);
                    transform: translate(-50%, -50%);
                    transition: width 0.6s, height 0.6s;
                }
                .btn-primary:hover::after {
                    width: 300px;
                    height: 300px;
                }
            `}</style>
        </div>
    );
};

export default Login;