import Head from "next/head";
import { Bellefair } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Header } from "@/components";
import Link from "next/link";

const bellefair = Bellefair({
  weight: "400",
  subsets: ["latin"],
  preload: true,
  fallback: ["system-ui", "arial"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Space Tourism</title>
        <meta name="description" content="So, you want to travel to space" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${bellefair.className}`}>
        <Header />

        <div className={styles.mainDescriptionContainer}>
          <h1 className={styles.mainTitle}>
            SO, YOU WANT TO TRAVEL TO <br />
            <span>SPACE</span>
          </h1>
          <p className={styles.mainParagraph}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <button className={`${styles.exploreButton} ${bellefair.className}`}>
          <Link href={"/destination"}>Explore</Link>
        </button>
      </main>
    </>
  );
}
