import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import Link from "next/link";

export const metadata = {};

const navbar = <Navbar logo={<b>Nextra</b>} />;
const footer = (
  <Footer>
    {new Date().getFullYear()} ©{"  "}
    <Link href="https://github.com/mosesgameli" target="_blank">
      Moses Gameli
    </Link>
  </Footer>
);

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head></Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/mosesgameli/mss"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
