import type { NextPage } from "next";

import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { SearchBar } from "../components/SearchBar/SearchBar";

const Home: NextPage = () => {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);
  const handleClick = () => {
    if (!query) {
      return;
    }
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.github.com/search/repositories?` +
        new URLSearchParams({
          q: query,
        }),
      { method: "GET" }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("kc debug:", res);
        setItems(res.items);
      })
      .catch((rejected) => {
        console.log("error:", rejected);
      });
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Github Repo search</title>
        <meta name="description" content="Github Repo search" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <SearchBar query={query} setQuery={setQuery} onClick={handleClick} />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
