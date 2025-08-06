"use client";
import { Box } from "@/components/ui/Box";
import styles from "./page.module.css";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { Search } from "@/components/ui/Search";
import { P } from "@/components/ui/P";
import { Header } from "@/components/Header";
import { DemoBox } from "@/components/DemoBox";
import { HeroSection } from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <HeroSection />
    </div>
  );
}
