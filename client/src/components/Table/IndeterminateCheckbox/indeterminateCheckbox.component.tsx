/* eslint-disable react-hooks/exhaustive-deps */
import selectedNFTsStore from "@/stores/selectNFTs.store";
import { NFTType } from "@/types/types";
import { HTMLProps, useEffect, useRef, useSyncExternalStore } from "react";

function IndeterminateCheckbox({
  indeterminate,
  value,
  ...rest
}: {
  indeterminate?: boolean;
  value?: NFTType | NFTType[];
} & HTMLProps<HTMLInputElement>) {
  const ref = useRef<HTMLInputElement>(null!);

  const selectedNFTs = useSyncExternalStore(
    selectedNFTsStore.subscribe,
    selectedNFTsStore.getSnapshot,
    () => new Map()
  );

  useEffect(() => {
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate]);

  const handleClick = () => {
    if (ref.current.checked && value) {
      selectedNFTsStore.addNFT(value as NFTType);
    } else if (
      !ref.current.checked &&
      value &&
      selectedNFTs.has((value as NFTType).id)
    ) {
      selectedNFTsStore.removeNFT((value as NFTType).id);
    }
  };

  return (
    <input
      type='checkbox'
      ref={ref}
      className={"w-5 h-5 bg-main-200"}
      {...rest}
      onClick={handleClick}
    />
  );
}

export default IndeterminateCheckbox;
