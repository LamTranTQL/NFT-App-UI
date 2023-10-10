import React, { useSyncExternalStore } from "react";
import AccordionComponent from "../Accordion/accordion.component";
import InputCounter from "../Input_Counter/inputCounter.component";
import { headlinesStore } from "@/stores/createAds.store";

function CreateAdsHeadline() {
  const headlines = useSyncExternalStore(
    headlinesStore.subscribe,
    headlinesStore.getSnapshot,
    () => ({
      headline1: "",
      headline2: "",
      headline3: "",
      headline4: "",
      headline5: "",
    })
  );

  const handleChange = (keyName: string, val: string) => {
    headlinesStore.addHeadline(keyName, val);
  };

  return (
    <AccordionComponent title='Headlines'>
      <div className='flex flex-col gap-4'>
        <p className='font-normal text-base text-zest-500'>
          Add 5 headlines to maximize the impact of your ad
        </p>
        <InputCounter
          type='text'
          maxLength={30}
          title='Headline 1'
          placeholder='Enter Ad headline'
          onValueChange={handleChange}
          keyname='headline1'
          value={headlines.headline1}
        />
        <InputCounter
          type='text'
          maxLength={30}
          title='Headline 2'
          placeholder='Enter Ad headline'
          keyname='headline2'
          onValueChange={handleChange}
          value={headlines.headline2}
        />
        <InputCounter
          type='text'
          maxLength={30}
          title='Headline 3'
          placeholder='Enter Ad headline'
          keyname='headline3'
          onValueChange={handleChange}
          value={headlines.headline3}
        />
        <InputCounter
          type='text'
          maxLength={30}
          title='Headline 4'
          placeholder='Enter Ad headline'
          keyname='headline4'
          onValueChange={handleChange}
          value={headlines.headline4}
        />
        <InputCounter
          type='text'
          maxLength={30}
          title='Headline 5'
          placeholder='Enter Ad headline'
          keyname='headline5'
          onValueChange={handleChange}
          value={headlines.headline5}
        />
      </div>
    </AccordionComponent>
  );
}

export default CreateAdsHeadline;
