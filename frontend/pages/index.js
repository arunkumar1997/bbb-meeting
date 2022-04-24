import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import Link from "next/link";
import LoadingButton from "@mui/lab/LoadingButton";

export default function Home() {
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>BigBlueButton Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to BigBlueButton Dashboard!</h1>

        <div>
          <Stack direction="row" spacing={2} sx={{ my: 5 }}>
            <Link href="/signin">
              <LoadingButton
                sx={{ px: 5 }}
                item
                variant="contained"
                size="large"
                onClick={() => {
                  setLoading({ signIn: true, signUp: false });
                }}
                loading={loading.signIn}
              >
                sign In
              </LoadingButton>
            </Link>

            <Link href="/signup">
              <LoadingButton
                sx={{ px: 5 }}
                item
                variant="contained"
                size="large"
                onClick={() => {
                  setLoading({ signIn: false, signUp: true });
                }}
                loading={loading.signUp}
              >
                Sign Up
              </LoadingButton>
            </Link>
          </Stack>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
