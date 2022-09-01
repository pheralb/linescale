import type { AppType } from "next/dist/shared/lib/utils";

// Styles =>
import "@/styles/globals.css";

// Next Auth =>
import { SessionProvider } from "next-auth/react";

// Next SEO =>
import { DefaultSeo } from "next-seo";
import nextSeoConfig from "next-seo.config";

const MyApp: AppType = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <DefaultSeo {...nextSeoConfig} />
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default MyApp;
