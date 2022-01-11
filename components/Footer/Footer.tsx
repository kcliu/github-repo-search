import styles from "./Footer.module.css";
const FIRST_PAGE = 1;
const Footer = ({
  page,
  perPage,
  totalCount,
  handleSearch,
}: {
  page: number;
  perPage: number;
  totalCount: number;
  handleSearch: (page: number) => () => void;
}) => {
  const isFirstPage = page === FIRST_PAGE;
  const isLastPage = page === Math.ceil(totalCount / perPage);
  return (
    <footer className={styles.footer}>
      {totalCount !== 0 && !isFirstPage && <button onClick={handleSearch(page - 1)}>PREV</button>}
      {totalCount !== 0 && !isLastPage && <button onClick={handleSearch(page + 1)}>NEXT</button>}
    </footer>
  );
};

export default Footer;
