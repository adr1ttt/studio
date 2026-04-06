"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import type { MerchandiseItem } from "@/lib/types";

export interface CartItem extends MerchandiseItem {
  cartItemId: string; // unique ID so we can have multiple of the same item
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: MerchandiseItem) => void;
  removeFromCart: (cartItemId: string) => void;
  clearCart: () => void;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Load from localStorage on mount
    const saved = localStorage.getItem("fcb_cart");
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("fcb_cart", JSON.stringify(items));
    }
  }, [items, isMounted]);

  const addToCart = (item: MerchandiseItem) => {
    const newItem: CartItem = {
      ...item,
      cartItemId: Math.random().toString(36).substr(2, 9),
    };
    setItems((prev) => [...prev, newItem]);
  };

  const removeFromCart = (cartItemId: string) => {
    setItems((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const clearCart = () => {
    setItems([]);
  };

  // Extract numerical value from "₹1499"
  const totalPrice = items.reduce((total, item) => {
    const num = parseInt(item.price.replace(/[^\d]/g, ""), 10);
    return total + (isNaN(num) ? 0 : num);
  }, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
