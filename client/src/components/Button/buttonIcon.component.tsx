"use client";

import Image from "next/image";
import ButtonIconProps from "./buttonIcon.interface";

function ButtonIcon(props: ButtonIconProps) {
  const { image, className, disable, onClick } = props;
  return (
    <button
      className={`${className} w-9 h-9 p-0 border border-Gray-300`}
      onClick={onClick}
      disabled={disable}
    >
      <span className='w-full h-full flex justify-center items-center'>
        {image && <Image src={image} alt='icon' className='w-5 h-auto' />}
      </span>
    </button>
  );
}

export default ButtonIcon;
