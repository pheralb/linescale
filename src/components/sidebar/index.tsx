import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import SidebarContent from "./content";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar = (props: SidebarProps) => {
  const bg = useColorModeValue("bg.light", "bg.dark");
  return (
    <Box as="section" bg={bg} minH="100vh">
      <SidebarContent />
      <Box ml={{ base: 0, md: "63px" }} transition=".3s ease">
        <Box as="main">{props.children}</Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
