import React, { useSyncExternalStore } from "react";
import AccordionComponent from "../Accordion/accordion.component";
import InputCounter from "../Input_Counter/inputCounter.component";
import { descriptionsStore } from "@/stores/createAds.store";

function CreateAdsDescription() {
  const descriptions = useSyncExternalStore(
    descriptionsStore.subscribe,
    descriptionsStore.getSnapshot,
    () => ({
      description1: "",
      description2: "",
      description3: "",
      description4: "",
      description5: "",
    })
  );

  const handleDescriptionChange = (keyName: string, val: string) => {
    descriptionsStore.addDescription(keyName, val);
  };

  return (
    <AccordionComponent title='Description'>
      <div className='flex flex-col gap-4'>
        <p className='font-normal text-base text-zest-500'>
          Add 5 descriptions to maximize the impact of your ad
        </p>
        <InputCounter
          type='text'
          maxLength={30}
          title='Description 1'
          placeholder='Write description'
          keyname='description1'
          onValueChange={handleDescriptionChange}
          value={descriptions.description1}
        />
        <InputCounter
          type='text'
          maxLength={30}
          title='Description 2'
          placeholder='Write description'
          keyname='description2'
          onValueChange={handleDescriptionChange}
          value={descriptions.description2}
        />
        <InputCounter
          type='text'
          maxLength={30}
          title='Description 3'
          placeholder='Write description'
          keyname='description3'
          onValueChange={handleDescriptionChange}
          value={descriptions.description3}
        />
        <InputCounter
          type='text'
          maxLength={30}
          title='Description 4'
          placeholder='Write description'
          keyname='description4'
          onValueChange={handleDescriptionChange}
          value={descriptions.description4}
        />
        <InputCounter
          type='text'
          maxLength={30}
          title='Description 5'
          placeholder='Write description'
          keyname='description5'
          onValueChange={handleDescriptionChange}
          value={descriptions.description5}
        />
      </div>
    </AccordionComponent>
  );
}

export default CreateAdsDescription;
