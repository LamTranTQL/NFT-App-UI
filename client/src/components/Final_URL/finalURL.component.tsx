/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useSyncExternalStore, KeyboardEvent, useEffect } from "react";
import Input from "../Input/input.component";
import { finalURLStore } from "@/stores/createAds.store";

function FinalURL() {
  const finalURL = useSyncExternalStore(
    finalURLStore.subscribe,
    finalURLStore.getSnapshot,
    () => ""
  );
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = finalURL;
    }
  }, []);

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    let val = (e.target as HTMLInputElement).value;
    finalURLStore.addFinalURL(val);
  };

  return (
    <div className='flex flex-col gap-3'>
      <h4 className='heading-4'>Final URL</h4>
      <label>
        Enter the URL where you want customers to land after clicking your ad
      </label>
      <div className='input-wrapper'>
        <Input type='text' ref={inputRef} onKeyUp={handleKeyUp} />
      </div>
    </div>
  );
}

export default FinalURL;
