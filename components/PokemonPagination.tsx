import {
  ChevronDownIcon,
  DoubleArrowLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/button";

interface PaginationProps {
  nPages: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  setRecordsPerPage: Dispatch<SetStateAction<number>>;
}

export function Pagination({
  nPages,
  currentPage,
  setCurrentPage,
  setRecordsPerPage,
}: PaginationProps) {
  const goToNextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const goToPrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="flex items-center justify-between">
      <section className="flex items-center gap-2">
        <label htmlFor="rowsperPage">Rows per page</label>
        <div className="relative w-max">
          <select
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-[200px] appearance-none font-normal"
            id="rowsperPage"
            onChange={(e) => setRecordsPerPage(Number(e.target.value))}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </select>
          <ChevronDownIcon className="absolute right-3 top-2.5 h-4 w-4 opacity-50" />
        </div>
      </section>
      <section className="flex gap-2">
        <div className="flex whitespace-nowrap items-center justify-center text-sm font-medium">
          Page {currentPage} of {nPages}
        </div>
        <div className="flex items-center space-x-1.5">
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            disabled={currentPage == 1}
            onClick={() => setCurrentPage(1)}
          >
            <span className="sr-only">Go to first page</span>
            <DoubleArrowLeftIcon className="size-4" />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={currentPage == 1}
            onClick={goToPrevPage}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeftIcon className="size-4" />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={currentPage == nPages}
            onClick={goToNextPage}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRightIcon className="size-4" />
          </Button>
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            disabled={currentPage == nPages}
            onClick={() => setCurrentPage(nPages)}
          >
            <span className="sr-only">Go to last page</span>
            <DoubleArrowRightIcon className="size-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
