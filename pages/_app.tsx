import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@/components/layout/layout";
import { Toaster, toast } from "sonner";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Layout>
        <Toaster richColors position="top-right" />
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
