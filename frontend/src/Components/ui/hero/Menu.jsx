import React, { useState } from 'react'
import { MenuData } from '../../../data/MenuData'
import { 
  RiHomeLine, 
  RiShoppingBagLine, 
  RiShirtLine, 
  RiComputerLine, 
  RiHeartPulseLine,
  RiBookLine,
  RiCupLine,
  RiCarLine,
  RiFootballLine,
  RiMusicLine,
  RiArrowRightSLine,
  RiArrowDownSLine,
  RiStarLine,
  RiFireLine,
  RiNewspaperLine,
  RiGiftLine,
  RiDiscountPercentLine,
  RiStoreLine
} from "@remixicon/react"

// Icon mapping for different menu items
const iconMap = {
  'Home': RiHomeLine,
  'Electronics': RiComputerLine,
  'Fashion': RiShirtLine,
  'Health & Beauty': RiHeartPulseLine,
  'Books': RiBookLine,
  'Home & Living': RiCupLine,
  'Automotive': RiCarLine,
  'Sports': RiFootballLine,
  'Entertainment': RiMusicLine,
  'New Arrivals': RiNewspaperLine,
  'Best Sellers': RiStarLine,
  'Hot Deals': RiFireLine,
  'Gift Cards': RiGiftLine,
  'Special Offers': RiDiscountPercentLine,
  'Stores': RiStoreLine
}

