/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Button from "@/components/Button/button.component";
import Loading from "@/components/Loading/loading.component";
import selectedNFTsStore from "@/stores/selectNFTs.store";
import { NFTType } from "@/types/types";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";

const TableComponent = dynamic(
  () => import("@/components/Table/table.component"),
  { loading: () => <Loading /> }
);

function SelectedNFTs() {
  const router = useRouter();
  const [data, setData] = useState<NFTType[]>([]);

  const selectedNFTs = useSyncExternalStore(
    selectedNFTsStore.subscribe,
    selectedNFTsStore.getSnapshot,
    () => new Map()
  );

  useEffect(() => {
    let _selectedNFTs: NFTType[] = Array.from(selectedNFTs.values());

    setData(_selectedNFTs);
  }, [selectedNFTs]);

  const addNFTClick = () => {
    router.push("/campaigns/selectNFTs");
  };
  const clearAllClick = () => {
    router.push("/campaigns/selectNFTs");
  };

  return (
    <div className='flex flex-col gap-5'>
      <div className='w-full pb-6 border-b-2 border-light-300 flex flex-row justify-between items-center gap-4'>
        <h3 className='text-2xl font-bold text-dark-100'>Select NFTs</h3>
        <div className='flex flex-row gap-2 items-center'>
          <Button
            color='secondary'
            size='small'
            variant='contained'
            content='Clear All'
            onClick={clearAllClick}
          />
          <Button
            content='Add NFT'
            size='small'
            variant='outline'
            color='primary'
            onClick={addNFTClick}
          />
        </div>
      </div>

      <TableComponent value={data} checkbox={false} remove={true} />
    </div>
  );
}

export default SelectedNFTs;
