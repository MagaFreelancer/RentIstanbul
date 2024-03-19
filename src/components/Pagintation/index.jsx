import ReactPaginate from 'react-paginate';
import ScrollToTop from "../../utils/ScrollToTop/ScrollToTop";

const Pagination = ({onChangePage}) => {
    return (  
        <>
            <ReactPaginate
            className="cars__pagination"
            breakLabel="..."
            nextLabel="→"
            onPageChange={(event) => onChangePage(event.selected + 1)}
            pageRangeDisplayed={9}
            pageCount={3}
            previousLabel="←"
            renderOnZeroPageCount={null}
          />
        </>
    );
}
 
export default Pagination;