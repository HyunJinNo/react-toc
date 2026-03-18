import type { Metadata } from "next";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "./globals.css";
import "nextra-theme-docs/style.css";
import "@hyunjinno/react-toc/style.css";

export const metadata: Metadata = {
  title: {
    default: "react-toc",
    template: "%s | react-toc",
  },
  authors: [{ name: "HyunJinNo", url: "https://github.com/HyunJinNo" }],
};

const navbar = (
  <Navbar
    logo={<b>react-toc</b>}
    // ... Your additional navbar options
  />
);

const footer = (
  <Footer className="flex flex-row gap-1">
    © {new Date().getFullYear()}
    <a className="hover:underline" href="https://github.com/HyunJinNo">
      HyunJinNo.
    </a>
  </Footer>
);

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      // Not required, but good for SEO
      lang="ko"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
