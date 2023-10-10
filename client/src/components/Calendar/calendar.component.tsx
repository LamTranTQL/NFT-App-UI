/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import CalendarProps from "./calendar.interface";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@radix-ui/react-icons";
import { v4 as uuidv4 } from "uuid";
import { getDay, getDaysInMonth } from "date-fns";
import Input from "../Input/input.component";
import { DateType } from "@/types/types";

function Calendar(props: CalendarProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { placeholder, onChange, valueSelected } = props;

  let date = new Date();
  const [currYear, setCurrYear] = useState<number>(date.getFullYear());
  const [currMonth, setCurrMonth] = useState<number>(date.getMonth());
  const [selectDate, setSelectDate] = useState<DateType>({
    yyyy: 0,
    mmmm: 0,
    dddd: 0,
  });
  const Months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const datesInMonth = getDaysInMonth(new Date(currYear, currMonth));
  const firtDayOfMonth = getDay(new Date(currYear, currMonth, 1));
  const firtDayOfNextMonth = getDay(new Date(currYear, currMonth + 1, 1));
  const lastDayOfLastMonth = getDaysInMonth(new Date(currYear, currMonth - 1));

  const datesOfLastMonth: DateType[] = [];
  const datesOfMonth: DateType[] = [];
  const datesOfNextMonth: DateType[] = [];

  for (let i = firtDayOfMonth; i > 0; i--) {
    let yy: number = currYear;
    let mm: number = currMonth;
    if (currMonth === 0) {
      yy = yy - 1;
      mm = 11;
    } else {
      mm = mm - 1;
    }
    datesOfLastMonth.push({
      yyyy: yy,
      mmmm: mm,
      dddd: lastDayOfLastMonth - i + 1,
    });
  }

  for (let i = 1; i <= datesInMonth; i++) {
    datesOfMonth.push({ yyyy: currYear, mmmm: currMonth, dddd: i });
  }

  if (
    42 -
      (datesOfLastMonth.length +
        datesOfMonth.length +
        datesOfNextMonth.length) >
    7
  ) {
    for (let i = firtDayOfNextMonth; i < 14; i++) {
      let yy: number = currYear;
      let mm: number = currMonth;
      if (currMonth === 11) {
        yy = yy + 1;
        mm = 0;
      } else {
        mm = mm + 1;
      }
      datesOfNextMonth.push({
        yyyy: yy,
        mmmm: mm,
        dddd: i - firtDayOfNextMonth + 1,
      });
    }
  } else {
    for (let i = firtDayOfNextMonth; i < 7; i++) {
      let yy: number = currYear;
      let mm: number = currMonth;
      if (currMonth === 11) {
        yy = yy + 1;
        mm = 0;
      } else {
        mm = mm + 1;
      }
      datesOfNextMonth.push({
        yyyy: yy,
        mmmm: mm,
        dddd: i - firtDayOfNextMonth + 1,
      });
    }
  }
  const Day = ["S", "M", "T", "W", "T", "F", "S"];

  useEffect(() => {
    let valueString: string = "";
    if (
      valueSelected &&
      valueSelected.yyyy !== 0 &&
      valueSelected.mmmm !== 0 &&
      valueSelected.dddd !== 0
    ) {
      valueString = `${Months[valueSelected.mmmm]} ${
        valueSelected.dddd < 10 ? "0" + valueSelected.dddd : valueSelected.dddd
      }, ${valueSelected.yyyy}`;
    }
    if (inputRef.current) {
      inputRef.current.value = valueString;
    }
  }, []);

  const handleClick = (value: DateType) => {
    if (value.mmmm !== currMonth) {
      setCurrMonth(value.mmmm);
    }
    let valueSelected = `${Months[value.mmmm]} ${
      value.dddd < 10 ? "0" + value.dddd : value.dddd
    }, ${value.yyyy}`;
    if (inputRef.current) {
      inputRef.current.value = valueSelected;
    }
    setSelectDate(value);
    onChange && onChange(value);
  };

  const handlePrevMonthClick = () => {
    if (currMonth === 0) {
      setCurrMonth(11);
      setCurrYear(currYear - 1);
    } else {
      setCurrMonth(currMonth - 1);
    }
  };
  const handleNextMonthClick = () => {
    if (currMonth === 11) {
      setCurrMonth(0);
      setCurrYear(currYear + 1);
    } else {
      setCurrMonth(currMonth + 1);
    }
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <div
          id='dropdown-calendar'
          className='w-full border border-Gray-300 rounded-xl py-[21px] px-6 cursor-pointer flex flex-row items-center gap-[10px]'
          aria-label='Customise options'
        >
          <CalendarIcon className='w-6 h-auto text-dove-500' />
          <Input
            type='text'
            placeholder={placeholder}
            className='w-full text-base font-normal border-0 outline-none cursor-pointer placeholder:text-mineShaft-800 text-dark-100'
            disabled={true}
            ref={inputRef}
          />

          <ChevronDownIcon className='w-6 h-6 text-dove-500' />
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content sideOffset={10}>
          <div className='w-[448px] rounded-2xl border-2 bg-light-100 border-alto-200 shadow-customThird pt-[38px] pb-12 flex flex-col gap-[25px] items-center'>
            <div className='flex flex-row justify-between items-center gap-3 w-[344px]'>
              <ChevronLeftIcon
                className='w-6 h-6 text-dark-100'
                onClick={handlePrevMonthClick}
              />
              <span>
                {Months[currMonth]} - {currYear}
              </span>
              <ChevronRightIcon
                className='w-6 h-6 text-dark-100'
                onClick={handleNextMonthClick}
              />
            </div>

            <div className='flex flex-col items-center w-full gap-6 '>
              <div className='flex flex-row items-center w-[344px] gap-5 '>
                {Day.map((item) => {
                  return (
                    <span
                      key={uuidv4()}
                      className='flex items-center justify-center w-8 h-8 text-base font-semibold text-Gray-950'
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
              <div className='w-full h-[2px] bg-alto-200'></div>

              <div className='flex flex-row w-[344px] flex-wrap gap-5'>
                {datesOfLastMonth.map((item) => {
                  return (
                    <span
                      className='flex items-center justify-center w-8 h-8 text-base font-normal rounded-2xl text-light-400 hover:bg-main-500 hover:text-light-100'
                      key={`${item.dddd}-${item.mmmm}-${item.yyyy}`}
                      onClick={() => handleClick(item)}
                    >
                      {item.dddd}
                    </span>
                  );
                })}
                {datesOfMonth.map((item) => {
                  if (
                    item.yyyy === selectDate.yyyy &&
                    item.mmmm === selectDate.mmmm &&
                    item.dddd === selectDate.dddd
                  ) {
                    return (
                      <span
                        className='flex items-center justify-center w-8 h-8 text-base font-normal rounded-2xl hover:bg-main-500 hover:text-light-100 bg-main-500 text-light-100'
                        key={`${item.dddd}-${item.mmmm}-${item.yyyy}`}
                        onClick={() => handleClick(item)}
                      >
                        {item.dddd}
                      </span>
                    );
                  } else {
                    return (
                      <span
                        className='flex items-center justify-center w-8 h-8 text-base font-normal rounded-2xl text-tundora-900 hover:bg-main-500 hover:text-light-100'
                        key={`${item.dddd}-${item.mmmm}-${item.yyyy}`}
                        onClick={() => handleClick(item)}
                      >
                        {item.dddd}
                      </span>
                    );
                  }
                })}
                {datesOfNextMonth.map((item) => {
                  return (
                    <span
                      className='flex items-center justify-center w-8 h-8 text-base font-normal rounded-2xl text-light-400 hover:bg-main-500 hover:text-light-100'
                      key={`${item.dddd}-${item.mmmm}-${item.yyyy}`}
                      onClick={() => handleClick(item)}
                    >
                      {item.dddd}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default Calendar;
