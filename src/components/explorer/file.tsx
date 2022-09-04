import { HStack, Text } from "@chakra-ui/react";
import CodeBlue from "@/components/icons/codeBlue";

interface FileProps {
  title: string;
  onClick?: () => void;
}

const File = (props: FileProps) => {
  return (
    <HStack
      cursor="pointer"
      p="2"
      mb="2"
      borderWidth="1px"
      onClick={props.onClick}
    >
      <CodeBlue width={24} height={24} />
      <Text>{props.title}</Text>
    </HStack>
  );
};

export default File;
