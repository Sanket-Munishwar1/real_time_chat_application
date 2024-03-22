"use client";

import { Logout } from "@mui/icons-material";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const TopBar = () => {
  const pathname = usePathname();

  const handleLogOut = async () => {
    signOut({ callbackUrl: "/" });
  };

  const { data: session } = useSession()
  const user = session?.user

  return (
    <div className="topbar">
      <Link href="/chats">
        <img src="/assests/logo.png" alt="logo" className="logo" />
      </Link>

      <div className="menu">
        <Link
          href="/chats"
          className={`${
            pathname === "/chats" ? "text-red-1" : ""
          } text-heading4-bold`}
        >
          Chats
        </Link>
        <Link
          href="/contacts"
          className={`${
            pathname === "/contacts" ? "text-red-1" : ""
          } text-heading4-bold`}
        >
          Contacts
        </Link>

        <Logout
          sx={{ color: "#737373", cursor: "pointer" }}
          onClick={handleLogOut}
        />
        <Link href="/profile">
          <img
            src={user?.profileImage || "/assests/person.jpg"}
            alt="profile"
            className="profilePhoto"
          />
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
