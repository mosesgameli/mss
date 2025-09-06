import { Layout, Navbar } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import { SearchArea } from "../compoments";

export const metadata = {};

const navbar = <Navbar logo={<b>MG</b>} />;

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/mosesgameli/mss"
          navigation={false}
          search={<SearchArea />}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
