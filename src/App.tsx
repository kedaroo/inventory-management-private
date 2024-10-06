import { useEffect } from "react";
import { useInventoryStore } from "./stores/inventory-store";
import InventoryStats from "./components/inventory-stats/inventory-stats";
import InventoryTable from "./components/inventory-table/inventory-table";
import "./App.css";

function App() {
  const fetchInventory = useInventoryStore((state) => state.fetchInventory);

  useEffect(() => {
    fetchInventory();
  }, [fetchInventory]);

  return (
    <>
      <InventoryStats />
      <InventoryTable />
    </>
  );
}

export default App;
