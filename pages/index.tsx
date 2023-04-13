import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Form from "@/components/Form";
import PostsFeed from "@/components/posts/PostsFeed";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header  label="Home" />
      <Form placeholder="What is up?" />
      <PostsFeed />
    </>
  )
}
