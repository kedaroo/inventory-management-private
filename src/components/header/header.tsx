import { Switch } from "antd";
import { usePermissionStore } from "../../stores/permission-store";

export default function Header() {
  const { role, setRole } = usePermissionStore();

  const handleChange = (checked: boolean) => {
    if (checked) setRole("admin");
    else setRole("user");
  };

  return (
    <header className="border-b p-2 flex items-center gap-2 justify-end">
      <div>
        User
      </div>
      <Switch value={role === "admin"} onChange={handleChange} />
      <div>
        Admin
      </div>
    </header>
  );
}
