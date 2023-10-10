"use client";

import Loading from "@/components/Loading/loading.component";
import PageHeader from "@/components/Page_Header/pageHeader.component";
import { TableProvider } from "@/context/tableContext";
import dynamic from "next/dynamic";

const NFTsContainer = dynamic(
  () => import("@/components/NFTs_Container/nftsContainer.component"),
  { loading: () => <Loading /> }
);

function SelectNFTs() {
  return (
    <div className='flex flex-col gap-5'>
      <PageHeader content='Select NFTs' />
      <TableProvider>
        <NFTsContainer title='Unminted NFTs' />
      </TableProvider>
    </div>
  );
}

export default SelectNFTs;
