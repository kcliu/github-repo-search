import React, { Dispatch, SetStateAction } from "react";
import { throttle } from "../../utils/throttle";
import styles from "./SearchBar.module.css";

interface IProps {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}
const THROTTLE_TIMEOUT = 3000  //second
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
      <button onClick={throttle(onClick, THROTTLE_TIMEOUT)}>Search</button>
    </div>
  );
};
