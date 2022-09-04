export default {
  title: "Editor",
  titleTemplate: "%s - Linescale",
  description:
    "A web-based text editor built with Nextjs, Prisma & Planetscale.",
  defaultTitle: "linescale",
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/icons/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/icons/apple-touch-icon-180x180.png",
      sizes: "180x180",
    },
    {
      rel: "apple-touch-icon",
      href: "/icons/apple-touch-icon-152x152.png",
      sizes: "152x152",
    },
    {
      rel: "apple-touch-icon",
      href: "/icons/apple-touch-icon-114x114.png",
      sizes: "114x114",
    },
    {
      rel: "manifest",
      href: "/manifest.json",
    },
    {
      rel: "preload",
      href: "/fonts/inter.woff2",
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
    {
      rel: "preload",
      href: "/fonts/cascadia.woff2",
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
  ],
  openGraph: {
    site_name: "Linescale",
    url: "https://linescale.vercel.app/",
    type: "website",
    locale: "en_IE",
    images: [
      {
        url: "/images/banner.png",
        width: 1920,
        height: 1080,
        type: "image/png",
      },
    ],
  },
  twitter: {
    handle: "@pheralb_",
    site: "@pheralb_",
    cardType: "summary_large_image",
  },
};
