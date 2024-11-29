import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "antd";
const { Header, Content } = Layout;
import "antd/dist/reset.css";
import "../styles/globals.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout style={{ minHeight: "100vh" }}>
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <div className="mx-10 text-3xl font-extrabold text-white">
            Blog<span className="text-blue-600">Post</span>
          </div>
        </Header>
        <Content style={{ padding: "0 48px" }}>
          <Component {...pageProps} />
        </Content>
      </Layout>
    </QueryClientProvider>
  );
}

export default MyApp;
