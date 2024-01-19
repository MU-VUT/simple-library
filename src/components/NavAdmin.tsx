"use client";
import MenuItem from "@mui/material/MenuItem";
import MuiLink from "@mui/material/Link";
import React from "react";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { AccountCircle } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import { signOut } from "next-auth/react";

export default function NavAdmin({
  sessionActive,
}: {
  sessionActive: boolean;
}) {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open admin panel">
        <IconButton
          size="large"
          aria-label="account of admin"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenUserMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {sessionActive && (
          <div>
            <MenuItem>
              <MuiLink
                underline="none"
                sx={{ width: "100%" }}
                href="/admin-panel"
              >
                Admin panel
              </MuiLink>
            </MenuItem>
            <MenuItem>
              <MuiLink
                underline="none"
                sx={{ width: "100%" }}
                href="/admin-panel/borrow"
              >
                Výpůjčka/vrácení knihy
              </MuiLink>
            </MenuItem>

            <MenuItem>
              <MuiLink
                underline="none"
                sx={{ width: "100%" }}
                href="/admin-panel/edit-library"
              >
                Editace knihovny
              </MuiLink>
            </MenuItem>
            <MenuItem>
              <span
                onClick={() => {
                  signOut();
                }}
              >
                Logout
              </span>
            </MenuItem>
          </div>
        )}
        {!sessionActive && (
          <MenuItem>
            <MuiLink underline="none" sx={{ width: "100%" }} href="/login">
              Admin login
            </MuiLink>
          </MenuItem>
        )}
      </Menu>
    </Box>
  );
}
