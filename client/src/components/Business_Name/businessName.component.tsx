/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, KeyboardEvent, useSyncExternalStore, useEffect } from "react";
import Input from "../Input/input.component";
import { businessNameStore } from "@/stores/createAds.store";

function BusinessName() {
  const businessName = useSyncExternalStore(
    businessNameStore.subscribe,
    businessNameStore.getSnapshot,
    () => ""
  );

  const counterRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = businessName;
    }

    if (counterRef.current && inputRef.current) {
      counterRef.current.innerText =
        businessName.length + "/" + inputRef.current.maxLength;
    }
  }, []);

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    const val = (e.target as HTMLInputElement).value;
    if (counterRef.current && inputRef.current) {
      counterRef.current.innerText =
        val.length + "/" + inputRef.current.maxLength;
    }
    businessNameStore.addBusinessName(val);
  };
  return (
    <div className='flex flex-col gap-4'>
      <h4 className='heading-4'>Business Name</h4>
      <div>
        <label>
          Provide your business name for better search ad visibility
        </label>
        <div className='input-wrapper'>
          <Input
            ref={inputRef}
            type='text'
            maxLength={25}
            placeholder='Your Business Name'
            onKeyUp={handleKeyUp}
          />
        </div>
        <div
          ref={counterRef}
          className='w-full text-right mt-3 font-normal text-sm text-dark-600'
        >
          0/25
        </div>
      </div>
    </div>
  );
}

export default BusinessName;
