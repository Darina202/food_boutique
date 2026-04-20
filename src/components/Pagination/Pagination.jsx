import ReactPaginate from 'react-paginate';
import styles from './pagination.module.css';
import sprite from '../../img/icons.svg';

const Pagination = ({ handlePageClick, totalPages }) => {
  return (
    <ReactPaginate
      breakLabel="..."
      previousLabel={
        <svg className={styles.icon}>
          <use href={`${sprite}#icon-caret-small-left`}></use>
        </svg>
      }
      nextLabel={
        <svg className={styles.icon}>
          <use href={`${sprite}#icon-caret-small-right`}></use>
        </svg>
      }
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      pageCount={totalPages}
      containerClassName={styles.paginationList}
      activeClassName={styles.active}
      renderOnZeroPageCount={null}
      onPageChange={event => handlePageClick(event.selected + 1)}
    />
  );
};
export default Pagination;
