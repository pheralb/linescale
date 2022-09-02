import { Box } from "@chakra-ui/react";
import React from "react";

interface SidebarItemProps {
  icon: React.ReactNode;
  description: string;
  href: string;
}

const SidebarItem = (props: SidebarItemProps) => {
  return (
    <Box
      cursor="pointer"
      p="2"
      mb="4"
      color="gray.500"
      _hover={{
        color: "gray.100",
        transform: "translateY(-1px)",
        transition: "transform .3s ease-in-out",
      }}
    >
      {props.icon}
    </Box>
  );
};

export default SidebarItem;
