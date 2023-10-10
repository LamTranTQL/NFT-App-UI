"use client";

import * as Accordion from "@radix-ui/react-accordion";
import styles from "./review.module.css";
import { Suspense, lazy } from "react";
import dynamic from "next/dynamic";
import PageHeader from "@/components/Page_Header/pageHeader.component";

const CampaignsDetails = dynamic(
  () => import("@/components/Campaigns_Details/campaignsDetails.component"),
  { loading: () => <p>Loading...</p> }
);

const SelectNFTsComponent = dynamic(
  () => import("@/components/Select_NFTs/selectNFTs.component"),
  { loading: () => <p>Loading...</p> }
);

const Targeting = dynamic(
  () => import("@/components/Targeting/targeting.component"),
  { loading: () => <p>Loading...</p> }
);

const CreateAds = dynamic(
  () => import("@/components/Create_Ads/createAds.component"),
  { loading: () => <p>Loading...</p> }
);

const Bidding = dynamic(
  () => import("@/components/Bidding/bidding.component"),
  { loading: () => <p>Loading...</p> }
);

function Review() {
  return (
    <div>
      <PageHeader content='Review' />
      <div className='mt-5 flex flex-col gap-[30px]'>
        <Accordion.Root type='multiple' className={styles.AccordionRoot}>
          <CampaignsDetails />

          <SelectNFTsComponent />

          <Targeting />

          <CreateAds />

          <Bidding />
        </Accordion.Root>
      </div>
    </div>
  );
}

export default Review;
