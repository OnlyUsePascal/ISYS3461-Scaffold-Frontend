import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

interface PaginationCtlProps {
  pageNo: number;
  setPageNo: (pageNo: number) => void;
  pageTotal: number;
}

function PaginationCtl({ pageNo, setPageNo, pageTotal }: PaginationCtlProps) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => setPageNo(Math.max(pageNo - 1, 1))}
          />
        </PaginationItem>

        {[...Array(pageTotal).keys()].map((page) => {
          const pg = page + 1;
          return (
            <PaginationItem key={pg}>
              <PaginationLink
                href="#"
                isActive={pg === pageNo}
                onClick={() => setPageNo(pg)}
              >
                {pg}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() => setPageNo(Math.min(pageNo + 1, pageTotal))}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationCtl;
