export type TRawInventoryItem = {
  name: string;
  category: string;
  value: string;
  quantity: number;
  price: string;
};

export type TInventoryItem = TRawInventoryItem & {
  id: string;
  disabled: boolean;
};

export type TInventoryStats = {
  totalProducts: number;
  totalStoreValue: number;
  outOfStockProducts: number;
  numOfCategories: number;
};
