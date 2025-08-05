"use client"
import { Box } from "@/components/ui/Box";
import styles from "./page.module.css";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { Search } from "@/components/ui/Search";
import { P } from "@/components/ui/P";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Box $direction="column" $gap={16}>
        <h1>Marketplace</h1>
        <Logo />
        <Search placeholder="Search SaaS/AI, Apps, Agencies, and more" />
        <Box $gap={7}>
          <Button $size="small" onClick={() => console.log("clicked")}>Sign Up</Button>
          <Button $outlined $size="small" onClick={() => console.log("clicked")}>
            Login
            <img src="/login.svg" alt="login" />
          </Button>
        </Box>
        <Box $gap={16} $backgroundColor="#FFF" $padding={16}>
          <P $color="secondary" $size="small">Categories</P>
          <P $color="secondary" $size="small">Agencies</P>
          <P $color="secondary" $size="small">Freelancers</P>
          <P $color="secondary" $size="small">Students</P>
          <P $size="small" $bold>Hire Us</P>
        </Box>
        <Button $size="large" onClick={() => console.log("clicked")}>BOOK A DEMO</Button>
        <Button $outlined $size="large">OUTLINED</Button>
      </Box>
    </div>
  );
}
