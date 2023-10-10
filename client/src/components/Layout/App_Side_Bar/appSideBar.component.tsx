"use client";

import { LayoutContext } from "@/context/layoutContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AppSideBar() {
  const pathName = usePathname();
  const { appMenuItem } = useContext(LayoutContext);
  const indexPageRef = useRef<number>();
  const [indexPage, setIndexPage] = useState<number>(0);

  useEffect(() => {
    appMenuItem.map((item, index) => {
      if (pathName.includes(item.to)) {
        setIndexPage(index);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName, appMenuItem]);

  const handleClick = (i: number) => {
    indexPageRef.current = i;
  };

  return (
    <div className='hidden lg:block'>
      <nav className='flex flex-col w-64 h-auto gap-4 p-6 border rounded-xl border-light-300 shadow-customPrimary hover:shadow-customSecondary'>
        {appMenuItem.map((item, index) => {
          return (
            <div
              key={uuidv4()}
              className='w-full flex flex-row items-center gap-2'
            >
              {index > 0 ? (
                <div
                  className={`relative w-5 h-5 rounded-full border flex justify-center items-center  before:absolute before:w-1 before:h-7 before:rounded-sm ${
                    index <= indexPage
                      ? "before:bg-main-500 border-main-500"
                      : "before:bg-light-400 border-light-400"
                  } before:bottom-[27px]`}
                >
                  <div
                    className={`w-[10px] h-[10px] rounded-full  ${
                      index <= indexPage ? "bg-main-500" : "bg-light-400"
                    }`}
                  ></div>
                </div>
              ) : (
                <div
                  className={`relative w-5 h-5 rounded-full border flex justify-center items-center border-main-500`}
                >
                  <div
                    className={`w-[10px] h-[10px] rounded-full bg-main-500`}
                  ></div>
                </div>
              )}

              <Link
                href={item.to as string}
                onClick={() => handleClick(index)}
                className={`py-[10px] pl-[22px] w-10/12 text-base font-medium hover:bg-light-300 border-2 text-dark-100 rounded-xl border-Gallery-200 ${
                  index <= indexPage && "bg-light-300"
                }`}
              >
                {item.label}
              </Link>
            </div>
          );
        })}
      </nav>
    </div>
  );
}

export default AppSideBar;
