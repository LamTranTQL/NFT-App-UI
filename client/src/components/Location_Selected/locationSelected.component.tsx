/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import { Cross2Icon } from "@radix-ui/react-icons";
import LocationsSelectedProps from "./locationSelected.interface";
import { useMemo } from "react";

function LocationsSelected(props: LocationsSelectedProps) {
  const { value } = props;

  return useMemo(() => {
    return (
      <div className='w-full flex flex-col gap-[10px]'>
        <h6 className='font-normal text-base text-main-200'>
          Selected Location
        </h6>

        {value.length !== 0 &&
          value.map((item, index) => {
            return (
              <div
                key={uuidv4()}
                className='w-full flex flex-row justify-between items-center border border-main-200 rounded-3xl py-[7px] px-[13px]'
              >
                <span className='flex flex-row gap-2 items-center'>
                  <Image src={item.image} alt='image' className='w-6' />
                  <span className='font-medium text-sm text-dark-100'>{`${item.cityName}, ${item.stateName}, ${item.countryName}`}</span>
                </span>

                <span className='flex flex-row items-center gap-2'>
                  <span className='font-normal text-sm text-dark-600'>
                    {item.population}
                  </span>
                  <Cross2Icon className='w-5 h-5 text-main-200' />
                </span>
              </div>
            );
          })}
      </div>
    );
  }, [value]);
}

export default LocationsSelected;
