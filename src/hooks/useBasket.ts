import { useState } from "react";
import { log } from "../utils/logger";

export interface BasketItem {
  name: string;
  price: number;
  qty: number;
}

export function useBasket() {
  const [basket, setBasket] = useState<BasketItem[]>([]);

  const handleAddToBasket = (name: string, price: number, onSuccess?: () => void) => {
    log.dev(`Ajout au panier: ${name}`);
    setBasket((prev) => {
      const existing = prev.find((item) => item.name === name);
      if (existing) {
        return prev.map((item) =>
          item.name === name ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { name, price, qty: 1 }];
    });
    if (onSuccess) onSuccess();
  };

  const handleRemoveFromBasket = (name: string) => {
    setBasket((prev) => {
      const existing = prev.find((item) => item.name === name);
      if (existing && existing.qty > 1) {
        return prev.map((item) =>
          item.name === name ? { ...item, qty: item.qty - 1 } : item
        );
      }
      return prev.filter((item) => item.name !== name);
    });
  };

  const clearBasket = () => {
    setBasket([]);
  };

  const totalAmount = basket.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalItemsCount = basket.reduce((sum, item) => sum + item.qty, 0);

  return {
    basket,
    handleAddToBasket,
    handleRemoveFromBasket,
    clearBasket,
    totalAmount,
    totalItemsCount
  };
}
