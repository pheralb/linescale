import React from "react";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import SidebarItem from "./item";

import { CodeSimple, Gear, MagnifyingGlass, PuzzlePiece } from "phosphor-react";

const SidebarContent = () => {
  const bg = useColorModeValue("bg.light", "bg.dark");
  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      overflowX="hidden"
      overflowY="auto"
      w="62px"
      bg={bg}
    >
      <Flex
        direction="column"
        as="nav"
        aria-label="Navbar"
        justifyContent="center"
        alignItems="center"
      >
        <Box mt="4">
          <SidebarItem
            icon={<CodeSimple size={24} />}
            description="Editor"
            href="/"
          />
          <SidebarItem
            icon={<MagnifyingGlass size={24} />}
            description="Search"
            href="/search"
          />
          <SidebarItem
            icon={<PuzzlePiece size={24} />}
            description="Extensions"
            href="/extensions"
          />
          <SidebarItem
            icon={<Gear size={24} />}
            description="Settings"
            href="/"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default SidebarContent;
