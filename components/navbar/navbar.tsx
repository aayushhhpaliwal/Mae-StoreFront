import React, { useState } from 'react';
import CartDrawer from './CartDrawer';

const Navbar: React.FC = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <nav className="navbar">
            <button className="hamburger">☰</button>
            <div className="logo">Logo</div>
            <button className="cart" onClick={() => setIsDrawerOpen(true)}>🛒</button>

            {isDrawerOpen && <CartDrawer onClose={() => setIsDrawerOpen(false)} />}
            
            <style jsx>{`
                .navbar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px 30px;
                    background-color: #333;
                    color: white;
                }
                .logo {
                    font-size: 24px;
                }
                .hamburger, .cart {
                    font-size: 20px;
                    background: none;
                    border: none;
                    cursor: pointer;
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
