"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import Button from "@/components/Button/button.component";
import PaginationProps from "./pagination.interface";
import ArrowLeft from "@/assets/icons/arrow-left.svg";
import ArrowRight from "@/assets/icons/arrow-right.svg";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Pagination(props: PaginationProps) {
  const { totalPage, pageIndex, onChangePage } = props;
  const [arrayNumber, SetArrayNumber] = useState<number[]>([]);

  useEffect(() => {
    let arr = [...arrayNumber];
    for (let i = 1; i <= totalPage; i++) {
      arr.push(i);
    }
    SetArrayNumber(arr);
  }, []);

  const handleClick = (i: number) => {
    onChangePage(i);
  };

  const handlePrevClick = () => {
    if (pageIndex >= 1) {
      onChangePage(pageIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (pageIndex < totalPage - 1) {
      onChangePage(pageIndex + 1);
    }
  };

  return (
    <div className='w-full rounded-xl border border-light-300 px-[23px] py-[19px] flex flex-row justify-between items-center'>
      <Button
        startIcon={ArrowLeft}
        content='Previous'
        variant='outline'
        size='small'
        color='secondary'
        onClick={handlePrevClick}
      />
      <div className='flex flex-row gap-[2px]'>
        {arrayNumber.map((item, index) => {
          if (pageIndex <= 4) {
            if (item <= 5) {
              return (
                <div
                  key={uuidv4()}
                  className={`rounded-lg flex justify-center items-center w-10 h-10 cursor-pointer ${
                    item === pageIndex && "bg-light-300"
                  }`}
                  onClick={() => handleClick(index)}
                >
                  <span className='font-medium text-sm text-Gray-800'>
                    {item}
                  </span>
                </div>
              );
            }
            if (item === 6) {
              return (
                <div
                  key={uuidv4()}
                  className={`rounded-lg flex justify-center items-center w-10 h-10 cursor-pointer ${
                    item === pageIndex && "bg-light-300"
                  }`}
                  onClick={() => handleClick(index)}
                >
                  <span className='font-medium text-sm text-Gray-800'>...</span>
                </div>
              );
            }
            if (item === totalPage) {
              return (
                <div
                  key={uuidv4()}
                  className={`rounded-lg flex justify-center items-center w-10 h-10 cursor-pointer ${
                    item === pageIndex && "bg-light-300"
                  }`}
                  onClick={() => handleClick(index)}
                >
                  <span className='font-medium text-sm text-Gray-800'>
                    {item}
                  </span>
                </div>
              );
            }
          }

          if (pageIndex > 4 && pageIndex < totalPage - 3) {
            if (item === 1) {
              return (
                <div
                  key={uuidv4()}
                  className={`rounded-lg flex justify-center items-center w-10 h-10 cursor-pointer ${
                    item === pageIndex && "bg-light-300"
                  }`}
                  onClick={() => handleClick(index)}
                >
                  <span className='font-medium text-sm text-Gray-800'>
                    {item}
                  </span>
                </div>
              );
            }
            if (item === pageIndex - 2) {
              return (
                <div
                  key={uuidv4()}
                  className={`rounded-lg flex justify-center items-center w-10 h-10 cursor-pointer ${
                    item === pageIndex && "bg-light-300"
                  }`}
                  onClick={() => handleClick(index)}
                >
                  <span className='font-medium text-sm text-Gray-800'>...</span>
                </div>
              );
            }
            if (
              item - 1 === pageIndex ||
              item === pageIndex ||
              item + 1 === pageIndex
            ) {
              return (
                <div
                  key={uuidv4()}
                  className={`rounded-lg flex justify-center items-center w-10 h-10 cursor-pointer ${
                    item === pageIndex && "bg-light-300"
                  }`}
                  onClick={() => handleClick(index)}
                >
                  <span className='font-medium text-sm text-Gray-800'>
                    {item}
                  </span>
                </div>
              );
            }
            if (item === pageIndex + 2) {
              return (
                <div
                  key={uuidv4()}
                  className={`rounded-lg flex justify-center items-center w-10 h-10 cursor-pointer ${
                    item === pageIndex && "bg-light-300"
                  }`}
                  onClick={() => handleClick(index)}
                >
                  <span className='font-medium text-sm text-Gray-800'>...</span>
                </div>
              );
            }
            if (item === totalPage) {
              return (
                <div
                  key={uuidv4()}
                  className={`rounded-lg flex justify-center items-center w-10 h-10 cursor-pointer ${
                    item === pageIndex && "bg-light-300"
                  }`}
                  onClick={() => handleClick(index)}
                >
                  <span className='font-medium text-sm text-Gray-800'>
                    {item}
                  </span>
                </div>
              );
            }
          }

          if (pageIndex >= totalPage - 3) {
            if (item === 1) {
              return (
                <div
                  key={uuidv4()}
                  className={`rounded-lg flex justify-center items-center w-10 h-10 cursor-pointer ${
                    item === pageIndex && "bg-light-300"
                  }`}
                  onClick={() => handleClick(index)}
                >
                  <span className='font-medium text-sm text-Gray-800'>
                    {item}
                  </span>
                </div>
              );
            }
            if (item === totalPage - 5) {
              return (
                <div
                  key={uuidv4()}
                  className={`rounded-lg flex justify-center items-center w-10 h-10 cursor-pointer ${
                    item === pageIndex && "bg-light-300"
                  }`}
                  onClick={() => handleClick(index)}
                >
                  <span className='font-medium text-sm text-Gray-800'>...</span>
                </div>
              );
            }
            if (item >= totalPage - 4) {
              return (
                <div
                  key={uuidv4()}
                  className={`rounded-lg flex justify-center items-center w-10 h-10 cursor-pointer ${
                    item === pageIndex && "bg-light-300"
                  }`}
                  onClick={() => handleClick(index)}
                >
                  <span className='font-medium text-sm text-Gray-800'>
                    {item}
                  </span>
                </div>
              );
            }
          }
        })}
      </div>
      <Button
        endIcon={ArrowRight}
        content='Next'
        variant='outline'
        size='small'
        color='secondary'
        onClick={handleNextClick}
      />
    </div>
  );
}

export default Pagination;
