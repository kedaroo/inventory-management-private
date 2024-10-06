import { TInventoryItem } from "../types/inventory";

const INVENTORY_ENDPOINT =
  "https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory";

const RESPONSE_STATUS = {
  tooManyRequests: 429,
};

const MOCK_INVENTORY: TInventoryItem[] = [
  {
    name: "Bluetooth",
    category: "Electronic",
    value: "$150",
    quantity: 5,
    price: "$40",
  },
  {
    name: "Edifier M43560",
    category: "Electronic",
    value: "$0",
    quantity: 0,
    price: "$0",
  },
  {
    name: "Sony 4k ultra 55 inch TV",
    category: "Electronic",
    value: "$1190",
    quantity: 17,
    price: "$70",
  },
  {
    name: "Samsumg 55 inch TV",
    category: "Electronic",
    value: "$600",
    quantity: 50,
    price: "$12",
  },
  {
    name: "samsumg S34 Ultra",
    category: "phone",
    value: "$0",
    quantity: 0,
    price: "$0",
  },
];

export const getInventory = async () => {
  try {
    const res = await fetch(INVENTORY_ENDPOINT, {
      headers: {
        "Cache-Control": "max-age=3600, public",
      },
    });

    if (res.status === RESPONSE_STATUS.tooManyRequests) {
      throw new Error("Too Many Requests");
    }

    const json = await res.json();

    return json;
  } catch {
    return MOCK_INVENTORY;
  }
};
