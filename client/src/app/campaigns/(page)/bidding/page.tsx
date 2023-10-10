/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Input from "@/components/Input/input.component";
import styles from "./bidding.module.css";
import { useRef, useSyncExternalStore, KeyboardEvent, useEffect } from "react";
import { focusOnStore, targetCPAStore } from "@/stores/bidding.store";
import PageHeader from "@/components/Page_Header/pageHeader.component";
import SingleSelect from "@/components/Single_Select/singleSelect.component";
import { emptyBidding } from "@/demo/Empty_Value/emptyValue";

function Biding() {
  const inputRef = useRef<HTMLInputElement>(null);
  const focusOn = useSyncExternalStore(
    focusOnStore.subscribe,
    focusOnStore.getSnapshot,
    () => ""
  );
  const targetCPA = useSyncExternalStore(
    targetCPAStore.subscribe,
    targetCPAStore.getSnapshot,
    () => 0
  );

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = targetCPA.toString();
    }
  }, []);

  const handleFocusOnChange = (val: string) => {
    focusOnStore.addFocusOn(val);
  };

  const handleCTAKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    let val: number = Number((e.target as HTMLInputElement).value);
    targetCPAStore.addTargetCPA(val);
  };

  return (
    <div>
      <PageHeader content='Bidding' />
      <div className='mt-5 w-full rounded-xl border border-light-300 p-6 flex flex-col gap-[25px]'>
        <h4 className='heading-4'>Bid Strategy</h4>

        <div>
          <label>What do you want to focus on?</label>
          <SingleSelect
            value={emptyBidding}
            className={styles.Select}
            placeholder='What do you want to focus on?'
            onValueChange={handleFocusOnChange}
            defaultValue={focusOn ? focusOn : undefined}
          />
        </div>

        {focusOn === "Target CPA" && (
          <div>
            <label>Target CPA</label>
            <div className='border border-Gray-200 rounded-xl py-1 px-[5px] flex flex-row gap-[10px] w-full'>
              <span className='rounded-tl-[10px] rounded-bl-[10px] font-medium text-base text-dark-600 py-[18px] pr-[20px] pl-5 bg-alto-200'>
                USD
              </span>
              <Input type='number' ref={inputRef} onKeyUp={handleCTAKeyUp} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Biding;
