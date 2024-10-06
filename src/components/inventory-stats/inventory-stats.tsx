import { useInventoryStore } from "../../stores/inventory-store";
import ShoppingCard from "../../assets/shopping-cart.svg";
import OutOfStock from "../../assets/out-of-stock.svg";
import Dollar from "../../assets/dollar.svg";
import Shapes from "../../assets/shapes.svg";
import StatCard from "./stat-card";

export default function InventoryStats() {
  const inventoryStats = useInventoryStore((state) => state.inventoryStats);

  return (
    <div className="flex flex-col gap-4 my-4">
      <h2 className="text-2xl font-semibold">Inventory Stats</h2>

      <div className="flex items-center gap-4">
        <StatCard
          icon={<img src={ShoppingCard} alt="shopping cart" className="w-6" />}
          title="Total product"
          value={inventoryStats.totalProducts}
        />
        {/* TODO: add comma in the formatting use internationalization lib */}
        <StatCard
          icon={<img src={Dollar} alt="dollar icon" className="w-6" />}
          title="Total store value"
          value={inventoryStats.totalStoreValue}
        />
        <StatCard
          icon={<img src={OutOfStock} alt="out of stock" className="w-6" />}
          title="Out of stock"
          value={inventoryStats.outOfStockProducts}
        />
        <StatCard
          icon={<img src={Shapes} alt="shapes" className="w-6" />}
          title="No. of categories"
          value={inventoryStats.numOfCategories}
        />
      </div>
    </div>
  );
}
