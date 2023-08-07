import React from "react";
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  User,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";

export const Navmenu = () => {
  return (
    <Navbar isBordered className="pt-1 sticky">
      <NavbarContent>
        <NavbarBrand>
          <Link href="/">
            <p className="font-bold text-lg">Dashboard</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Popover placement="bottom-end" showArrow={true}>
            <PopoverTrigger>
              <User
                name="Dharmendra Sharma"
                description="Web Developer"
                avatarProps={{
                  src: "https://picsum.photos/200/200",
                }}
              />
            </PopoverTrigger>
            <PopoverContent>
              <div className="px-1 py-2">
                <p>Sign in</p>
                <p>Log out</p>
              </div>
            </PopoverContent>
          </Popover>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
