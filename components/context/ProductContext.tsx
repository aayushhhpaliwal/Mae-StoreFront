// contexts/ProductContext.tsx

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  quantity: number;
}

interface ProductContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const ProductProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    // Add logic to add product to cart
  };

  const removeFromCart = (productId: number) => {
    // Add logic to remove product from cart
  };

  const updateQuantity = (productId: number, quantity: number) => {
    // Add logic to update product quantity in cart
  };

  return (
    <ProductContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
};
