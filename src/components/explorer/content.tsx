import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";

const ExplorerContent = () => {
  const bg = useColorModeValue("explorer.light", "explorer.dark");
  return (
    <Box
      pos="fixed"
      top="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg={bg}
      w="60"
    >
      <Flex direction="column" p="5" aria-label="Explorer files">
        <Text>Explorer</Text>
      </Flex>
    </Box>
  );
};

export default ExplorerContent;
