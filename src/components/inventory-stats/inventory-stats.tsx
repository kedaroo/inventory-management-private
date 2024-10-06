import { useInventoryStore } from "../../stores/inventory-store";

export default function InventoryStats() {
  const inventoryStats = useInventoryStore((state) => state.inventoryStats);

  return (
    <div>

      <div>
        <div>
          Total Product
        </div>

        <div>
          {inventoryStats.totalProducts}
        </div>
      </div>

      <div>
        <div>
          Total Store Value
        </div>

        <div>
          {inventoryStats.totalStoreValue}
        </div>
      </div>

      <div>
        <div>
          Out of stock
        </div>

        <div>
          {inventoryStats.outOfStockProducts}
        </div>
      </div>

      <div>
        <div>
          No. of Category
        </div>

        <div>
          {inventoryStats.numOfCategories}
        </div>
      </div>
    </div>
  );
}
