"use client";

import Input from "../Input/input.component";
import SearchProps from "./search.interface";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

function Search(props: SearchProps) {
  const { placeholder } = props;
  return (
    <div className='w-full max-w-[25rem] rounded-lg border border-Gray-300 py-[9px] px-[10px] flex flex-row items-center gap-2'>
      <MagnifyingGlassIcon className='w-5 h-5' />
      <Input type='text' placeholder={placeholder} />
    </div>
  );
}

export default Search;
