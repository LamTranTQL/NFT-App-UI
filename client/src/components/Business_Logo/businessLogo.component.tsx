import React, { useSyncExternalStore } from "react";
import FileUpload from "../FileUpload/fileUpload.component";
import { businessLogoStore } from "@/stores/createAds.store";

function BusinessLogo() {
  const businessLogo = useSyncExternalStore(
    businessLogoStore.subscribe,
    businessLogoStore.getSnapshot,
    () => null
  );

  const handleChange = (val: File) => {
    businessLogoStore.addBusinessLogo(val);
  };

  const handleRemoveValueClick = () => {
    businessLogoStore.removeBusinessLogo;
  };
  return (
    <div className='flex flex-col gap-3'>
      <h4 className='heading-4'>Business Logo</h4>
      <div>
        <label>
          Increase brand recognition by uploading your business logo
        </label>
        <FileUpload
          maxSize={50}
          value={businessLogo}
          onChange={handleChange}
          removeValue={handleRemoveValueClick}
        />
      </div>
    </div>
  );
}

export default BusinessLogo;
