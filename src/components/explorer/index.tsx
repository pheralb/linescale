import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import ExplorerContent from "./content";

interface ExplorerProps {
  children: React.ReactNode;
}

const Explorer = (props: ExplorerProps) => {
  const bg = useColorModeValue("explorer.light", "explorer.dark");
  return (
    <Box as="section" minH="100vh">
      <ExplorerContent />
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Box as="main" p="4">
          {props.children}
        </Box>
      </Box>
    </Box>
  );
};

export default Explorer;
