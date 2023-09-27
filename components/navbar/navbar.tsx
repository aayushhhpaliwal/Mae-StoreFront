import React, { useState } from 'react';
import CartDrawer from './CartDrawer';

const Navbar: React.FC = () => {
    const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
    const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);

    return (
        <nav className="navbar">
            <button className="hamburger" onClick={() => setIsMenuDrawerOpen(true)}>☰</button>
            <div className="logo">Logo</div>
            <button className="cart" onClick={() => setIsCartDrawerOpen(true)}>🛒</button>

            {isCartDrawerOpen && <CartDrawer onClose={() => setIsCartDrawerOpen(false)} />}
            {isMenuDrawerOpen && <MenuDrawer onClose={() => setIsMenuDrawerOpen(false)} />}
            
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

interface DrawerProps {
    onClose: () => void;
}

const MenuDrawer: React.FC<DrawerProps> = ({ onClose }) => {
    return (
        <div className="menu-drawer">
            <button className="close-button" onClick={onClose}>X</button>
            <div className='NavMenus'>
            <a href="#">M1</a>
            <a href="#">M2</a>
            <a href="#">Brand Mission</a>
            <a href="#">Material Innovation</a>
            </div>

            <style jsx>{`
                .menu-drawer {
                    position: fixed;
                    left: 0;
                    top: 0;
                    height: 100%;
                    width: 300px;
                    background-color: #fff;
                    border-right: 1px solid #ccc;
                    padding: 20px;
                    overflow-y: auto;
                    z-index: 1000;
                }
                .NavMenus{
                    margin-top:30px;
                }
                .close-button {
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    background-color: #e74c3c;
                    color: #fff;
                    border: none;
                    border-radius: 4px;
                    padding: 5px 10px;
                    cursor: pointer;
                    font-size: 18px;
                }
                .menu-drawer a {
                    display: block;
                    margin: 15px 0;
                    color: #333;
                    text-decoration: none;
                }
                .menu-drawer a:hover {
                    text-decoration: underline;
                }
            `}</style>
        </div>
    );
};

export default Navbar;
