import type { AppProps } from "next/app";
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';

import Layout from "@/components/Layout";
import LoginModel from "@/components/Models/LoginModel";
import RegisterModel from "@/components/Models/RegisterModel";
import EditModel from "@/components/Models/EditModel";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster />
      <EditModel />
      <RegisterModel />
      <LoginModel />
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </SessionProvider>
  )
}
