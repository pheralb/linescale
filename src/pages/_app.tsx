import type { AppType } from "next/dist/shared/lib/utils";

// Chakra & Styles =>
import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/globals.css";
import theme from "@/styles/theme";

// Next Auth =>
import { SessionProvider } from "next-auth/react";

// Next SEO =>
import { DefaultSeo } from "next-seo";
import nextSeoConfig from "next-seo.config";
import Sidebar from "@/components/sidebar";

const MyApp: AppType = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <DefaultSeo {...nextSeoConfig} />
      <ChakraProvider theme={theme}>
        <Sidebar>
          <Component {...pageProps} />
        </Sidebar>
      </ChakraProvider>
    </SessionProvider>
  );
};

export default MyApp;
