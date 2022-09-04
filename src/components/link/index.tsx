import React from "react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

interface CustomLink {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}

const CustomLink = (props: CustomLink) => {
  return (
    <NextLink href={props.href} passHref>
      <Link isExternal={props.external}>{props.children}</Link>
    </NextLink>
  );
};

export default CustomLink;
