import { Box } from "@chakra-ui/react";
import ExplorerContent from "./content";
interface ExplorerProps {
  children: React.ReactNode;
}

const Explorer = (props: ExplorerProps) => {
  return (
    <Box as="section" minH="100vh">
      <ExplorerContent />
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Box as="main">
          {props.children}
        </Box>
      </Box>
    </Box>
  );
};

export default Explorer;