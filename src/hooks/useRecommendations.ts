import { foodItems, todaysSpecialMenu } from "../data";
import { BasketItem } from "./useBasket";

const getItemCategory = (name: string): string => {
  const foundItem = foodItems.find(item => item.name === name);
  if (foundItem) {
    if (foundItem.category === "salad") return "starter";
    if (["burger", "pizza", "pasta"].includes(foundItem.category)) return "main";
    if (foundItem.category === "dessert") return "dessert";
    if (foundItem.category === "drinks") return "drink";
  }
  
  const inAppetizers = todaysSpecialMenu.appetizers.some(i => i.name === name);
  if (inAppetizers) return "starter";
  
  const inMains = todaysSpecialMenu.mains.some(i => i.name === name);
  if (inMains) return "main";
  
  const inDesserts = todaysSpecialMenu.desserts.some(i => i.name === name);
  if (inDesserts) return "dessert";
  
  return "other";
};

export function useRecommendations(basket: BasketItem[]) {
  const getRecommendation = () => {
    let hasStarter = false;
    let hasMain = false;
    let hasDessert = false;
    let hasDrink = false;
    
    basket.forEach(item => {
      const cat = getItemCategory(item.name);
      if (cat === "starter") hasStarter = true;
      if (cat === "main") hasMain = true;
      if (cat === "dessert") hasDessert = true;
      if (cat === "drink") hasDrink = true;
    });
    
    if (hasMain && hasStarter) {
      if (!hasDessert) {
        return {
          name: "Tiramisu de la Maison à la Pistache",
          price: 9.50,
          image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=200",
          description: "Crème légère au mascarpone, brisures de pistache et café.",
          reason: "Le dessert idéal pour couronner votre entrée et votre plat !"
        };
      }
      if (!hasDrink) {
        return {
          name: "Cocktail Signature Le Blend",
          price: 12.00,
          image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=200",
          description: "Infusé d'agrumes, romarin et élixir de fruits rouges.",
          reason: "Une boisson signature rafraîchissante pour sublimer votre repas."
        };
      }
    }
    
    if (hasMain && !hasStarter) {
      return {
        name: "Bruschetta de Tomates et Basilic",
        price: 7.90,
        image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&q=80&w=200",
        description: "Pain frotté à l'ail, tomates fraîches, basilic et huile d'olive.",
        reason: "Que diriez-vous d'une entrée légère avant votre plat ?"
      };
    }
    
    if (!hasMain && (hasStarter || hasDessert || hasDrink)) {
      return {
        name: "Pizza Quatre Fromages",
        price: 19.90,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=200",
        description: "Mozzarella di bufala, gorgonzola, chèvre sauvage et parmesan.",
        reason: "Laissez-vous tenter par l'un de nos plats phares cuits au feu de bois !"
      };
    }
    
    if (!hasDrink) {
      return {
        name: "Limonade Artisanale Framboise",
        price: 7.50,
        image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&q=80&w=200",
        description: "Citron jaune bio pressé, coulis de framboises fraîches.",
        reason: "Une touche de fraîcheur fruitée artisanale !"
      };
    }
    
    return null;
  };

  return { getRecommendation };
}
