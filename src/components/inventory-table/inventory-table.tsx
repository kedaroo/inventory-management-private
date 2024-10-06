import { useInventoryStore } from "../../stores/inventory-store";
import {
  EditOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import {
  deleteInventoryItem,
  toggleInventoryItemDisable,
} from "../../utils/inventory";
import { useState } from "react";
import EditItemModal from "../edit-item-modal/edit-item-modal";
import { TInventoryItem } from "../../types/inventory";
import { usePermissionStore } from "../../stores/permission-store";
import { Button } from "antd";

export default function InventoryTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<null | TInventoryItem>(null);
  const inventory = useInventoryStore((state) => state.inventory);
  const updateInventory = useInventoryStore((state) => state.updateInventory);
  const role = usePermissionStore((state) => state.role);

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
      <table className="border table-auto min-w-full" cellPadding={10}>
        <thead>
          <tr className="*:text-left border-b">
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
            <tr key={index} className={`
              border-b 
              ${item.disabled ? 'text-gray-400' : ''}
            `}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.value}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td className="flex gap-2">
                <Button
                  disabled={role === "user" || item.disabled}
                  type="primary"
                  shape="circle"
                  className="bg-green-500"
                  icon={<EditOutlined />}
                  onClick={() => handleEdit(item)}
                />

                <Button
                  disabled={role === "user"}
                  type="primary"
                  shape="circle"
                  className="bg-purple-500"
                  icon={
                    item.disabled ? <EyeInvisibleOutlined /> : <EyeOutlined />
                  }
                  onClick={() => handleDisable(item.id)}
                />

                <Button
                  disabled={role === "user"}
                  type="primary"
                  shape="circle"
                  className="bg-red-500"
                  icon={<DeleteOutlined />}
                  onClick={() => handleDelete(item.id)}
                />
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
