import React from "react";
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  User,
} from "@nextui-org/react";

export const Navmenu = () => {
  return (
    <Navbar isBordered className="mb-8 pt-1 sticky">
      <NavbarContent>
        <NavbarBrand>
          <Link href="/">
            <p className="font-bold text-lg">Dashboard</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="./profile">
            <User
              name="Dharmendra Sharma"
              description="Web Developer"
              avatarProps={{
                src: "https://picsum.photos/300/300",
              }}
            />
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