const Menu = () => {
    const [activeItem, setActiveItem] = useState(null)
    const [expandedItems, setExpandedItems] = useState([])

    const toggleExpand = (id) => {
        setExpandedItems(prev => 
            prev.includes(id) 
                ? prev.filter(itemId => itemId !== id)
                : [...prev, id]
        )
    }

    const primaryColor = "#2563EB"
    const hoverColor = "#EFF6FF"

    return (
        <>
            <style>
                {`
                .custom-menu-container {
                    background: white;
                    border-radius: 16px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                    padding: 12px 0;
                    width: 100%;
                    max-width: 300px;
                }

                .custom-menu-item {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    padding: 12px 20px;
                    cursor: pointer;
                    color: #4B5563;
                    font-size: 15px;
                    font-weight: 500;
                    transition: all 0.2s ease;
                    border-left: 3px solid transparent;
                    position: relative;
                    overflow: hidden;
                }

                .custom-menu-item::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    height: 100%;
                    width: 0;
                    background: ${hoverColor};
                    transition: width 0.3s ease;
                    z-index: 0;
                }

                .custom-menu-item:hover::before {
                    width: 100%;
                }

                .custom-menu-item.active {
                    border-left-color: ${primaryColor};
                    background: ${hoverColor};
                    color: ${primaryColor};
                }

                .custom-menu-item.active .menu-icon {
                    color: ${primaryColor} !important;
                }

                .menu-content {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    position: relative;
                    z-index: 1;
                    width: 100%;
                }

                .menu-icon {
                    width: 22px;
                    height: 22px;
                    transition: all 0.2s ease;
                    flex-shrink: 0;
                }

                .menu-title {
                    flex-grow: 1;
                    text-align: left;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .menu-arrow {
                    transition: transform 0.2s ease;
                    opacity: 0.5;
                }

                .menu-arrow.expanded {
                    transform: rotate(90deg);
                    color: ${primaryColor};
                    opacity: 1;
                }

                .submenu {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    background: #F9FAFB;
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.3s ease;
                }

                .submenu.expanded {
                    max-height: 500px;
                }

                .submenu-item {
                    padding: 10px 20px 10px 54px;
                    font-size: 14px;
                    color: #6B7280;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    position: relative;
                }

                .submenu-item:hover {
                    background: white;
                    color: ${primaryColor};
                }

                .submenu-item::before {
                    content: '';
                    position: absolute;
                    left: 40px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 4px;
                    height: 4px;
                    background: #D1D5DB;
                    border-radius: 50%;
                }

                .submenu-item:hover::before {
                    background: ${primaryColor};
                }

                .menu-badge {
                    background: ${primaryColor};
                    color: white;
                    font-size: 11px;
                    font-weight: 600;
                    padding: 2px 8px;
                    border-radius: 12px;
                    margin-left: 8px;
                    position: relative;
                    z-index: 1;
                }

                .menu-section-title {
                    padding: 16px 20px 8px;
                    font-size: 12px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    color: #9CA3AF;
                }

                .divider {
                    height: 1px;
                    background: #E5E7EB;
                    margin: 8px 20px;
                }

                .hot-deal {
                    background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%);
                    border-radius: 20px;
                    margin: 12px 20px;
                    padding: 12px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .hot-deal-icon {
                    background: #F59E0B;
                    color: white;
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .hot-deal-text {
                    font-size: 13px;
                    font-weight: 600;
                    color: #92400E;
                }

                .hot-deal-small {
                    font-size: 11px;
                    color: #B45309;
                }

                .ripple-effect {
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(37, 99, 235, 0.3);
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                }

                @keyframes ripple {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
                `}
            </style>

            <div className="custom-menu-container">
                {/* Main Menu Items */}
                <div className='d-flex flex-column w-100'>
                    {MenuData.map((item, index) => {
                        const IconComponent = iconMap[item.title] || RiStoreLine
                        const hasSubmenu = item.submenu && item.submenu.length > 0
                        const isExpanded = expandedItems.includes(item.id)
                        const isActive = activeItem === item.id

                        return (
                            <React.Fragment key={item.id}>
                                <div 
                                    className={`custom-menu-item ${isActive ? 'active' : ''}`}
                                    onClick={() => {
                                        setActiveItem(item.id)
                                        if (hasSubmenu) {
                                            toggleExpand(item.id)
                                        }
                                    }}
                                >
                                    <div className="menu-content">
                                        <IconComponent 
                                            className="menu-icon" 
                                            style={{ color: isActive ? primaryColor : '#6B7280' }}
                                        />
                                        <span className="menu-title">{item.title}</span>
                                        
                                        {/* Optional badge for special items */}
                                        {item.isHot && (
                                            <span className="menu-badge">HOT</span>
                                        )}
                                        {item.isNew && (
                                            <span className="menu-badge" style={{ background: '#10B981' }}>NEW</span>
                                        )}
                                        
                                        {hasSubmenu && (
                                            <RiArrowRightSLine 
                                                className={`menu-arrow ${isExpanded ? 'expanded' : ''}`}
                                                size={18}
                                            />
                                        )}
                                    </div>
                                </div>

                                {/* Submenu */}
                                {hasSubmenu && (
                                    <div className={`submenu ${isExpanded ? 'expanded' : ''}`}>
                                        {item.submenu.map((subItem, subIndex) => (
                                            <div 
                                                key={subIndex} 
                                                className="submenu-item"
                                                onClick={() => console.log(`Selected: ${subItem}`)}
                                            >
                                                {subItem}
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Add divider after specific items */}
                                {index === 5 && <div className="divider" />}
                            </React.Fragment>
                        )
                    })}
                </div>

                {/* Additional Sections */}
                <div className="divider" />
                
                <div className="menu-section-title">DISCOVER MORE</div>
                
                <div className="custom-menu-item">
                    <div className="menu-content">
                        <RiFireLine className="menu-icon" style={{ color: '#F59E0B' }} />
                        <span className="menu-title">Flash Deals</span>
                        <span className="menu-badge" style={{ background: '#EF4444' }}>-50%</span>
                    </div>
                </div>

                <div className="custom-menu-item">
                    <div className="menu-content">
                        <RiStarLine className="menu-icon" style={{ color: '#FBBF24' }} />
                        <span className="menu-title">Top Rated</span>
                    </div>
                </div>

                <div className="custom-menu-item">
                    <div className="menu-content">
                        <RiGiftLine className="menu-icon" style={{ color: '#8B5CF6' }} />
                        <span className="menu-title">Gift Finder</span>
                    </div>
                </div>

                {/* Hot Deal Banner */}
                <div className="hot-deal">
                    <div className="hot-deal-icon">
                        <RiDiscountPercentLine size={16} />
                    </div>
                    <div>
                        <div className="hot-deal-text">Special Summer Sale</div>
                        <div className="hot-deal-small">Up to 70% off + extra 10%</div>
                    </div>
                </div>

                {/* Store Locator */}
                <div className="custom-menu-item" style={{ borderTop: '1px solid #E5E7EB', marginTop: '8px' }}>
                    <div className="menu-content">
                        <RiStoreLine className="menu-icon" style={{ color: '#6B7280' }} />
                        <span className="menu-title">Find a Store</span>
                        <RiArrowRightSLine size={16} style={{ opacity: 0.5 }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu