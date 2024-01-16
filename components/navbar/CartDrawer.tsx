import React from 'react';

interface CartDrawerProps {
    onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ onClose }) => {
    return (
        <div className="cart-drawer">
            <button className="close-button" onClick={onClose}>X</button>
            <div className="cart-contents">
                Cart Contents He
            </div>
            
            <style jsx>{`
                .cart-drawer {
                    position: fixed;
                    right: 1;
                    top: 0;
                    height: 100%;
                    width: 300px;
                    background-color: #fff;
                    border-left: 1px solid #ccc;
                    padding: 21px;
                    overflow-y: auto;
                    z-index: 1000;
                }

                .close-button {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background-color: #e74c3c;
                    color: #fff;
                    border: none;
                    border-radius: 4px;
                    padding: 5px 10px;
                    cursor: pointer;
                    font-size: 18px;
                    line-height: 1;
                    font-weight: bold;
                }

                .close-button:hover {
                    background-color: #c0392b;
                }

                .cart-contents {
                    margin-top: 18px;
                }
            `}</style>
        </div>
    );
};

export default CartDrawer;
