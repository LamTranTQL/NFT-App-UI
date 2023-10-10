"use client";

import ToolTip from "@/components/Tooltip/tooltip.component";
import Image from "next/image";
import HelpIcon from "@/assets/icons/help-icon.svg";
import { useSyncExternalStore } from "react";
import { CTAStore, longHeadlineStore } from "@/stores/createAds.store";
import InputCounter from "@/components/Input_Counter/inputCounter.component";
import SingleSelect from "@/components/Single_Select/singleSelect.component";
import { emptyCTA } from "@/demo/Empty_Value/emptyValue";
import dynamic from "next/dynamic";
import Loading from "@/components/Loading/loading.component";

const Headline = dynamic(
  () => import("@/components/Create_Ads_Headline/createAdsHeadline.component"),
  { loading: () => <Loading /> }
);

const Description = dynamic(
  () =>
    import(
      "@/components/Create_Ads_Description/createAdsDescription.component"
    ),
  { loading: () => <Loading /> }
);

const AdsPreview = dynamic(
  () => import("@/components/Ads_Preview/adsPreview.component"),
  { loading: () => <Loading /> }
);

function CreateAds() {
  const longHeadline = useSyncExternalStore(
    longHeadlineStore.subscribe,
    longHeadlineStore.getSnapshot,
    () => ""
  );

  const callToAction = useSyncExternalStore(
    CTAStore.subscribe,
    CTAStore.getSnapshot,
    () => ""
  );

  const handleLongHeadlineChange = (key: string, val: string) => {
    longHeadlineStore.addLongHeadline(val);
  };

  const handleCTAChange = (val: string) => {
    CTAStore.addCTA(val);
  };

  return (
    <div className='flex flex-row gap-10'>
      <div className='max-w-[560px] w-full flex flex-col gap-[25px]'>
        <Headline />

        <div className='w-full rounded-xl border border-light-500 p-[23px] flex flex-col gap-[25px]'>
          <div className='flex flex-row gap-[10px]'>
            <h4 className='font-medium text-xl text-dark-100'>Long Headline</h4>
            <ToolTip content="Add a longer headline to provide more detail about your NFTs. Use strong action words, highlight key benefits, or pose a question to grab your audience's attention.">
              <Image src={HelpIcon} alt='help' className='w-[18px] h-auto' />
            </ToolTip>
          </div>
          <InputCounter
            type='text'
            placeholder='Enter Ad headline'
            maxLength={90}
            keyname='long headline'
            onValueChange={handleLongHeadlineChange}
            value={longHeadline}
          />
        </div>

        <Description />

        <div className='w-full rounded-xl border border-light-500 p-[23px] flex flex-col gap-[25px]'>
          <h4 className='font-medium text-xl text-dark-100'>Call To Action</h4>
          <div>
            <label>Select “Call To Action” button</label>
            <SingleSelect
              ariaLabel='CTA'
              placeholder='Choose CTA'
              value={emptyCTA}
              className='w-full'
              onValueChange={handleCTAChange}
              defaultValue={callToAction ? callToAction : undefined}
            />
          </div>
        </div>
      </div>

      <AdsPreview />
    </div>
  );
}

export default CreateAds;
