import { Box, Tooltip, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import CustomLink from "@/components/link";
interface SidebarItemProps {
  icon: React.ReactNode;
  description: string;
  href: string;
}

const SidebarItem = (props: SidebarItemProps) => {
  const { pathname } = useRouter();
  const isActive = pathname === props.href;
  const bg = useColorModeValue("tooltip.light", "tooltip.dark");
  const colorActive = useColorModeValue("gray.900", "gray.100");

  return (
    <Tooltip bg={bg} label={props.description} hasArrow placement="auto">
      <CustomLink href={props.href}>
        <Box
          cursor="pointer"
          p="2"
          mb="4"
          color={isActive ? colorActive : "gray.500"}
          _hover={{
            color: "gray.100",
            transform: "translateY(-1px)",
            transition: "transform .3s ease-in-out",
          }}
        >
          {props.icon}
        </Box>
      </CustomLink>
    </Tooltip>
  );
};

export default SidebarItem;
