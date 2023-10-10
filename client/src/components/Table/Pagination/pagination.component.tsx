"use client";

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import PaginationProps from "./pagination.interface";
import ArrowLeft from "@/assets/icons/arrow-left.svg";
import ArrowRight from "@/assets/icons/arrow-right.svg";
import ButtonIcon from "@/components/Button/buttonIcon.component";
import { v4 as uuidv4 } from "uuid";

function Pagination(props: PaginationProps) {
  const {
    prevOnClick,
    prevDisable,
    nextClick,
    nextDisable,
    pageIndex,
    totalPage,
    table,
  } = props;

  const [arrowPage, setArrowPage] = useState<number[]>([]);

  useEffect(() => {
    let _arrowPage = [...arrowPage];
    for (let i = 1; i <= totalPage; i++) {
      _arrowPage.push(i);
    }
    setArrowPage(_arrowPage);
  }, [totalPage]);

  return (
    <div className='flex flex-row items-center justify-center gap-5 py-[10px]'>
      <ButtonIcon
        image={ArrowLeft}
        onClick={prevOnClick}
        disable={prevDisable}
      />

      <div className='flex flex-row items-center gap-[2px]'>
        {arrowPage.map((item, index) => {
          if (pageIndex <= 4) {
            if (item <= 5) {
              return (
                <span
                  key={uuidv4()}
                  className={`font-medium text-sm text-dark-100 w-10 h-10 flex justify-center items-center rounded-lg hover:bg-light-300 ${
                    item === pageIndex && "bg-light-300"
                  } cursor-pointer`}
                  onClick={() => table.setPageIndex(index)}
                >
                  {item}
                </span>
              );
            }

            if (item === 6) {
              return (
                <span
                  key={uuidv4()}
                  className={`font-medium text-sm text-dark-100 w-10 h-10 flex justify-center items-center rounded-lg hover:bg-light-300 cursor-pointer`}
                  onClick={() => table.setPageIndex(index)}
                >
                  ...
                </span>
              );
            }

            if (item === totalPage) {
              return (
                <span
                  key={uuidv4()}
                  className={`font-medium text-sm text-dark-100 w-10 h-10 flex justify-center items-center rounded-lg hover:bg-light-300 ${
                    item === pageIndex && "bg-light-300"
                  } cursor-pointer`}
                  onClick={() => table.setPageIndex(index)}
                >
                  {item}
                </span>
              );
            }
          }

          if (pageIndex > 4 && pageIndex < totalPage - 3) {
            if (item === 1) {
              return (
                <span
                  key={uuidv4()}
                  className={`font-medium text-sm text-dark-100 w-10 h-10 flex justify-center items-center rounded-lg hover:bg-light-300  cursor-pointer`}
                  onClick={() => table.setPageIndex(index)}
                >
                  {item}
                </span>
              );
            }
            if (item === pageIndex - 2) {
              return (
                <span
                  key={uuidv4()}
                  className={`font-medium text-sm text-dark-100 w-10 h-10 flex justify-center items-center rounded-lg hover:bg-light-300  cursor-pointer`}
                  onClick={() => table.setPageIndex(index)}
                >
                  ...
                </span>
              );
            }
            if (
              item + 1 === pageIndex ||
              item === pageIndex ||
              item - 1 === pageIndex
            ) {
              return (
                <span
                  key={uuidv4()}
                  className={`font-medium text-sm text-dark-100 w-10 h-10 flex justify-center items-center rounded-lg hover:bg-light-300 ${
                    item === pageIndex && "bg-light-300"
                  } cursor-pointer`}
                  onClick={() => table.setPageIndex(index)}
                >
                  {item}
                </span>
              );
            }
            if (item === pageIndex + 2) {
              return (
                <span
                  key={uuidv4()}
                  className={`font-medium text-sm text-dark-100 w-10 h-10 flex justify-center items-center rounded-lg hover:bg-light-300 ${
                    item === pageIndex && "bg-light-300"
                  } cursor-pointer`}
                  onClick={() => table.setPageIndex(index)}
                >
                  ...
                </span>
              );
            }
            if (item === totalPage) {
              return (
                <span
                  key={uuidv4()}
                  className={`font-medium text-sm text-dark-100 w-10 h-10 flex justify-center items-center rounded-lg hover:bg-light-300 ${
                    item === pageIndex && "bg-light-300"
                  } cursor-pointer`}
                  onClick={() => table.setPageIndex(index)}
                >
                  {item}
                </span>
              );
            }
          }

          if (pageIndex >= totalPage - 3) {
            if (item === 1) {
              return (
                <span
                  key={uuidv4()}
                  className={`font-medium text-sm text-dark-100 w-10 h-10 flex justify-center items-center rounded-lg hover:bg-light-300 ${
                    item === pageIndex && "bg-light-300"
                  } cursor-pointer`}
                  onClick={() => table.setPageIndex(index)}
                >
                  {item}
                </span>
              );
            }
            if (item === totalPage - 5) {
              return (
                <span
                  key={uuidv4()}
                  className={`font-medium text-sm text-dark-100 w-10 h-10 flex justify-center items-center rounded-lg hover:bg-light-300 ${
                    item === pageIndex && "bg-light-300"
                  } cursor-pointer`}
                  onClick={() => table.setPageIndex(index)}
                >
                  ...
                </span>
              );
            }
            if (item >= totalPage - 4) {
              return (
                <span
                  key={uuidv4()}
                  className={`font-medium text-sm text-dark-100 w-10 h-10 flex justify-center items-center rounded-lg hover:bg-light-300 ${
                    item === pageIndex && "bg-light-300"
                  } cursor-pointer`}
                  onClick={() => table.setPageIndex(index)}
                >
                  {item}
                </span>
              );
            }
          }
        })}
      </div>

      <ButtonIcon
        image={ArrowRight}
        onClick={nextClick}
        disable={nextDisable}
      />
    </div>
  );
}

export default Pagination;
