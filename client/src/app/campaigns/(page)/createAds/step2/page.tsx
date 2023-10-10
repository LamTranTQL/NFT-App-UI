"use client";

import ImageThumbnail from "@/assets/images/image2.png";
import Image from "next/image";
import Thumbnail2 from "@/assets/images/thumbnail-2.png";

function CreateAds() {
  return (
    <div className='flex flex-col gap-4'>
      <h4 className='heading-4'>Ad Images</h4>
      <label className='mb-0'>
        Use the edit icon to crop images for a perfect fit
      </label>
      <div className='w-full rounded-xl border border-light-300 p-6 flex flex-col gap-4'>
        <div className='flex flex-row flex-wrap gap-4 justify-start'>
          <Image
            src={ImageThumbnail}
            alt='thumbnail'
            className='w-[100px] h-auto'
          />
          <Image
            src={ImageThumbnail}
            alt='thumbnail'
            className='w-[100px] h-auto'
          />
          <Image
            src={ImageThumbnail}
            alt='thumbnail'
            className='w-[100px] h-auto'
          />
          <Image
            src={ImageThumbnail}
            alt='thumbnail'
            className='w-[100px] h-auto'
          />
          <Image
            src={ImageThumbnail}
            alt='thumbnail'
            className='w-[100px] h-auto'
          />
          <Image
            src={ImageThumbnail}
            alt='thumbnail'
            className='w-[100px] h-auto'
          />
          <Image
            src={ImageThumbnail}
            alt='thumbnail'
            className='w-[100px] h-auto'
          />
          <Image
            src={ImageThumbnail}
            alt='thumbnail'
            className='w-[100px] h-auto'
          />
        </div>

        <div className='flex flex-row flex-wrap gap-4 justify-start'>
          <Image
            src={Thumbnail2}
            alt='thumbnail'
            className='h-[100px] w-auto'
          />
          <Image
            src={Thumbnail2}
            alt='thumbnail'
            className='h-[100px] w-auto'
          />
          <Image
            src={Thumbnail2}
            alt='thumbnail'
            className='h-[100px] w-auto'
          />
          <Image
            src={Thumbnail2}
            alt='thumbnail'
            className='h-[100px] w-auto'
          />
          <Image
            src={Thumbnail2}
            alt='thumbnail'
            className='h-[100px] w-auto'
          />
          <Image
            src={Thumbnail2}
            alt='thumbnail'
            className='h-[100px] w-auto'
          />
          <Image
            src={Thumbnail2}
            alt='thumbnail'
            className='h-[100px] w-auto'
          />
          <Image
            src={Thumbnail2}
            alt='thumbnail'
            className='h-[100px] w-auto'
          />
        </div>
      </div>
    </div>
  );
}

export default CreateAds;
