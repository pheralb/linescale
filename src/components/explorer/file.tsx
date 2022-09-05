import { HStack, Text } from "@chakra-ui/react";
import Document from "@/components/icons/document";

interface FileProps {
  title: string;
  onClick?: () => void;
}

const File = (props: FileProps) => {
  return (
    <HStack
      spacing={3}
      cursor="pointer"
      pl="1"
      mb="3"
      onClick={props.onClick}
    >
      <Document width={18} height={18} />
      <Text>{props.title}</Text>
    </HStack>
  );
};

export default File;
