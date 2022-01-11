import type { NextPage } from "next";

import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import { SearchBar } from "../components/SearchBar/SearchBar";
import Footer from "../components/Footer/Footer";
import { RepoItem } from "../components/RepoItem/RepoItem";
type Item = {
    full_name: string
    description: string
    html_url: string
}

const PER_PAGE = 10;
const FIRST_PAGE = 1;
const Home: NextPage = () => {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState<Item[]>([]);
  const [pageInfo, setPageInfo] = useState({ current: FIRST_PAGE, total: 0 });

  const handleSearch = (page: number) => () => {
    if (!query) {
      return;
    }
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.github.com/search/repositories?` +
        new URLSearchParams({
          q: query,
          per_page: String(PER_PAGE),
          page: String(page),
        }),
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("kc debug:", res);
        setItems(res.items);
        setPageInfo({ current: page, total: res.total_count });
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
      <SearchBar
          query={query}
          setQuery={setQuery}
          onClick={handleSearch(pageInfo.current)}
        />
      <main className={styles.main}>
        <div>
          {items.map((item: Item, i) => {
            return (
              <RepoItem
                key={i}
                title={item.full_name}
                description={item.description}
                url={item.html_url}
              />
            );
          })}
        </div>
      </main>
      <Footer
        page={pageInfo.current}
        perPage={PER_PAGE}
        totalCount={pageInfo.total}
        handleSearch={handleSearch}
      />
    </div>
  );
};

export default Home;
