import { Input, InputNumber, Modal } from "antd";
import { TInventoryItem } from "../../types/inventory";
import { useState } from "react";
import { editInventoryItem, parseCurrency } from "../../utils/inventory";
import { useInventoryStore } from "../../stores/inventory-store";

interface IEditItemModalProps {
  item: TInventoryItem;
  open: boolean;
  closeModal: () => void;
  afterClose: () => void;
}

export default function EditItemModal(props: IEditItemModalProps) {
  const [category, setCategory] = useState(props.item.category);
  const [price, setPrice] = useState(parseCurrency(props.item.price));
  const [quantity, setQuanity] = useState(props.item.quantity);
  const [value, setValue] = useState(parseCurrency(props.item.value));
  const inventory = useInventoryStore((state) => state.inventory);
  const updateInventory = useInventoryStore((state) => state.updateInventory);

  const handleOk = () => {
    const newInventory = editInventoryItem(inventory, {
      ...props.item,
      category,
      price: `$${price}`,
      quantity,
      value: `$${value}`,
    });

    updateInventory(newInventory);

    props.closeModal();
  };

  return (
    <Modal
      title="Edit Product"
      open={props.open}
      onOk={handleOk}
      onCancel={props.closeModal}
      afterClose={props.afterClose}
    >
      <label>
        Catogory
        <Input value={category} onChange={(e) => setCategory(e.target.value)} />
      </label>

      <label>
        Price
        <InputNumber
          value={price}
          min={0}
          onChange={(e) => setPrice(e || 0)}
          prefix="$"
        />
      </label>

      <label>
        Quantity
        <InputNumber value={quantity} min={0} onChange={(e) => setQuanity(e || 0)} />
      </label>

      <label>
        Value
        <InputNumber
          value={value}
          min={0}
          onChange={(e) => setValue(e || 0)}
          prefix="$"
        />
      </label>
    </Modal>
  );
}
