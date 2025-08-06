"use client";

import styles from "./page.module.css";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/sections/Hero";
import { PopularSection } from "@/components/sections/Popular";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <HeroSection />
      <PopularSection />
      <div />
    </div>
  );
}
