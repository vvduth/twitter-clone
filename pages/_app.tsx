import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import EditModal from "@/components/modals/EditModal";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <Toaster />
      <RegisterModal />
      <LoginModal />
      <EditModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
