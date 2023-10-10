import Image from "next/image";
import TrashIcon from "@/assets/icons/trash.svg";
import TrashProps from "./trash.interface";
import { useSyncExternalStore } from "react";
import selectedNFTsStore from "@/stores/selectNFTs.store";

function Trash(props: TrashProps) {
  const { id } = props;
  const selectedNFTs = useSyncExternalStore(
    selectedNFTsStore.subscribe,
    selectedNFTsStore.getSnapshot
  );

  const handleClick = () => {
    if (selectedNFTs.has(id)) {
      selectedNFTsStore.removeNFT(id);
    }
  };

  return (
    <div className='flex flex-row items-center'>
      <div
        className='w-10 h-10 flex items-center justify-center hover:bg-Gray-200 rounded-lg'
        onClick={handleClick}
      >
        <Image src={TrashIcon} alt='Trash' className='w-5 h-5' />
      </div>
    </div>
  );
}

export default Trash;
