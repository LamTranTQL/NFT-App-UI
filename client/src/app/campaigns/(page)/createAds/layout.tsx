"use client";

import Button from "@/components/Button/button.component";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";
import ArrowLeft from "@/assets/icons/arrow-left.svg";
import ArrowRight from "@/assets/icons/arrow-right-light.svg";
import PageHeader from "@/components/Page_Header/pageHeader.component";

export default function CreateAdsLayout({ children }: { children: ReactNode }) {
  const pathName = usePathname();
  const router = useRouter();

  const preButtonClick = () => {
    if (pathName === "/campaigns/createAds/step3") {
      router.push("/campaigns/createAds/step2");
    } else if (pathName === "/campaigns/createAds/step2") {
      router.push("/campaigns/createAds");
    }
  };

  const nextButtonClick = () => {
    if (pathName === "/campaigns/createAds") {
      router.push("/campaigns/createAds/step2");
    } else if (pathName === "/campaigns/createAds/step2") {
      router.push("/campaigns/createAds/step3");
    }
  };

  return (
    <div>
      <PageHeader content='Create Ads' />
      <div className='w-full px-6 pt-6 pb-0 flex flex-col gap-6 bg-light-100 rounded-xl mt-[30px]'>
        <div>{children}</div>
        <div className='w-full py-5 flex flex-row justify-between items-center border-t border-light-300'>
          <div>
            {pathName !== "/campaigns/createAds" && (
              <Button
                content='Previous'
                startIcon={ArrowLeft}
                size='small'
                variant='outline'
                color='primary'
                onClick={preButtonClick}
              />
            )}
          </div>
          <div>
            {pathName !== "/campaigns/createAds/step3" && (
              <Button
                content='Next'
                endIcon={ArrowRight}
                color='primary'
                variant='contained'
                size='small'
                onClick={nextButtonClick}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
