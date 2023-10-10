"use client";

import PageHeaderProps from "./pageHeader.interface";

function PageHeader(props: PageHeaderProps) {
  const { content } = props;
  return (
    <div className='w-full pb-6 border-b-2 border-light-300'>
      <h3 className='text-2xl font-bold text-dark-100'>{content}</h3>
    </div>
  );
}

export default PageHeader;
