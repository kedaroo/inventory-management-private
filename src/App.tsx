import { useEffect } from "react";
import { useInventoryStore } from "./stores/inventory-store";
import InventoryStats from "./components/inventory-stats/inventory-stats";
import InventoryTable from "./components/inventory-table/inventory-table";
import Header from "./components/header/header";

function App() {
  const fetchInventory = useInventoryStore((state) => state.fetchInventory);

  useEffect(() => {
    fetchInventory();
  }, [fetchInventory]);

  return (
    <>
      <Header />
      <div className=" p-4">
        <InventoryStats />
        <InventoryTable />
      </div>
    </>
  );
}

export default App;
