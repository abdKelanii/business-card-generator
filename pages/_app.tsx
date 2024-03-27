import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@/components/layout/layout";
import { Toaster, toast } from "sonner";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import ProtectedRoute from "@/components/protected-route";

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
