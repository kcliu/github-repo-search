import styles from "./Footer.module.css";
const FIRST_PAGE = 1;
const MAX_ITEMS = 1000;
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
  const totalItems = totalCount > MAX_ITEMS ? MAX_ITEMS : totalCount
  const lastPage = Math.ceil(totalItems / perPage);
  const isLastPage = page === lastPage;
  console.log(page, lastPage)
  return (
    <footer className={styles.footer}>
      {totalCount !== 0 && !isFirstPage && (
        <button className={styles.button} onClick={handleSearch(FIRST_PAGE)}>
          FIRST
        </button>
      )}
      {totalCount !== 0 && !isFirstPage && (
        <button className={styles.button} onClick={handleSearch(page - 1)}>
          PREV
        </button>
      )}
      {totalCount !== 0 && !isLastPage && (
        <button className={styles.button} onClick={handleSearch(page + 1)}>
          NEXT
        </button>
      )}
      {totalCount !== 0 && !isLastPage && (
        <button className={styles.button} onClick={handleSearch(lastPage)}>
          LAST
        </button>
      )}
    </footer>
  );
};

export default Footer;
