import Head from "next/head";
import React from "react";
import styles from "./home.module.scss";
import { SubscribeButton } from "../components/SubscribeButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Portal FN</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>Hey, Welcome</span>
          <h1>
            News about the <span>React</span> world!{" "}
          </h1>
          <p>
            Get acess to all the news
            <br />
            <span>$6.99 month</span>
          </p>
          <SubscribeButton />
        </section>
        <img src="/images/avatar.svg" />
      </main>
    </>
  );
}
