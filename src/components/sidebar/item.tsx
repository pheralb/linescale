import { Box, Tooltip, useColorModeValue } from "@chakra-ui/react";
interface SidebarItemProps {
  icon: React.ReactNode;
  description: string;
  href: string;
}

const SidebarItem = (props: SidebarItemProps) => {
  const bg = useColorModeValue("tooltip.light", "tooltip.dark");
  return (
    <Tooltip bg={bg} label={props.description} hasArrow placement='auto'>
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
    </Tooltip>
  );
};

export default SidebarItem;
