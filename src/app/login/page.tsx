import { getServerSession } from "next-auth";
import Form from "./form";
import { redirect } from "next/navigation";
import CustomAlert from "../ui/CustomAlert";

export default async function LoginPage() {
  const session = await getServerSession();
  if (session) {
    redirect("/admin-panel");
  }
  return (
    <>
      <CustomAlert text="Logout successfull" severity="warning" />
      <Form />
    </>
  );
}
