"use client";
import Card from "@/components/Card/card.component";
import Input from "@/components/Input/input.component";
import Selected from "@/components/Selected/selected.component";
import { blockSitesStore } from "@/stores/campaigns.store";

import React, {
  useState,
  KeyboardEvent,
  useRef,
  useSyncExternalStore,
} from "react";

function BlockSites() {
  const blockSites = useSyncExternalStore(
    blockSitesStore.subscribe,
    blockSitesStore.getSnapshot,
    () => []
  );
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    let val: string;
    if (inputRef.current) {
      val = inputRef.current.value;
      if (e.key === "Enter" && val) {
        blockSitesStore.addBlockSite(val);
        inputRef.current.value = "";
      }
    }
  };

  const handleRemoveValueSelected = (i: number) => {
    blockSitesStore.removeBlockSite(i);
  };

  return (
    <>
      <Card header='Block Sites'>
        <div className='flex flex-col gap-3'>
          <div>
            <label htmlFor='block-sites'>
              Block specific sites based on performance or brand safety
            </label>
            <div className='input-wrapper'>
              <Input
                id='block-sites'
                type='text'
                placeholder='Enter specific sites (optional)'
                onKeyUp={handleKeyUp}
                ref={inputRef}
              />
            </div>
          </div>

          {blockSites.length !== 0 && (
            <Selected
              title='Selected'
              value={blockSites}
              removeValue={true}
              onClick={handleRemoveValueSelected}
            />
          )}
        </div>
      </Card>
    </>
  );
}

export default BlockSites;
