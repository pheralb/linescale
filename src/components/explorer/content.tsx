import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";

interface ExplorerContentProps {
  children?: React.ReactNode;
}

const ExplorerContent = (props : ExplorerContentProps) => {
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
        <Text mb="4">Explorer</Text>
        {props.children}
      </Flex>
    </Box>
  );
};

export default ExplorerContent;
