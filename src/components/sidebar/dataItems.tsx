import { Cloud, CodeSimple, Gear, MagnifyingGlass, PuzzlePiece } from "phosphor-react";

export const SidebarDataItems = [
  {
    id: 1,
    icon: <CodeSimple size={24} />,
    description: "Editor",
    href: "/",
  },
  {
    id: 2,
    icon: <Cloud size={24} />,
    description: "Cloud",
    href: "/cloud",
  },
  {
    id: 3,
    icon: <MagnifyingGlass size={24} />,
    description: "Search",
    href: "/search",
  },
  {
    id: 4,
    icon: <PuzzlePiece size={24} />,
    description: "Extensions",
    href: "/extensions",
  },
  {
    id: 5,
    icon: <Gear size={24} />,
    description: "Settings",
    href: "/settings",
  },
];
