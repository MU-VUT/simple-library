"use client";

import { Alert, AlertColor, Collapse } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CustomAlert({
  text,
  severity,
}: {
  text: string;
  severity: AlertColor;
}) {
  const searchParams = useSearchParams();

  const [success, setSuccess] = useState(false);

  const onLoadEffect = () => {
    const params = searchParams.get("session");
    if (params == "logout-success" || params == "login-success") {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }
  };
  useEffect(onLoadEffect, [searchParams]);

  return (
    <Collapse
      in={success ? true : false}
      sx={{ position: "absolute", width: "100%" }}
    >
      <Alert severity={severity}>{text}</Alert>
    </Collapse>
  );
}
