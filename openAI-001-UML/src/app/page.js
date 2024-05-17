"use client";
import Image from "next/image";
import styles from "@/css/page.module.css";
import { text_generation } from "./api/text_gen";
import InputPage from "./comps/input";
import { useSession } from "next-auth/react";

export default function Home() {
  const text_gen_test = () => {
    text_generation("");
  };

  return (
    <main className={styles.main}>
      <InputPage />
    </main>
  );
}
