import React from "react";
import { Box, Divider, Flex, useColorModeValue } from "@chakra-ui/react";
import SidebarItem from "./item";

import { CodeSimple, Gear, MagnifyingGlass, PuzzlePiece } from "phosphor-react";
import AuthDropdown from "../auth";
import { SidebarDataItems } from "./dataItems";

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
          {SidebarDataItems.map((item) => (
            <SidebarItem key={item.id} {...item} />
          ))}
          <Divider mb="3" />
          <AuthDropdown />
        </Box>
      </Flex>
    </Box>
  );
};

export default SidebarContent;
