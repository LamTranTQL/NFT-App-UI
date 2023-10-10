import React from "react";
import PriceColsProps from "./priceCols.interface";

function PriceCols(props: PriceColsProps) {
  const { price, priceEnd, priceStart } = props;

  return (
    <div
      className={`flex flex-row items-center  gap-2  ${
        price && "border border-Gray-200 py-[7px] px-6 rounded-lg"
      }`}
    >
      <span className='text-sm font-medium text-main-100'>ETH</span>
      {price ? (
        <span className='text-sm font-medium text-main-200'>
          {price.toFixed(2)}
        </span>
      ) : (
        <span className='text-sm font-medium text-main-200'>{`${priceStart?.toFixed(
          2
        )} - ${priceEnd?.toFixed(2)}`}</span>
      )}
    </div>
  );
}

export default PriceCols;
