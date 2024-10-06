import { useInventoryStore } from "../../stores/inventory-store";
import {
  deleteInventoryItem,
  toggleInventoryItemDisable,
} from "../../utils/inventory";
import { useState } from "react";
import EditItemModal from "../edit-item-modal/edit-item-modal";
import { TInventoryItem } from "../../types/inventory";
import { usePermissionStore } from "../../stores/permission-store";

export default function InventoryTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<null | TInventoryItem>(null);
  const inventory = useInventoryStore((state) => state.inventory);
  const updateInventory = useInventoryStore((state) => state.updateInventory);
  const role = usePermissionStore(state => state.role);

  const handleDelete = (itemId: string) => {
    const newInventory = deleteInventoryItem(inventory, itemId);
    updateInventory(newInventory);
  };

  const handleDisable = (itemId: string) => {
    const newInventory = toggleInventoryItemDisable(inventory, itemId);
    updateInventory(newInventory);
  };

  const handleEdit = (item: TInventoryItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
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
                <button disabled={role === 'user' || item.disabled} onClick={() => handleEdit(item)}>Edit</button>
                <button disabled={role === 'user'} onClick={() => handleDelete(item.id)}>Delete</button>
                <button disabled={role === 'user'} onClick={() => handleDisable(item.id)}>
                  {item.disabled ? "Enable" : "Disable"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedItem && (
        <EditItemModal
          closeModal={closeModal}
          open={isModalOpen}
          item={selectedItem}
          afterClose={() => setSelectedItem(null)}
        />
      )}
    </>
  );
}
