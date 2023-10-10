"use client";
import ButtonIcon from "../Button/buttonIcon.component";
import ArrowLeft from "@/assets/icons/arrow-left.svg";
import ArrowRight from "@/assets/icons/arrow-right.svg";
import AdsPreviewImage from "@/assets/images/ads-preview.png";
import Star from "@/assets/icons/star.svg";
import Image from "next/image";
import Button from "../Button/button.component";

function AdsPreview() {
  return (
    <div className='w-[368px] max-h-[802px] h-full rounded-xl border border-light-300 p-[23px] shadow-customPrimary hover:shadow-customSecondary'>
      <h4 className='font-medium text-xl text-dark-100 mb-6'>Ads Preview</h4>
      <div className='border border-light-500 rounded-[18px]'>
        <Image
          src={AdsPreviewImage}
          alt='preview image'
          className='w-full h-auto'
        />
        <div className='w-full p-4 flex flex-col gap-[10px] justify-center items-center'>
          <Image alt='star' src={Star} className='w-11 h-auto' />
          <h4 className='font-semibold text-xl text-main-200 text-center'>
            Digital Dreams: Unleashing the Cryptoverse!
          </h4>

          <div className='flex flex-col gap-6 justify-center items-center'>
            <p className='font-light text-sm text-dark-500 text-center -mx-3'>
              Lorem ipsum dolor sit amet consectetur. Elementum ipsum odio nulla
              in volutpat vitae. Et praesent sit nisl aenean ac et consectetur
              aliquet placerat. In lobortis non velit in aenean.
            </p>

            <Button content='Learn More' color='primary' variant='contained' />
          </div>
        </div>
      </div>
      <div className='mt-6 flex flex-row justify-center items-center gap-5 p-[10px]'>
        <ButtonIcon image={ArrowLeft} />
        <ButtonIcon image={ArrowRight} />
      </div>
    </div>
  );
}

export default AdsPreview;
