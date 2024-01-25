"use client";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, FormControl, Alert, Collapse } from "@mui/material";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();
  const [errors, setErrors] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (response?.error) {
      setErrors(response.error);
    } else {
      router.push("/admin-panel?session=login-success");
      router.refresh();
    }
  };

  return (
    <>
      <Collapse
        in={errors ? true : false}
        sx={{ position: "absolute", width: "100%" }}
      >
        <Alert severity="error">{errors}</Alert>
      </Collapse>
      <Box mt={5} display="flex" justifyContent="center">
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
    </>
  );
}
