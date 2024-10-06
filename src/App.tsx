import { useEffect } from "react";
import { useInventoryStore } from "./stores/inventory-store";
import InventoryStats from "./components/inventory-stats/inventory-stats";
import InventoryTable from "./components/inventory-table/inventory-table";
import Header from "./components/header/header";
import "./App.css";

function App() {
  const fetchInventory = useInventoryStore((state) => state.fetchInventory);

  useEffect(() => {
    fetchInventory();
  }, [fetchInventory]);

  return (
    <>
      <Header />
      <div className="container p-4">
        <InventoryStats />
        <InventoryTable />
      </div>
    </>
  );
}

export default App;
