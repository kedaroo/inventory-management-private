import { Switch } from "antd";
import { usePermissionStore } from "../../stores/permission-store";

export default function Header() {
  const { role, setRole } = usePermissionStore();

  const handleChange = (checked: boolean) => {
    if (checked) setRole("admin");
    else setRole("user");
  };

  return (
    <header>
      User
      <Switch value={role === "admin"} onChange={handleChange} />
      Admin
    </header>
  );
}
