import React from "react";
import InforProps from "./infor.interface";
import Image from "next/image";

function Infor(props: InforProps) {
  const { image, title, description } = props;
  return (
    <div className='flex flex-row items-center gap-3'>
      <span className='flex items-center justify-center rounded-lg w-14 h-14'>
        <Image alt='nft-thumbnail' src={image} className='w-full h-full' />
      </span>
      <span className='flex flex-col'>
        <span className='text-base font-medium text-dark-100'>{title}</span>
        <span className='text-sm font-normal text-dark-600'>{description}</span>
      </span>
    </div>
  );
}

export default Infor;
