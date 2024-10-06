import { TInventoryItem } from "../types/inventory";

export const parseCurrency = (currency: string): number => {
  return parseFloat(currency.replace(/[$,]/g, ""));
};

export const calculateInventoryStats = (inventory: TInventoryItem[]) => {
  // filter out disabled items
  const activeInventory = inventory.filter((item) => !item.disabled);

  const totalProducts = activeInventory.length;

  // calculating total store value
  const totalStoreValue = activeInventory.reduce((acc, item) => {
    const numericValue = parseCurrency(item.value);
    return acc + numericValue * item.quantity;
  }, 0);

  // calculating out of stock products
  const outOfStockProducts = activeInventory.filter(
    (item) => item.quantity === 0
  ).length;

  // calculating unique product categories
  const numOfCategories = new Set(activeInventory.map((item) => item.category))
    .size;

  return {
    totalProducts,
    totalStoreValue,
    outOfStockProducts,
    numOfCategories,
  };
};

export const deleteInventoryItem = (
  inventory: TInventoryItem[],
  itemId: string
): TInventoryItem[] => {
  return inventory.filter((item) => item.id !== itemId);
};

export const toggleInventoryItemDisable = (
  inventory: TInventoryItem[],
  itemId: string
): TInventoryItem[] => {
  return inventory.map((item) => {
    if (item.id === itemId) return { ...item, disabled: !item.disabled };

    return item;
  });
};

export const editInventoryItem = (
  inventory: TInventoryItem[],
  updatedItem: TInventoryItem
): TInventoryItem[] => {
  return inventory.map((item) => {
    if (item.id === updatedItem.id) return updatedItem;

    return item;
  });
};
