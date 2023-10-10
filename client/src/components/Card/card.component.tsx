"use client";

import CardProps from "./card.interface";

function Card(props: CardProps) {
  const { header, children } = props;
  return (
    <div className='w-full flex flex-col gap-[25px] rounded-xl p-6 border border-light-300 shadow-customPrimary hover:shadow-customSecondary'>
      <h4 className='text-xl font-medium text-dark-100'>{header}</h4>
      {children}
    </div>
  );
}

export default Card;
