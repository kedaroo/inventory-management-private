export type TInventoryItem = {
  name: string;
  category: string;
  value: string;
  quantity: number;
  price: string;
};

export type TInventoryStats = {
  totalProducts: number;
  totalStoreValue: number;
  outOfStockProducts: number;
  numOfCategories: number;
};
