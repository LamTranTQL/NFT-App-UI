"use client";

import Image from "next/image";
import TableProps from "./table.interface";
import { v4 as uuidv4 } from "uuid";
import Ethereum from "@/assets/icons/ethereum-eth-logo.svg";

function Table(props: TableProps) {
  const { data } = props;
  return (
    <div className='grid grid-cols-3 gap-5'>
      {data.map((item) => {
        return (
          <div
            key={uuidv4()}
            className='w-full border border-light-300 p-5 rounded-xl flex flex-row gap-4 items-center'
          >
            <Image
              src={item.image}
              alt='thumbnail'
              className='w-[103px] h-auto'
            />
            <div className='flex flex-col gap-[10px]'>
              <div>
                <div className='font-medium text-xl text-dark-200'>
                  {item.title}
                </div>
                <div className='font-normal text-base text-light-400'>
                  {item.description}
                </div>
              </div>

              <div className='flex flex-row gap-[2px]'>
                <Image src={Ethereum} alt='ethereum' className='w-4 h-4' />
                <span className='font-medium text-sm text-dark-200'>
                  {item.price !== null
                    ? item.price
                    : `${item.priceStart} - ${item.priceEnd}`}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Table;
