import React from 'react';

interface CartDrawerProps {
    onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ onClose }) => {
    return (
        <div className="drawer">
            Cart Contents Here
            <button onClick={onClose}>Close</button>

            <style jsx>{`
                .drawer {
                    position: fixed;
                    right: 0;
                    top: 0;
                    height: 100%;
                    width: 300px;
                    background-color: #fff;
                    border-left: 1px solid #ccc;
                    padding: 20px;
                    overflow-y: auto;
                    z-index: 1000;
                }
            `}</style>
        </div>
    );
};

export default CartDrawer;
