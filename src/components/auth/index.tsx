import { signIn, signOut, useSession } from "next-auth/react";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";
import { Cube, GithubLogo, Plus, SignOut, Star } from "phosphor-react";
import Avatar from "boring-avatars";
import SidebarItem from "../sidebar/item";

const AuthDropdown = () => {
  const { data, status } = useSession();
  const bg = useColorModeValue("bg.light", "bg.dark");

  const handleSignIn = async () => {
    try {
      await signIn("github", {
        callbackUrl: "/dashboard",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut({
        callbackUrl: "/",
      });
    } catch (error) {
      console.error(error);
    }
  };

  if (status === "authenticated") {
    return (
      <SidebarItem
        icon={<Avatar variant="beam" size={22} name={data.user?.name} />}
        description={data.user?.name}
        href="/user"
      />
    );
  }

  return (
    <SidebarItem
      icon={<GithubLogo size={24}/>}
      description="Sign in with Github"
      href="/signin"
    />
  );
};

export default AuthDropdown;
