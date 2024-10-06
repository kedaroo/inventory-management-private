import { useInventoryStore } from "../../stores/inventory-store";
import { deleteInventoryItem } from "../../utils/inventory";

export default function InventoryTable() {
  const inventory = useInventoryStore((state) => state.inventory);
  const updateInventory = useInventoryStore((state) => state.updateInventory);

  const handleDelete = (itemId: string) => {
    const newInventory = deleteInventoryItem(inventory, itemId)
    updateInventory(newInventory)
  }

  // const handleOnDisable = () => {}
  // const handleOnDelete = () => {}

  return (
    <table border={1} cellPadding={10} cellSpacing={0}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Value ($)</th>
          <th>Quantity</th>
          <th>Price ($)</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {inventory.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>{item.value}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
            <td>
              <button>Edit</button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
              <button>Disable</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
