import { getServerSession } from "next-auth";
import Form from "./form";
import { redirect } from "next/navigation";
import CustomAlert from "../ui/CustomAlert";
import { Stack, Box, Link, Typography } from "@mui/material";

export default async function LoginPage() {
  const session = await getServerSession();
  if (session) {
    redirect("/admin-panel");
  }
  return (
    <>
      <CustomAlert text="Logout successfull" severity="warning" />
      <Box mt={15} display="flex" justifyContent="center">
        <Stack>
          <Typography variant="h4">
            Toto přihlášení je pouze pro knihovníky!
          </Typography>
          <Typography margin="auto" pt={3}>
            Pokud nejste knihovník, prosím vyberte si knihu v{" "}
            <Link href="/library">senznamu</Link>.
          </Typography>
        </Stack>
      </Box>
      <Form />
    </>
  );
}
