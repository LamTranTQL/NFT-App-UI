"use client";

import Loading from "@/components/Loading/loading.component";
import PageHeader from "@/components/Page_Header/pageHeader.component";
import dynamic from "next/dynamic";

const Information = dynamic(
  () => import("@/components/Information/information.component"),
  {
    loading: () => <Loading />,
  }
);

const BlockSites = dynamic(
  () => import("@/components/Block_Sites/blockSites.component"),
  {
    loading: () => <Loading />,
  }
);

const Category = dynamic(
  () => import("@/components/Category/category.component"),
  {
    loading: () => <Loading />,
  }
);

function Campaigns() {
  return (
    <div className='flex flex-col gap-5'>
      <p className='font-light text-sm text-dark-100 border border-light-300 rounded-xl shadow-customPrimary hover:shadow-customSecondary py-[14px] px-[21px] mb-[10px]'>
        A campaign focuses on single or group of NFTs called collection. To
        create a campaign, you’ll set a budget, choose your target location,
        audience and write your keywards. Bear in mind that you won’t be charged
        for selecting options, and you can always make changes later.
      </p>
      <PageHeader content='Campaign Details' />

      <Information />

      <BlockSites />

      <Category />
    </div>
  );
}

export default Campaigns;
