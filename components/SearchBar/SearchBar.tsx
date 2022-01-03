import React, { Dispatch, SetStateAction } from "react";
import styles from "./SearchBar.module.css";

interface IProps {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}
export const SearchBar = ({ query, setQuery, onClick }: IProps) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search GitHub repos"
        name="q"
        value={query}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
      />
      <button onClick={onClick}>Search</button>
    </div>
  );
};
