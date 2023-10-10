"use client";

import { ChevronRightIcon } from "@radix-ui/react-icons";

function SubHeaderBar() {
  return (
    <div className='w-full bg-white border-b border-light-300'>
      <div className='w-full max-w-container mx-auto px-16 py-2 text-dark-100'>
        <div className='flex flex-col justify-start'>
          <span className='text-base font-semibold text-dark-100'>
            Campaigns
          </span>
          <div className='flex flex-row items-center justify-start gap-1 py-0.5'>
            <span className='text-xs font-normal text-dark-600'>
              All Campaigns
            </span>
            <ChevronRightIcon className='w-4 h-4 text-Gray-300' />
            {/* <ArrowForwardIosIcon className='w-4 h-4 p-0 text-graycustom-300' /> */}
            <span className='text-xs font-normal text-main-200'>
              New Campaign
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubHeaderBar;
