import { forwardRef, MutableRefObject, Ref } from 'react';
import ReactPaginate from 'react-paginate';
import ArrowLeftSvg from '@/src/components/atoms/svgs/ArrowLeftSvg';
import ArrowRightSvg from '@/src/components/atoms/svgs/ArrowRightSvg';

export interface IProps {
  total?: number;
  perPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = forwardRef((
  {
    total = 0,
    perPage,
    currentPage,
    onPageChange
  }: IProps,
  ref?: Ref<HTMLElement>) => {
  const pageCount = Math.ceil(total / perPage);

  if (Number.isNaN(pageCount)) return null;

  const onChange = ({ selected }: { selected: number }) => {
    if (!(ref as MutableRefObject<HTMLDivElement>)?.current) {
      window.scrollTo({ top: 0 });
    } else {
      (ref as MutableRefObject<HTMLDivElement>).current.scrollIntoView();
    }
    onPageChange(selected + 1);
  };

  return (
    <ReactPaginate
      pageCount={pageCount}
      forcePage={currentPage - 1}
      onPageChange={onChange}
      marginPagesDisplayed={1}
      pageRangeDisplayed={3}
      previousLabel={currentPage === 1 ? null : <ArrowLeftSvg/>}
      nextLabel={currentPage === pageCount ? null : <ArrowRightSvg/> }
      className="pagination"
    />
  );
});

Pagination.displayName = 'Pagination';
export default Pagination;
