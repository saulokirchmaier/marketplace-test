"use client";

import styles from "./page.module.css";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/sections/Hero";
import { TreandingSection } from "@/components/sections/Treanding";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <HeroSection />
      <TreandingSection />
      <div />
    </div>
  );
}
