"use client";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, FormControl } from "@mui/material";
import { FormEvent } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    if (!response?.error) {
      router.push("/admin-panel");
      router.refresh();
    }
  };

  return (
    <Box mt={15} display="flex" justifyContent="center">
      <form onSubmit={handleSubmit}>
        <FormControl>
          <TextField name="email" label="Email" variant="filled"></TextField>
          <TextField
            name="password"
            label="Password"
            type="password"
            variant="filled"
          ></TextField>
          <Button type="submit">Login</Button>
        </FormControl>
      </form>
    </Box>
  );
}
