import CustomAlert from "../ui/CustomAlert";

export default function AdminPanelPage() {
  return (
    <>
      <CustomAlert text="Welcome back!" severity="success" />
      <div>
        <h1>Admin panel</h1>
      </div>
    </>
  );
}
