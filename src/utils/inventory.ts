import { TInventoryItem } from "../types/inventory";

const parseCurrency = (currency: string): number => {
  return parseFloat(currency.replace(/[$,]/g, ''));
};

export const calculateInventoryStats = (inventory: TInventoryItem[]) => {
  const totalProducts = inventory.length;
  
  // calculating total store value
  const totalStoreValue = inventory.reduce((acc, item) => {
    const numericValue = parseCurrency(item.value);
    return acc + numericValue * item.quantity;
  }, 0);

  // calculating out of stock products
  const outOfStockProducts = inventory.filter(item => item.quantity === 0).length;

  // calculating unique product categories
  const numOfCategories = new Set(inventory.map(item => item.category)).size;

  return {
    totalProducts,
    totalStoreValue,
    outOfStockProducts,
    numOfCategories,
  };
};