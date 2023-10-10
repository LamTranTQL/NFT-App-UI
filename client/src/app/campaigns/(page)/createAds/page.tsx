"use client";

import React, { Suspense } from "react";

const BusinessName = React.lazy(
  () => import("@/components/Business_Name/businessName.component")
);

const BusinessLogo = React.lazy(
  () => import("@/components/Business_Logo/businessLogo.component")
);

const FinalURL = React.lazy(
  () => import("@/components/Final_URL/finalURL.component")
);
function CreateAds() {
  return (
    <div className='flex flex-col gap-6'>
      <Suspense fallback={<span>Loading...</span>}>
        <BusinessName />
      </Suspense>
      <Suspense fallback={<span>Loading...</span>}>
        <BusinessLogo />
      </Suspense>
      <Suspense fallback={<span>Loading...</span>}>
        <FinalURL />
      </Suspense>
    </div>
  );
}

export default CreateAds;
