"use client";

import SelectedProps from "./selected.interface";
import { v4 as uuidv4 } from "uuid";
import { Cross2Icon } from "@radix-ui/react-icons";

function Selected(props: SelectedProps) {
  const { title, value, removeValue, onClick } = props;

  return (
    <div className='flex flex-col gap-[10px] w-full'>
      {title && (
        <h6 className='text-base font-normal text-main-200'>{title}</h6>
      )}
      <div className='flex flex-row flex-wrap gap-[10px]'>
        {value?.map((item, index) => {
          return (
            <div
              key={uuidv4()}
              className={`border rounded-full border-main-200 py-[7px] pl-[19px] ${
                removeValue ? "pr-[7px]" : "pr-[19px]"
              } flex flex-row items-center gap-2 shadow-customPrimary hover:shadow-customSecondary`}
            >
              <span className='text-sm font-medium text-dark-100'>{item}</span>
              {removeValue && onClick && (
                <Cross2Icon
                  className='w-5 h-5 cursor-pointer text-main-200'
                  onClick={() => onClick(index)}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Selected;
