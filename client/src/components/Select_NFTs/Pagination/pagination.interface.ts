export default interface PaginationProps {
  totalPage: number;
  pageIndex: number;
  onChangePage: (i: number) => void;
}
