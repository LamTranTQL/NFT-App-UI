"use client";

import { LayoutContext } from "@/context/layoutContext";
import { useContext, useEffect, useState } from "react";

import ArrowRightLight from "@/assets/icons/arrow-right-light.svg";
import ArrowLeft from "@/assets/icons/arrow-left.svg";
import { usePathname, useRouter } from "next/navigation";
import Button from "@/components/Button/button.component";

function Appfooter() {
  const router = useRouter();
  const { appMenuItem } = useContext(LayoutContext);
  const pathName = usePathname();
  const [indexPage, setIndexPage] = useState<number>(0);

  useEffect(() => {
    appMenuItem.map((item, index) => {
      if (pathName.includes(item.to)) {
        setIndexPage(index);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName, appMenuItem]);

  return (
    <footer className='fixed bottom-0 w-full  border-t border-light-300 shadow-customPrimary hover:shadow-customSecondary bg-light-200'>
      <div className='w-full max-w-container mx-auto flex flex-row items-center justify-between px-16 py-5'>
        <div>
          {indexPage !== 0 && (
            <Button
              content='Previous'
              variant='outline'
              startIcon={ArrowLeft}
              color='primary'
              size='medium'
              onClick={() => {
                router.push(appMenuItem[indexPage - 1].to);
              }}
            />
          )}
        </div>
        <div className='flex flex-row items-center gap-3 '>
          <Button
            content='Discard'
            variant='contained'
            size='medium'
            color='secondary'
          />

          <Button
            content='Save as Draft'
            variant='contained'
            size='medium'
            color='secondary'
            onClick={() => {}}
          />

          {indexPage === appMenuItem.length - 1 ? (
            <Button
              content='Publish'
              variant='contained'
              size='medium'
              color='primary'
              endIcon={ArrowRightLight}
              onClick={() => {}}
            />
          ) : (
            <Button
              content='Next'
              variant='contained'
              size='medium'
              color='primary'
              endIcon={ArrowRightLight}
              onClick={() => {
                router.push(appMenuItem[indexPage + 1].to);
              }}
            />
          )}
        </div>
      </div>
    </footer>
  );
}

export default Appfooter;
